import { NextResponse } from "next/server";
import supabase from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: rows, error } = await supabase
    .from("registrations")
    .select("id, name, phone, interest_type, message, status, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  const statusMap: Record<string, string> = {
    new: "신규",
    contacted: "상담완료",
    completed: "계약완료",
  };

  const BOM = "\uFEFF";
  const header = "번호,이름,연락처,관심평형,문의사항,상태,등록일시\n";
  const csvRows = (rows || [])
    .map((r) =>
      [
        r.id,
        `"${r.name}"`,
        `"${r.phone}"`,
        `"${r.interest_type}"`,
        `"${(r.message || "").replace(/"/g, '""')}"`,
        statusMap[r.status] || r.status,
        r.created_at,
      ].join(","),
    )
    .join("\n");

  const csv = BOM + header + csvRows;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=registrations_${new Date().toISOString().slice(0, 10)}.csv`,
    },
  });
}
