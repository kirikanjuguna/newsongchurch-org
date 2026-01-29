import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

/* ================= CONFIG ================= */

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

// 🔒 Narrow type for TS
const SECRET: string = JWT_SECRET;

/* ================= TYPES ================= */

export interface AdminPayload {
  id: string;
  email: string;
}

/* ================= AUTH HELPERS ================= */

/**
 * Verify admin JWT from HttpOnly cookie
 */
export async function getAdminFromRequest(): Promise<AdminPayload> {
  const cookieStore = await cookies(); // ✅ TS-safe in Next 16
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  try {
    const decoded = jwt.verify(token, SECRET) as unknown as AdminPayload;
    return decoded;
  } catch {
    throw new Error("Invalid or expired token");
  }
}

/**
 * Sign JWT for admin login
 */
export function signToken(payload: AdminPayload): string {
  return jwt.sign(payload, SECRET, {
    expiresIn: "1d",
  });
}
