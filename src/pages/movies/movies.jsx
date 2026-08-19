import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";

import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data/movies";

import "./movies.css";

function Movies() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("search") || "");

  const [language, setLanguage] = useState("All");

  const [genre, setGenre] = useState("All");

  const [sort, setSort] = useState("default");


  // Search + Filter

  let filteredMovies = movies.filter((movie) => {

    const matchesSearch =
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesLanguage =
      language === "All" ||
      movie.language === language;


    const matchesGenre =
      genre === "All" ||
      movie.genre.toLowerCase().includes(
        genre.toLowerCase()
      );


    return (
      matchesSearch &&
      matchesLanguage &&
      matchesGenre
    );

  });


  // Sorting

  if (sort === "rating") {

    filteredMovies.sort(
      (a, b) =>
        Number(b.rating) -
        Number(a.rating)
    );

  }


  if (sort === "name") {

    filteredMovies.sort(
      (a, b) =>
        a.title.localeCompare(b.title)
    );

  }


  return (

    <div className="movies-page">

      {/* Header */}

      <section className="movies-header">

        <div>

          <span className="page-label">
            EXPLORE
          </span>

          <h1>Movies</h1>

          <p>
            Discover movies worth watching.
          </p>

        </div>

      </section>


      {/* Search */}

      <div className="movies-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* Filters */}

      <section className="filter-section">

        <div className="filter-title">

          <SlidersHorizontal size={18} />

          <span>Filters</span>

        </div>


        {/* Language */}

        <div className="filter-group">

          <label>Language</label>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
          >

            <option value="All">
              All Languages
            </option>

            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="Marathi">
              Marathi
            </option>

          </select>

        </div>


        {/* Genre */}

        <div className="filter-group">

          <label>Genre</label>

          <select
            value={genre}
            onChange={(e) =>
              setGenre(e.target.value)
            }
          >

            <option value="All">
              All Genres
            </option>

            <option value="Action">
              Action
            </option>

            <option value="Drama">
              Drama
            </option>

            <option value="Romance">
              Romance
            </option>

            <option value="Thriller">
              Thriller
            </option>

            <option value="Adventure">
              Adventure
            </option>

          </select>

        </div>


        {/* Sort */}

        <div className="filter-group">

          <label>Sort By</label>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >

            <option value="default">
              Recommended
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="name">
              A-Z
            </option>

          </select>

        </div>

      </section>


      {/* Results */}

      <section className="movies-results">

        <div className="results-header">

          <h2>
            {filteredMovies.length} Movies
          </h2>

        </div>


        {filteredMovies.length > 0 ? (

          <div className="movies-grid">

            {filteredMovies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div>🎬</div>

            <h3>
              No movies found
            </h3>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default Movies;
