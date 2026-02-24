import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, interest_type, message } = body;

    if (!name || !phone || !interest_type) {
      return NextResponse.json(
        { error: "필수 항목을 입력해 주세요." },
        { status: 400 },
      );
    }

    const phoneClean = phone.replace(/-/g, "");
    if (!/^01[016789]\d{7,8}$/.test(phoneClean)) {
      return NextResponse.json(
        { error: "올바른 연락처를 입력해 주세요." },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("registrations")
      .insert({ name, phone, interest_type, message: message || "" })
      .select("id")
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
