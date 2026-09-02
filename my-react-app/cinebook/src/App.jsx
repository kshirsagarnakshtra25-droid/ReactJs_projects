import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Booking from "./pages/Booking/Booking";
import BookingSummary from "./pages/BookingSummary/BookingSummary";
import Events from "./pages/Events/Events.jsx";
import Plays from "./pages/Plays/Plays.jsx";
import Sports from "./pages/Sports/Sports.jsx";
import Activities from "./pages/Activities/Activities.jsx";
import ExperienceDetails
  from "./pages/ExperienceDetails/ExperienceDetails";
  import SignIn from "./components/SignIn/SignIn";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/booking/:id"
          element={<Booking />}
        />
        <Route
          path="/booking-summary/:id"
          element={<BookingSummary />}
        />
        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/plays"
          element={<Plays />}
        />

        <Route
          path="/sports"
          element={<Sports />}
        />

        <Route
          path="/activities"
          element={<Activities />}
        />
        <Route
  path="/experience/:id"
  element={<ExperienceDetails />}
/>
<Route
  path="/signin"
  element={<SignIn />}
/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;