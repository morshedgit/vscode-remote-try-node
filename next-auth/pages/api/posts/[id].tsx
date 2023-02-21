import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handlePut = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  const { title, content } = req.body;

  try {
    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });
    return res.status(200).send(post);
  } catch (e: any) {
    return res.status(400).send({ message: e.message });
  }
};
const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };

  try {
    const post = await prisma.post.delete({
      where: { id: id },
    });
    return res.status(204).send({});
  } catch (e: any) {
    return res.status(400).send({ message: e.message });
  }
};
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "PUT":
      return handlePut(req, res);
    case "DELETE":
      return handleDelete(req, res);
    default:
      return res.status(405).send({ message: "Method Not Allowed" });
  }
};

export default handler;
