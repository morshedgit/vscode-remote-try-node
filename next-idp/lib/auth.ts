import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { NextRequest } from "next/server";

export interface User {
  id: number;
  username: string;
  password: string;
}

export const users: User[] = [
  { id: 1, username: "user1@mail.com", password: "123" },
  { id: 2, username: "user2@mail.com", password: "123" },
];
export async function createToken(user: User): Promise<string> {
  const payload = { sub: user.id.toString(), username: user.username };
  const secret = "my-secret-key";
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(secret));
  return jwt;
}

export async function verifyToken(token: string): Promise<User | null> {
  const secret = "my-secret-key";
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      {
        algorithms: ["HS256"],
      }
    );
    const user = users.find(
      (u) => u.id === Number(payload.sub) && u.username === payload.username
    );
    return user || null;
  } catch (err) {
    return null;
  }
}

export const isAuthenticated = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return false;
  }

  const user = verifyToken(token);
  if (!user) {
    return false;
  }

  return true;
};

declare module "next" {
  export interface NextApiRequest {
    user?: User;
  }
}
