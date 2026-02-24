import { NextResponse } from "next/server";
import supabase from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { count: total } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true });

  const { count: newCount } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .eq("status", "new");

  const { count: contacted } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .eq("status", "contacted");

  const { count: completed } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .eq("status", "completed");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const { count: todayCount } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .gte("created_at", today.toISOString());

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const { count: weekCount } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .gte("created_at", weekAgo.toISOString());

  return NextResponse.json({
    total: total || 0,
    new: newCount || 0,
    contacted: contacted || 0,
    completed: completed || 0,
    todayCount: todayCount || 0,
    weekCount: weekCount || 0,
  });
}
