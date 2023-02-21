import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany();
  return res.status(200).json(posts);
};
const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "Bad Request" });
  const post = await prisma.post.create({ data: { title, content } });
  return res.status(201).json(post);
};
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    case "POST":
      return handlePost(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
