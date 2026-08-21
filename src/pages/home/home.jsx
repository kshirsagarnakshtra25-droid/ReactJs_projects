import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin, Search, Sparkles } from "lucide-react";
import { movies } from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./home.css";

const collections = [
  { title: "Now Showing", description: "Movies playing in cinemas near you.", filter: (movie) => movie.status === "released" },
  { title: "Upcoming Movies", description: "Add these big-screen releases to your watchlist.", filter: (movie) => movie.status === "upcoming" },
  { title: "Latest Movies", description: "Fresh picks selected for your next movie plan.", filter: () => true },
  { title: "Hollywood Movies", description: "Big stories from around the world.", filter: (movie) => movie.industry === "Hollywood" },
  { title: "Bollywood Movies", description: "Hindi cinema, made for the big screen.", filter: (movie) => movie.industry === "Bollywood" },
  { title: "Tollywood Movies", description: "Telugu cinema with spectacular entertainment.", filter: (movie) => movie.industry === "Tollywood" },
  { title: "Marathi Movies", description: "Stories from Maharashtra, close to home.", filter: (movie) => movie.industry === "Marathi" },
];

function MovieRail({ collection }) {
  const list = movies.filter(collection.filter).slice(0, 6);
  if (!list.length) return null;
  return <section className="home-rail"><div className="rail-heading"><div><p className="eyebrow">CINEBOOK PICKS</p><h2>{collection.title}</h2><p>{collection.description}</p></div><Link to="/movies" className="rail-link">Explore all <ArrowRight size={16} /></Link></div><div className="movie-rail">{list.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div></section>;
}

function Home() {
  const navigate = useNavigate();
  const [homeSearch, setHomeSearch] = useState("");
  const [currentMovie, setCurrentMovie] = useState(0);
  const [city, setCity] = useState(() => localStorage.getItem("cinebookLocation") || "Pune");
  const heroMovies = useMemo(() => movies.filter((movie) => movie.status === "released").slice(0, 5), []);
  const heroMovie = heroMovies[currentMovie] || movies[0];
  useEffect(() => { const timer = setInterval(() => setCurrentMovie((index) => (index + 1) % heroMovies.length), 6000); return () => clearInterval(timer); }, [heroMovies.length]);
  useEffect(() => { const updateLocation = () => setCity(localStorage.getItem("cinebookLocation") || "Pune"); window.addEventListener("cinebook-location-change", updateLocation); window.addEventListener("storage", updateLocation); return () => { window.removeEventListener("cinebook-location-change", updateLocation); window.removeEventListener("storage", updateLocation); }; }, []);
  const search = () => { if (homeSearch.trim()) navigate(`/movies?search=${encodeURIComponent(homeSearch.trim())}`); };
  return <main className="home"><section className="hero-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(13,14,18,.98) 0%, rgba(13,14,18,.82) 45%, rgba(13,14,18,.24) 100%), url("${heroMovie.banner}")` }}><div className="hero-content"><span className="hero-tag"><Sparkles size={14} /> NOW SHOWING</span><h1>{heroMovie.title}</h1><div className="hero-details"><span>★ {heroMovie.rating}/10</span><span>{heroMovie.certificate}</span><span>{heroMovie.duration}</span><span>{heroMovie.language}</span></div><p>{heroMovie.description}</p><div className="hero-buttons"><Link to={`/booking/${heroMovie.id}`} className="primary-btn">Book tickets</Link><Link to={`/movies/${heroMovie.id}`} className="secondary-btn">View details</Link></div></div><div className="hero-controls"><button className="hero-arrow" onClick={() => setCurrentMovie((index) => (index - 1 + heroMovies.length) % heroMovies.length)} aria-label="Previous movie"><ChevronLeft /></button><div className="hero-dots">{heroMovies.map((movie, index) => <button key={movie.id} aria-label={`Show ${movie.title}`} className={index === currentMovie ? "hero-dot active" : "hero-dot"} onClick={() => setCurrentMovie(index)} />)}</div><button className="hero-arrow" onClick={() => setCurrentMovie((index) => (index + 1) % heroMovies.length)} aria-label="Next movie"><ChevronRight /></button></div></section><section className="home-search-section"><div className="home-search"><Search size={20} /><input value={homeSearch} onChange={(event) => setHomeSearch(event.target.value)} onKeyDown={(event) => event.key === "Enter" && search()} placeholder="Search movies, genres and languages" /><button onClick={search}>Search</button></div></section>{collections.map((collection) => <MovieRail key={collection.title} collection={collection} />)}<section className="event-promo"><div className="event-promo-copy"><p className="eyebrow">LIVE EXPERIENCES</p><h2>Events made for your calendar.</h2><p>Discover concerts, comedy shows and unforgettable live experiences around {city}.</p><Link to="/events" className="primary-btn">Explore events <ArrowRight size={17} /></Link></div><div className="event-promo-card"><CalendarDays size={28} /><span>This weekend in</span><strong><MapPin size={18} /> {city}</strong><small>Music · Comedy · Theatre · Sports</small></div></section><section className="explore-section"><div className="rail-heading"><div><p className="eyebrow">MORE TO EXPLORE</p><h2>Make a plan, not just a booking.</h2></div></div><div className="explore-grid">{[["Events", "Concerts, festivals & live shows", "/events"], ["Plays", "Drama, theatre & performances", "/plays"], ["Sports", "Matches & sporting events", "/sports"], ["Activities", "Bowling, gaming & experiences", "/activities"]].map(([title, description, path]) => <Link key={title} to={path} className="explore-card"><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={20} /></Link>)}</div></section></main>;
}
export default Home;
