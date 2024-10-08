import axios from "axios";
import { useState, useEffect } from "react";

const Cards = ({ className, toggle, page }) => {
  const [data, setData] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const fetchData = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${encodeURIComponent(
          page
        )}&sort_by=popularity.desc`,
        options
      );
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (toggle) {
      fetchData(page);
    }
  }, [page]);

  return (
    <section className={className}>
      {data !== null ? (
        <>
          <h2>Trending Movies</h2>
          <ul>
            {data.results.map((item) => (
              <li key={item.id}>
                <div>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
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
        </>
      ) : null}
    </section>
  );
};

export default Cards;
