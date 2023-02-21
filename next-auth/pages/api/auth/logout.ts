import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies.token;
  res.setHeader(
    "Set-Cookie",
    `token=${token}; HttpOnly; domain=localhost;path=/; Max-age=-1`
  );
  res.status(401).send({ message: "Unauthorized" });
}
