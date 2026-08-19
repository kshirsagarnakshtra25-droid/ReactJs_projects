import { MapPin, Menu, Navigation, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { movies } from "../../data/movies";
import { useAuth } from "../../context/useAuth";
import "./navbar.css";

const navigationLinks = [["Movies", "/movies"], ["Events", "/events"], ["Plays", "/plays"], ["Sports", "/sports"], ["Activities", "/activities"]];

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const locationRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [location, setLocation] = useState(() => localStorage.getItem("cinebookLocation") || "Select Location");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    const closeLocation = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) setLocationOpen(false);
    };
    document.addEventListener("mousedown", closeLocation);
    return () => document.removeEventListener("mousedown", closeLocation);
  }, []);

  const selectLocation = (value) => {
    const selectedLocation = value.trim();
    if (!selectedLocation) return;
    localStorage.setItem("cinebookLocation", selectedLocation);
    setLocation(selectedLocation);
    setSearchLocation("");
    setLocationOpen(false);
  };
  const useCurrentLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation is not supported by your browser.");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => selectLocation(`${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`),
      () => alert("Unable to get your location. Please allow location permission.")
    );
  };
  const filteredMovies = searchText.trim() ? movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())) : [];
  const goToMovie = (id) => {
    navigate(`/movies/${id}`);
    setSearchOpen(false);
    setSearchText("");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Cine<span>Book</span></Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navigationLinks.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <div className="location-wrapper" ref={locationRef}>
            <button className="location-btn" onClick={() => setLocationOpen((open) => !open)} aria-expanded={locationOpen}><MapPin size={18} /><span>{location}</span></button>
            {locationOpen && <div className="location-popup">
              <div className="location-popup-header"><h3>Choose Location</h3><button className="location-close" onClick={() => setLocationOpen(false)} aria-label="Close location picker"><X size={18} /></button></div>
              <div className="location-search"><Search size={18} /><input autoFocus placeholder="Search city or location" value={searchLocation} onChange={(event) => setSearchLocation(event.target.value)} onKeyDown={(event) => event.key === "Enter" && selectLocation(searchLocation)} /></div>
              <button className="current-location-btn" onClick={useCurrentLocation}><Navigation size={18} /><div><strong>Use my current location</strong><small>Allow browser location access</small></div></button>
              {searchLocation.trim() && <button className="location-result" onClick={() => selectLocation(searchLocation)}><MapPin size={18} /><div><strong>{searchLocation}</strong><small>Use this location</small></div></button>}
            </div>}
          </div>
          <button className="search-btn" onClick={() => setSearchOpen((open) => !open)} aria-label="Search movies" aria-expanded={searchOpen}><Search size={19} /></button>
          <span className="user-name">{user?.name}</span><button className="signin-btn" onClick={() => { logout(); navigate("/login"); }}>Logout</button>
          <button className="menu-btn" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {searchOpen && <div className="navbar-search-dropdown">
        <div className="navbar-search-input"><Search size={19} /><input autoFocus placeholder="Search movies..." value={searchText} onChange={(event) => setSearchText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && searchText.trim()) { navigate(`/movies?search=${encodeURIComponent(searchText.trim())}`); setSearchOpen(false); } }} />{searchText && <button className="search-clear-btn" onClick={() => setSearchText("")} aria-label="Clear search"><X size={18} /></button>}</div>
        {searchText.trim() && <div className="navbar-search-results">{filteredMovies.map((movie) => <button key={movie.id} className="navbar-search-result" onClick={() => goToMovie(movie.id)}><img src={movie.image} alt="" /><span><strong>{movie.title}</strong><small>{movie.language} • {movie.genre}</small></span></button>)}{!filteredMovies.length && <p className="no-search-result">No movies found</p>}</div>}
      </div>}
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navigationLinks.map(([label, path]) => <Link key={path} to={path} onClick={() => setMenuOpen(false)}>{label}</Link>)}<button onClick={() => { logout(); navigate("/login"); }}>Logout</button></nav>}
    </header>
  );
}

export default Navbar;
