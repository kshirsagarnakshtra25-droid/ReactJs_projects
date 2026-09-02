import { Search, MapPin, Menu, X, Navigation } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { movies } from "../../data/movies";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [locationOpen, setLocationOpen] = useState(false);

  const [location, setLocation] = useState(
    localStorage.getItem("cinebookLocation") || "Select Location"
  );

  const [searchLocation, setSearchLocation] = useState("");

  const locationRef = useRef(null);


  // ==========================================
  // SAVE LOCATION
  // ==========================================

  const selectLocation = (newLocation) => {

    if (!newLocation.trim()) {
      return;
    }

    setLocation(newLocation.trim());

    localStorage.setItem(
      "cinebookLocation",
      newLocation.trim()
    );

    setLocationOpen(false);

    setSearchLocation("");
  };


  // ==========================================
  // CURRENT LOCATION
  // ==========================================

  const useCurrentLocation = () => {

    if (!navigator.geolocation) {

      alert(
        "Geolocation is not supported by your browser."
      );

      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        const currentLocation =
          `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

        selectLocation(currentLocation);
      },

      () => {

        alert(
          "Unable to get your location. Please allow location permission."
        );

      }
    );
  };


  // ==========================================
  // CLOSE LOCATION WHEN CLICKING OUTSIDE
  // ==========================================

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        locationRef.current &&
        !locationRef.current.contains(event.target)
      ) {

        setLocationOpen(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


  // ==========================================
  // SEARCH MOVIES
  // ==========================================

  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );


  return (

    <header className="navbar">

      <div className="navbar-container">


        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="logo"
        >
          Cine<span>Book</span>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="nav-links">

          <Link to="/movies">
            Movies
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/plays">
            Plays
          </Link>

          <Link to="/sports">
            Sports
          </Link>

          <Link to="/activities">
            Activities
          </Link>

        </nav>


        {/* ================= RIGHT SIDE ================= */}

        <div className="nav-actions">


          {/* ================= LOCATION ================= */}

          <div
            className="location-wrapper"
            ref={locationRef}
          >

            <button
              className="location-btn"
              onClick={() =>
                setLocationOpen(!locationOpen)
              }
            >

              <MapPin size={18} />

              <span>
                {location}
              </span>

            </button>


            {/* LOCATION POPUP */}

            {locationOpen && (

              <div className="location-popup">


                <div className="location-popup-header">

                  <h3>
                    Choose Location
                  </h3>

                  <button
                    className="location-close"
                    onClick={() =>
                      setLocationOpen(false)
                    }
                  >

                    <X size={18} />

                  </button>

                </div>


                {/* LOCATION SEARCH */}

                <div className="location-search">

                  <Search size={18} />

                  <input
                    type="text"
                    placeholder="Search city or location"
                    value={searchLocation}
                    onChange={(event) =>
                      setSearchLocation(
                        event.target.value
                      )
                    }
                    onKeyDown={(event) => {

                      if (event.key === "Enter") {

                        selectLocation(
                          searchLocation
                        );

                      }

                    }}
                  />

                </div>


                {/* CURRENT LOCATION */}

                <button
                  className="current-location-btn"
                  onClick={useCurrentLocation}
                >

                  <Navigation size={18} />

                  <div>

                    <strong>
                      Use my current location
                    </strong>

                    <small>
                      Allow browser location access
                    </small>

                  </div>

                </button>


                {/* MANUAL LOCATION RESULT */}

                {searchLocation.trim() && (

                  <button
                    className="location-result"
                    onClick={() =>
                      selectLocation(
                        searchLocation
                      )
                    }
                  >

                    <MapPin size={18} />

                    <div>

                      <strong>
                        {searchLocation}
                      </strong>

                      <small>
                        Use this location
                      </small>

                    </div>

                  </button>

                )}

              </div>

            )}

          </div>


          {/* ================= SEARCH BUTTON ================= */}

          <button
            className="search-btn"
            onClick={() =>
              setSearchOpen(!searchOpen)
            }
            aria-label="Search"
          >

            <Search size={19} />

          </button>


          {/* ================= SIGN IN ================= */}

          <button className="signin-btn">
            Sign In
          </button>


          {/* ================= MOBILE MENU ================= */}

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen
              ? <X size={25} />
              : <Menu size={25} />
            }

          </button>

        </div>

      </div>


      {/* ==========================================
          NAVBAR SEARCH DROPDOWN
      ========================================== */}

      {searchOpen && (

        <div className="navbar-search-dropdown">

          <div className="navbar-search-input">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search movies..."
              value={searchText}
              onChange={(e) =>
                setSearchText(e.target.value)
              }
              autoFocus
              onKeyDown={(e) => {

                if (
                  e.key === "Enter" &&
                  searchText.trim()
                ) {

                  navigate(
                    `/movies?search=${encodeURIComponent(
                      searchText.trim()
                    )}`
                  );

                  setSearchOpen(false);
                }

              }}
            />


            {searchText && (

              <button
                className="search-clear-btn"
                onClick={() =>
                  setSearchText("")
                }
              >

                <X size={18} />

              </button>

            )}

          </div>


          {/* SEARCH RESULTS */}

          {searchText.trim() && (

            <div className="navbar-search-results">

              {filteredMovies.map((movie) => (

                <div
                  key={movie.id}
                  className="navbar-search-result"
                  onClick={() => {

                    navigate(
                      `/movies/${movie.id}`
                    );

                    setSearchOpen(false);
                    setSearchText("");

                  }}
                >

                  <img
                    src={movie.image}
                    alt={movie.title}
                  />

                  <div>

                    <h4>
                      {movie.title}
                    </h4>

                    <p>
                      {movie.language} • {movie.genre}
                    </p>

                  </div>

                </div>

              ))}


              {filteredMovies.length === 0 && (

                <div className="no-search-result">

                  No movies found

                </div>

              )}

            </div>

          )}

        </div>

      )}


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link
            to="/movies"
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </Link>

          <Link
            to="/events"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>

          <Link
            to="/plays"
            onClick={() => setMenuOpen(false)}
          >
            Plays
          </Link>

          <Link
            to="/sports"
            onClick={() => setMenuOpen(false)}
          >
            Sports
          </Link>

          <Link
            to="/activities"
            onClick={() => setMenuOpen(false)}
          >
            Activities
          </Link>

          <Link
            to="/offers"
            onClick={() => setMenuOpen(false)}
          >
            Offers
          </Link>

          <Link
            to="/bookings"
            onClick={() => setMenuOpen(false)}
          >
            My Bookings
          </Link>

          <button>
            Sign In
          </button>

        </div>

      )}

    </header>

  );

}

export default Navbar;