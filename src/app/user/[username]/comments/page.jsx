import CommentList from "@/components/Profile/CommentList";
import Header from "@/components/Profile/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const CommentsPage = async () => {
  const user = await authUserSession();
  const comments = await prisma.comments.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 p-4">
      <Header title={"Komentar Saya"} />
      {comments.length == 0 ? (
        <div className="px-4 text-center md:text-3xl text-xl text-color-light-100 flex flex-col justify-center items-center h-full w-full font-bold absolute top-0 left-0 -z-10">Anda Belum Pernah Mengirim Komentar</div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 text-color-light-100">
          {comments.map((comment) => {
            return <CommentList comment={comment} />;
          })}
        </div>
      )}
    </section>
  );
};

export default CommentsPage;
