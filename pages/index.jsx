import Head from "next/head";
import TopRatedMovies from "../components/TopRatedMovies";
import axios from "axios";
import server from "../config/index";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <>
      <Head>
        <title>Chili Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {movies && movies.results ? (
        <TopRatedMovies movies={movies.results} />
      ) : (
        <p>Error loading movies. Please try again later.</p>
      )}
    </>
  );
}





export async function getStaticProps() {
  try {
    const res = await axios(`${server}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);

    const movies = res.data;

    console.log("Movies API response:", movies); 

    return {
      props: { movies },
    };
  } catch (error) {
    console.error("Error fetching movies:", error); 
    return {
      props: { movies: null },
    };
  }
}
