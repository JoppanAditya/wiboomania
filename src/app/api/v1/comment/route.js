import prisma from "@/libs/prisma";

export async function POST(req) {
  const { anime_mal_id, user_email, comment, username, user_image, anime_title } = await req.json();
  const data = { anime_mal_id, user_email, comment, username, user_image, anime_title };

  const createComment = await prisma.comments.create({ data });
  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
