import { CalendarDays, MapPin, Ticket, Clock, Film, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => { setBookings(JSON.parse(localStorage.getItem("cinebookBookings") || "[]")); }, []);
  return <main className="my-bookings"><header className="bookings-header"><p className="page-label">YOUR CINEBOOK</p><h1>My Bookings</h1><p>All your confirmed movie plans in one place.</p></header>{bookings.length ? <section className="booking-history">{bookings.map((booking) => <article key={booking.bookingId} className="history-card"><img src={booking.moviePoster || booking.movie?.image} alt="" /><div className="history-info"><span className="status-pill">CONFIRMED</span><h2>{booking.movieName || booking.movie?.title}</h2><p><MapPin size={15} /> {booking.theatreName || booking.cinema?.name || "CineBook Cinema"}</p><div className="history-meta"><span><CalendarDays size={15} /> {booking.date instanceof Date ? booking.date.toLocaleDateString("en-IN") : new Date(booking.date).toLocaleDateString("en-IN")}</span><span><Clock size={15} /> {booking.showTime || booking.time}</span><span><Ticket size={15} /> {(booking.seats || booking.selectedSeats || []).join(", ")}</span></div></div><div className="history-total"><small>Paid</small><strong>₹{booking.total || booking.totalAmount}</strong><span>{booking.bookingId}</span></div></article>)}</section> : <section className="empty-bookings"><Film size={42} /><h2>No bookings yet</h2><p>Your confirmed tickets will appear here after payment.</p><Link to="/movies">Explore movies <ArrowRight size={17} /></Link></section>}</main>;
}
export default MyBookings;
