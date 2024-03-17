import AnimeList from "@/components/AnimeList";
import Anime from "@/components/AnimeList/Anime";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getRecommendedAnimeResponse, shuffleData } from "@/libs/api-libs";

const Home = async () => {
  const popularAnime = await getAnimeResponse("top/anime", "filter=bypopularity&limit=10");
  const topAiringAnime = await getAnimeResponse("top/anime", "filter=airing&limit=10");
  let recommendedAnime = await getRecommendedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = shuffleData(recommendedAnime, 10);

  return (
    <div className="p-4 2xl:px-0">
      <section className="pt-2">
        <Header title="Rekomendasi Anime" />
        <AnimeList>
          <Anime api={recommendedAnime} />
        </AnimeList>
      </section>

      <section className="pt-2">
        <Header title="Tayang Teratas" linkHref="/top" linkTitle="Lihat Semua" />
        <AnimeList>
          <Anime api={topAiringAnime} />
        </AnimeList>
      </section>

      <section className="pt-2">
        <Header title="Paling Populer" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList>
          <Anime api={popularAnime} />
        </AnimeList>
      </section>
    </div>
  );
};

export default Home;
