import { NextRequest, NextResponse } from "next/server";
import getDb from "@/lib/db";
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

  const db = getDb();

  const conditions: string[] = [];
  const params: (string | number)[] = [];

  if (search) {
    conditions.push("(name LIKE ? OR phone LIKE ?)");
    params.push(`%${search}%`, `%${search}%`);
  }
  if (status) {
    conditions.push("status = ?");
    params.push(status);
  }
  if (interestType) {
    conditions.push("interest_type LIKE ?");
    params.push(`%${interestType}%`);
  }
  if (dateFrom) {
    conditions.push("created_at >= ?");
    params.push(dateFrom);
  }
  if (dateTo) {
    conditions.push("created_at <= ?");
    params.push(dateTo + " 23:59:59");
  }

  const where =
    conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";

  const allowedSort = [
    "id",
    "name",
    "phone",
    "interest_type",
    "status",
    "created_at",
  ];
  const safeSort = allowedSort.includes(sortBy) ? sortBy : "created_at";
  const safeOrder = sortOrder === "asc" ? "ASC" : "DESC";

  const { total } = db
    .prepare(`SELECT COUNT(*) as total FROM registrations ${where}`)
    .get(...params) as { total: number };

  const offset = (page - 1) * limit;
  const data = db
    .prepare(
      `SELECT * FROM registrations ${where} ORDER BY ${safeSort} ${safeOrder} LIMIT ? OFFSET ?`,
    )
    .all(...params, limit, offset);

  return NextResponse.json({
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  });
}
