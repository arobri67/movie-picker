import axios from "axios";
import { useState, useEffect } from "react";
import mockData from "./mockDATA";
import mockPosterData from "./mockPosterData";

const Cards = ({ className, toggle, page }) => {
  const [data, setData] = useState(null);
  const [dataPoster, setDataPoster] = useState(null);

  // const fetchData = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBkNzY4YmRmNDc3MTYwYTlmNzBiYmIxNjdiYTAzMCIsInN1YiI6IjY1OGFhNTY3NWFiYTMyNjYwY2JhZmQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Y6BAbE2ojdNwO6EbsbeUXeyW6BQ5fyJfZ4LorNWG6M",
  //     },
  //   };

  //   try {
  //     const { data } = await axios(
  //       `https:api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  //       options
  //     );
  //     setData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData(page);
  // }, [page]);

  // const fetchPosterData = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBkNzY4YmRmNDc3MTYwYTlmNzBiYmIxNjdiYTAzMCIsInN1YiI6IjY1OGFhNTY3NWFiYTMyNjYwY2JhZmQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Y6BAbE2ojdNwO6EbsbeUXeyW6BQ5fyJfZ4LorNWG6M",
  //     },
  //   };
  //   try {
  //     const { data } = await axios(
  //       `https:api.themoviedb.org/3/configuration`,
  //       options
  //     );
  //     setDataPoster(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  //  useEffect(() => {
  //    fetchPosterData();
  //  }, []);

  //MOCK HERE
  useEffect(() => {
    setDataPoster(mockPosterData);
    setData(mockData);
  }, []);
  return (
    <section className={className}>
      <h2>Trending Movies</h2>
      {data !== null ? (
        <ul>
          {data.results.map((item) => (
            <li key={item.id}>
              <div>
                <div>
                  <img
                    src={`${
                      dataPoster.images.secure_base_url +
                      dataPoster.images.poster_sizes[3] +
                      item.poster_path
                    }`}
                    alt={item.title}
                  />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <h3>Overview</h3>
                  <p>{item.overview}</p>
                  <div>
                    <p>
                      TMDB User score: <span>{item.vote_average}</span>
                    </p>
                    <a
                      target="_blank"
                      rel="noopener"
                      href={`https://www.themoviedb.org/movie/${item.id}`}
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default Cards;
