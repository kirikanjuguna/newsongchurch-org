import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AdminPayload {
  id: string;
  email: string;
}

// 🔐 Verify admin from HttpOnly cookie
export async function getAdminFromRequest(): Promise<AdminPayload> {
  const cookieStore = await cookies(); // ✅ async in Next 15+
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  try {
    return jwt.verify(token, JWT_SECRET) as AdminPayload;
  } catch {
    throw new Error("Invalid or expired token");
  }
}

// 🔑 Sign JWT for admin login
export function signToken(payload: AdminPayload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d",
  });
}
