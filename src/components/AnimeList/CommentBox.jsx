import prisma from "@/libs/prisma";
import Image from "next/image";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comments.findMany({
    where: { anime_mal_id },
  });

  return (
    <div className={`mb-6 max-h-64 ${comments.length > 2 ? "overflow-y-scroll" : ""}`}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="mb-4 rounded-md border border-color-dark-300">
            <div className="flex justify-start items-center gap-2 bg-color-primary p-2 rounded-t-md">
              <Image className="w-8 h-8 rounded-full border-2 border-color-accent" src={comment.user_image} alt={`Foto Profil ${comment.username}`} width={50} height={50} />
              <p className="text-lg font-bold">{comment.username}</p>
            </div>
            <p className="text-lg text-color-light-200 rounded-b-md bg-color-dark-200 py-2 px-2">{comment.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-lg text-color-light-200 overflow-hidden">Belum Ada Komentar</p>
      )}
    </div>
  );
};

export default CommentBox;
