import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();

  const total = (
    db.prepare("SELECT COUNT(*) as c FROM registrations").get() as {
      c: number;
    }
  ).c;
  const newCount = (
    db
      .prepare("SELECT COUNT(*) as c FROM registrations WHERE status = 'new'")
      .get() as { c: number }
  ).c;
  const contacted = (
    db
      .prepare(
        "SELECT COUNT(*) as c FROM registrations WHERE status = 'contacted'",
      )
      .get() as { c: number }
  ).c;
  const completed = (
    db
      .prepare(
        "SELECT COUNT(*) as c FROM registrations WHERE status = 'completed'",
      )
      .get() as { c: number }
  ).c;
  const todayCount = (
    db
      .prepare(
        "SELECT COUNT(*) as c FROM registrations WHERE date(created_at) = date('now', 'localtime')",
      )
      .get() as { c: number }
  ).c;
  const weekCount = (
    db
      .prepare(
        "SELECT COUNT(*) as c FROM registrations WHERE created_at >= datetime('now', 'localtime', '-7 days')",
      )
      .get() as { c: number }
  ).c;

  return NextResponse.json({
    total,
    new: newCount,
    contacted,
    completed,
    todayCount,
    weekCount,
  });
}
