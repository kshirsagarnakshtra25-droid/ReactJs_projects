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
  import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
  path="/"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>

        <Route
  path="/movies"
  element={
    <ProtectedRoute>
      <Movies />
    </ProtectedRoute>
  }
/>
       <Route
  path="/movies/:id"
  element={
    <ProtectedRoute>
      <MovieDetails />
    </ProtectedRoute>
  }
/>
        <Route
  path="/booking/:id"
  element={
    <ProtectedRoute>
      <Booking />
    </ProtectedRoute>
  }
/>

<Route
  path="/booking-summary/:id"
  element={
    <ProtectedRoute>
      <BookingSummary />
    </ProtectedRoute>
  }
/>
        <Route
  path="/events"
  element={
    <ProtectedRoute>
      <Events />
    </ProtectedRoute>
  }
/>

       <Route
  path="/plays"
  element={
    <ProtectedRoute>
      <Plays />
    </ProtectedRoute>
  }
/>

        <Route
  path="/sports"
  element={
    <ProtectedRoute>
      <Sports />
    </ProtectedRoute>
  }
/>

       <Route
  path="/activities"
  element={
    <ProtectedRoute>
      <Activities />
    </ProtectedRoute>
  }
/>
        <Route
  path="/experience/:id"
  element={
    <ProtectedRoute>
      <ExperienceDetails />
    </ProtectedRoute>
  }
/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;