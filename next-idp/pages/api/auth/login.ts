import { createToken, users } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).send("Invalid credentials");
  }
  const token = await createToken(user);
  res.setHeader(
    "Set-Cookie",
    `token=${token}; HttpOnly; domain=localhost;path=/`
  );
  return res.status(200).send({ message: "Successful logins" });
}
