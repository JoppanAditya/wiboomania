import Anime from "@/components/AnimeList/Anime";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/libs/api-libs";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchResults = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <section className="p-4">
      {searchResults.data.length > 0 ? <Header title={`Hasil Pencarian Untuk ${decodedKeyword}...`} /> : <Header title={`Tidak dapat menemukan ${decodedKeyword}...`} />}

      <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <Anime api={searchResults} />
      </div>
    </section>
  );
};

export default SearchPage;
