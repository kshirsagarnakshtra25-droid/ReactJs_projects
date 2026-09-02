import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/images/global-media-star-logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  /* ==============================
     SCROLL EFFECT
  ============================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* ==============================
     CLOSE MENU
  ============================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setStoriesOpen(false);
  };


  /* ==============================
     OPEN SEARCH
  ============================== */

  const openSearch = () => {
    setSearchOpen(true);
    setMenuOpen(false);
    setStoriesOpen(false);
  };


  /* ==============================
     CLOSE SEARCH
  ============================== */

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };


  /* ==============================
     SEARCH DATA
  ============================== */

  const searchItems = [
    {
      title: "Magazine",
      category: "MAGAZINE",
      path: "/magazine",
    },
    {
      title: "Business",
      category: "BUSINESS",
      path: "/business",
    },
    {
      title: "Technology",
      category: "TECHNOLOGY",
      path: "/technology",
    },
    {
      title: "Leadership",
      category: "LEADERSHIP",
      path: "/leaders",
    },
    {
      title: "Interviews",
      category: "INTERVIEWS",
      path: "/interviews",
    },
    {
      title: "Startup",
      category: "STARTUP",
      path: "/startup",
    },
    {
      title: "Finance",
      category: "FINANCE",
      path: "/finance",
    },
    {
      title: "News",
      category: "NEWS",
      path: "/news",
    },
    {
      title: "Articles",
      category: "ARTICLES",
      path: "/articles",
    },
    {
      title: "About Us",
      category: "ABOUT",
      path: "/about",
    },
    {
      title: "Contact Us",
      category: "CONTACT",
      path: "/contact",
    },
  ];


  /* ==============================
     FILTER RESULTS
  ============================== */

  const filteredResults = searchItems.filter((item) =>
    `${item.title} ${item.category}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );


  /* ==============================
     SEARCH SUBMIT
  ============================== */

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      return;
    }

    const result = searchItems.find((item) =>
      `${item.title} ${item.category}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    if (result) {
      navigate(result.path);
      closeSearch();
    } else {
      alert(`No results found for "${searchQuery}"`);
    }
  };


  /* ==============================
     MAIN NAVIGATION
  ============================== */

  const mainLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Magazine",
      path: "/magazine",
    },
    {
      name: "Leadership",
      path: "/leaders",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];


  /* ==============================
     STORY LINKS
  ============================== */

  const storyLinks = [
    {
      name: "Articles",
      path: "/articles",
    },
    {
      name: "Business",
      path: "/business",
    },
    {
      name: "Technology",
      path: "/technology",
    },
    {
      name: "Interviews",
      path: "/interviews",
    },
    {
      name: "Startup",
      path: "/startup",
    },
    {
      name: "Finance",
      path: "/finance",
    },
    {
      name: "News",
      path: "/news",
    },
  ];


  const isStoryActive = storyLinks.some(
    (link) => location.pathname === link.path
  );


  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <header
        className={`header ${
          scrolled ? "header-scrolled" : ""
        }`}
      >

        <div className="container navbar">


          {/* LOGO */}

          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
          >

            <img
              src={logo}
              alt="Global Media Star"
            />

          </Link>


          {/* DESKTOP NAV */}

          <nav className="nav">

            {mainLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={
                  location.pathname === link.path
                    ? "active"
                    : ""
                }
              >
                {link.name}
              </Link>

            ))}


            {/* STORIES */}

            <div
              className={`nav-dropdown ${
                storiesOpen ? "dropdown-open" : ""
              }`}
              onMouseEnter={() => setStoriesOpen(true)}
              onMouseLeave={() => setStoriesOpen(false)}
            >

              <button
                className={`stories-button ${
                  isStoryActive ? "active" : ""
                }`}
                onClick={() =>
                  setStoriesOpen(!storiesOpen)
                }
                type="button"
              >

                Stories

                <span
                  className={`dropdown-arrow ${
                    storiesOpen ? "rotate" : ""
                  }`}
                >
                  ↓
                </span>

              </button>


              <div className="dropdown-menu">

                <div className="dropdown-heading">
                  EXPLORE STORIES
                </div>

                {storyLinks.map((link, index) => (

                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    {link.name}

                    <b>↗</b>

                  </Link>

                ))}

              </div>

            </div>

          </nav>


          {/* RIGHT ACTIONS */}

          <div className="navbar-actions">


            {/* SEARCH BUTTON */}

            <button
              className="search-btn"
              aria-label="Open Search"
              type="button"
              onClick={openSearch}
            >

              <i className="fa-solid fa-magnifying-glass"></i>

            </button>


            {/* SUBSCRIBE */}

            <Link
              to="/subscribe"
              className="subscribe-btn"
              onClick={closeMenu}
            >
              Subscribe
            </Link>


            {/* MOBILE MENU */}

            <button
              className="menu-btn"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setStoriesOpen(false);
              }}
              type="button"
            >

              <i
                className={
                  menuOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars"
                }
              ></i>

            </button>

          </div>

        </div>


        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <div
          className={`mobile-menu ${
            menuOpen ? "open" : ""
          }`}
        >

          <nav>

            {mainLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
              >

                <span>
                  {link.name}
                </span>

                <b>↗</b>

              </Link>

            ))}


            <div className="mobile-stories">

              <button
                className="mobile-stories-title"
                onClick={() =>
                  setStoriesOpen(!storiesOpen)
                }
                type="button"
              >

                <span>
                  Stories
                </span>

                <b>
                  {storiesOpen ? "−" : "+"}
                </b>

              </button>


              {storiesOpen && (

                <div className="mobile-story-links">

                  {storyLinks.map((link, index) => (

                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                    >

                      <span>
                        0{index + 1}
                      </span>

                      {link.name}

                    </Link>

                  ))}

                </div>

              )}

            </div>


            <Link
              to="/subscribe"
              className="mobile-subscribe"
              onClick={closeMenu}
            >
              Subscribe
              <span>↗</span>
            </Link>

          </nav>

        </div>

      </header>


      {/* =========================================
          SEARCH OVERLAY
      ========================================= */}

      {searchOpen && (

        <div className="search-overlay">

          <div className="search-container">


            {/* CLOSE */}

            <button
              className="search-close"
              onClick={closeSearch}
              type="button"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>


            {/* SEARCH LABEL */}

            <span className="search-label">
              GLOBAL MEDIA STAR
            </span>


            <h2>
              What are you
              <span>looking for?</span>
            </h2>


            {/* SEARCH FORM */}

            <form
              className="search-form"
              onSubmit={handleSearch}
            >

              <input
                type="text"
                placeholder="Search stories, business, technology..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                autoFocus
              />

              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

            </form>


            {/* SEARCH RESULTS */}

            <div className="search-results">

              {searchQuery && (

                <>

                  <div className="search-results-heading">
                    SEARCH RESULTS
                  </div>


                  {filteredResults.length > 0 ? (

                    filteredResults.map((item) => (

                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeSearch}
                        className="search-result"
                      >

                        <div>

                          <small>
                            {item.category}
                          </small>

                          <strong>
                            {item.title}
                          </strong>

                        </div>

                        <span>
                          ↗
                        </span>

                      </Link>

                    ))

                  ) : (

                    <div className="no-results">
                      No stories found.
                    </div>

                  )}

                </>

              )}

            </div>


            {/* POPULAR SEARCHES */}

            {!searchQuery && (

              <div className="popular-searches">

                <span>
                  POPULAR
                </span>

                <div>

                  <button
                    onClick={() =>
                      setSearchQuery("Business")
                    }
                  >
                    Business
                  </button>

                  <button
                    onClick={() =>
                      setSearchQuery("Technology")
                    }
                  >
                    Technology
                  </button>

                  <button
                    onClick={() =>
                      setSearchQuery("Startup")
                    }
                  >
                    Startup
                  </button>

                  <button
                    onClick={() =>
                      setSearchQuery("News")
                    }
                  >
                    News
                  </button>

                </div>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}

export default Navbar;