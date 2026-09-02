import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Movies from "./pages/movies/movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Booking from "./pages/Booking/Booking";
import BookingSummary from "./pages/BookingSummary/BookingSummary";
import Events from "./pages/Events/Events";
import Plays from "./pages/Plays/Plays";
import Sports from "./pages/Sports/Sports";
import Activities from "./pages/Activities/Activities";
import ExperienceDetails from "./pages/ExperienceDetails/ExperienceDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Auth/Login";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import Register from "./pages/Auth/Register";
import MyBookings from "./pages/MyBookings/MyBookings";
import Wishlist from "./pages/Wishlist/Wishlist";


function AppLayout() {
  return <><Navbar /><Outlet /></>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/booking-summary/:id" element={<BookingSummary />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/events" element={<Events />} />
          <Route path="/plays" element={<Plays />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
          <Route path="/payment-details"element={<PaymentDetails />}/>
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
