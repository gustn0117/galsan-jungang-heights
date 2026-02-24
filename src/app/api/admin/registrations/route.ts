import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const interestType = searchParams.get("interest_type") || "";
  const dateFrom = searchParams.get("date_from") || "";
  const dateTo = searchParams.get("date_to") || "";
  const sortBy = searchParams.get("sort_by") || "created_at";
  const sortOrder = searchParams.get("sort_order") || "desc";

  const allowedSort = ["id", "name", "phone", "interest_type", "status", "created_at"];
  const safeSort = allowedSort.includes(sortBy) ? sortBy : "created_at";
  const ascending = sortOrder === "asc";

  const offset = (page - 1) * limit;

  let query = supabase.from("registrations").select("*", { count: "exact" });

  if (search) {
    query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%`);
  }
  if (status) {
    query = query.eq("status", status);
  }
  if (interestType) {
    query = query.ilike("interest_type", `%${interestType}%`);
  }
  if (dateFrom) {
    query = query.gte("created_at", dateFrom);
  }
  if (dateTo) {
    query = query.lte("created_at", dateTo + "T23:59:59");
  }

  query = query.order(safeSort, { ascending }).range(offset, offset + limit - 1);

  const { data, count, error } = await query;

  if (error) {
    console.error("List error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  const total = count || 0;

  return NextResponse.json({
    data: data || [],
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  });
}
