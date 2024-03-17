import CollectionList from "@/components/Profile/CollectionList";
import Header from "@/components/Profile/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const CollectionsPage = async () => {
  const user = await authUserSession();
  const collection = await prisma.collections.findMany({ where: { user_email: user.email } });

  return (
    <section className="mt-4 px-4">
      <Header title={"Koleksi Anime Saya"} />
      {collection.length == 0 ? (
        <div className="px-4 text-center md:text-3xl text-xl text-color-light-100 flex flex-col justify-center h-full w-full font-bold absolute top-0 left-0 -z-10">Anda Belum Pernah Menambahkan Koleksi</div>
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {collection.map((collect) => {
            return <CollectionList collect={collect} />;
          })}
        </div>
      )}
    </section>
  );
};

export default CollectionsPage;
