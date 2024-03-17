import Header from "@/components/Profile/Header";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/libs/prisma";
import CollectionList from "@/components/Profile/CollectionList";
import CommentList from "@/components/Profile/CommentList";

const DashboardPage = async ({ params }) => {
  const { username } = params;
  const user = await authUserSession();
  const collection = await prisma.collections.findMany({ where: { user_email: user.email } });
  const comments = await prisma.comments.findMany({ where: { user_email: user.email } });

  return (
    <div className="p-4 text-color-light-100">
      <Header title={"Profil Saya"} />

      <div className="block md:flex gap-16">
        <div className="py-4 md:w-2/6">
          <Image src={user.image} alt={`Foto Profil ${user.name}`} width={300} height={300} className="rounded-full aspect-square w-40 h-auto mx-auto md:w-full md:rounded-md" />
          <div className="my-10 hidden md:block">
            <Link href="/api/auth/signout">
              <p className="block w-full border border-color-red text-color-red rounded-md py-2 text-center hover:bg-color-red hover:text-color-light-100 transition-all">Keluar</p>
            </Link>
          </div>
        </div>

        <div className="md:w-4/6">
          <div className="py-2">
            <h3 className="text-color-light-200 text-lg">Username</h3>
            <p className="text-xl font-bold">{user.name}</p>
          </div>

          <div className="py-2">
            <h3 className="text-color-light-200 text-lg">Email</h3>
            <p className="text-xl font-bold">{user.email}</p>
          </div>

          <div className="py-2">
            <div className="flex items-center justify-between">
              <h3 className="text-color-light-200 text-lg">Koleksi Saya</h3>
              <Link href={`/user/${username}/collections`} className="text-color-primary hover:text-color-accent transition-all underline">
                Lihat Semua
              </Link>
            </div>

            {collection.length == 0 ? (
              <p className="pt-2">Anda Belum Pernah Menambahkan Koleksi</p>
            ) : (
              <>
                <div className="pt-2 grid md:hidden gap-4 grid-cols-2">
                  {collection.slice(0, 2).map((collect) => {
                    return <CollectionList collect={collect} />;
                  })}
                </div>
                <div className="pt-2 hidden md:grid lg:hidden gap-4 grid-cols-3">
                  {collection.slice(0, 3).map((collect) => {
                    return <CollectionList collect={collect} />;
                  })}
                </div>
                <div className="pt-2 hidden lg:grid gap-4 grid-cols-4">
                  {collection.slice(0, 4).map((collect) => {
                    return <CollectionList collect={collect} />;
                  })}
                </div>
              </>
            )}
          </div>

          <div className="py-2">
            <div className="flex items-center justify-between">
              <h3 className="text-color-light-200 text-lg">Komentar Saya</h3>
              <Link href={`/user/${username}/comments`} className="text-color-primary hover:text-color-accent transition-all underline">
                Lihat Semua
              </Link>
            </div>

            {comments.length == 0 ? (
              <p className="pt-2">Anda Belum Pernah Mengirim Komentar</p>
            ) : (
              <div className="pt-2 grid gap-4 grid-cols-2 break-words">
                {comments.slice(0, 2).map((comment) => {
                  return <CommentList comment={comment} />;
                })}
              </div>
            )}
          </div>

          <div className="mt-16 mb-4 block md:hidden">
            <Link href="/api/auth/signout">
              <p className="block w-full border border-color-red text-color-red rounded-md py-2 text-center hover:bg-color-red hover:text-color-light-100 transition-all">Keluar</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="text-color-light-100 flex flex-col justify-center items-center">
  //     <h3 className="text-2xl font-bold">Selamat Datang, {user.name}</h3>
  //     <Image src={user.image} alt={`Foto Profil ${user.name}`} width={300} height={300} />
  //     <div className="flex flex-wrap gap-4 py-8">
  //       <Link href={`/user/${username}/collections`} className="bg-color-primary text-color-dark-200 font-bold px-3 py-4 text-xl rounded-md">
  //         Koleksi Saya
  //       </Link>
  //       <Link href={`/user/${username}/comments`} className="bg-color-primary text-color-dark-200 font-bold px-3 py-4 text-xl rounded-md">
  //         Komentar Saya
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default DashboardPage;
