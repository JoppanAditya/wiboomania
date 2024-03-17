import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import AnimeDetails from "@/components/AnimeList/AnimeDetails";
import AnimeLinks from "@/components/AnimeList/AnimeLinks";
import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
import AnimeStatic from "@/components/AnimeList/AnimeStatic";
import InfoHeader from "@/components/AnimeList/InfoHeader";
import Link from "next/link";

const AnimePage = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}/full`);
  const user = await authUserSession();
  const collection = await prisma.collections.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <div className="text-color-light-100">
      <div className="w-full p-4 2xl:px-0 flex justify-between items-center gap-24">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {anime.data.title}
            {anime.data.year ? <span className="text-color-light-200 font-normal pl-2">({anime.data.year})</span> : null}
          </h1>
          <h3 className="text-xl text-color-light-200 font-bold">{anime.data.title_english}</h3>
        </div>

        <div className="lg:inline-flex gap-8 hidden">
          <AnimeStatic anime={anime} />
        </div>
      </div>

      <div className="pb-2 mx-4 2xl:mx-0 hidden lg:block">
        <InfoHeader anime={anime} />
      </div>

      <div className="pt-2 xl:pt-0 mx-4 2xl:mx-0 block md:flex lg:gap-8 border-t border-color-dark-200">
        <div className="lg:hidden">
          <AnimeLinks anime={anime} user={user} id={id} collection={collection} />
        </div>

        <AnimeDetails anime={anime}>
          <div className="mb-16 py-4 border-t border-color-dark-200">
            <h2 className="text-lg font-bold mb-4">Komentar</h2>
            <CommentBox anime_mal_id={id} />
            {user ? (
              <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} user_image={user?.image} anime_title={anime.data.title} />
            ) : (
              <Link href="/api/auth/signin" className="w-full md:w-52 rounded-md py-2 px-3 bg-color-primary  hover:bg-opacity-10 hover:text-color-primary border-2 border-color-primary transition-all">
                Masuk untuk Berkomentar
              </Link>
            )}
          </div>
        </AnimeDetails>

        <div className="hidden lg:block w-1/3">
          <AnimeLinks anime={anime} user={user} id={id} collection={collection} />
        </div>
      </div>

      {anime.data.trailer.youtube_id ? (
        <div className="block lg:hidden">
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} title={anime.data.title} />
        </div>
      ) : null}
    </div>
  );
};

export default AnimePage;
