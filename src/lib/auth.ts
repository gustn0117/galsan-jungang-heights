import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "1234";
const SESSION_TOKEN =
  "galsan-admin-" + Buffer.from(ADMIN_PASSWORD).toString("base64");

export function isAuthenticated(): boolean {
  const cookieStore = cookies();
  const session = cookieStore.get("admin_session");
  return session?.value === SESSION_TOKEN;
}

export function getSessionToken(): string {
  return SESSION_TOKEN;
}

export function getAdminPassword(): string {
  return ADMIN_PASSWORD;
}
