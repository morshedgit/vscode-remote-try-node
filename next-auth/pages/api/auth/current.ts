import { getCurrentUser } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies.token;
  //   console.log({ token });

  const user = await getCurrentUser(token);
  res.status(200).send({ user });
};

export default handler;
