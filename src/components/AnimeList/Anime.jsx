import Image from "next/image";
import Link from "next/link";

const Anime = ({ api }) => {
  return (
    <>
      {api.data?.map((anime, i) => {
        return (
          <div key={i} className="overflow-hidden">
            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-light-100 hover:text-color-primary transition-all">
              <Image src={anime.images.webp.image_url} alt={`Poster '${anime.title}'`} width={300} height={450} className="aspect-[2/3] object-cover rounded-md transition-all hover:scale-105" />

              <h3 className="font-bold md:text-xl text-md pt-2 line-clamp-2">{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Anime;
