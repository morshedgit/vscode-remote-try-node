import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { NextRequest } from "next/server";

export interface User {
  id: number;
  username: string;
  password: string;
}

export const users: User[] = [
  { id: 1, username: "user1@mail.com", password: "password1" },
  { id: 2, username: "user2@mail.com", password: "password2" },
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

export async function verifyToken(token: string): Promise<boolean> {
  const secret = "my-secret-key";
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      {
        algorithms: ["HS256"],
      }
    );
    if (payload.sub) return true;
    else return false;
  } catch (err) {
    return false;
  }
}
export async function getCurrentUser(token: string): Promise<User | null> {
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
  } catch (err: any) {
    console.log({ error: err.message });
    return null;
  }
}

export const isAuthenticated = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return false;
  }
  if (!verifyToken(token)) {
    return false;
  }

  return true;
};

declare module "next" {
  export interface NextApiRequest {
    user?: User;
  }
}
