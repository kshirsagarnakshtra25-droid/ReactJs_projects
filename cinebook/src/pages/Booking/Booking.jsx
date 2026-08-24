import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Clock,
  ArrowLeft
} from "lucide-react";

import { movies } from "../../data/movies";
import { cinemas } from "../../data/cinemas";

import "./Booking.css";
import BackButton from "../../components/BackButton/BackButton";

function Booking() {

  const { id } = useParams();

  const navigate = useNavigate();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );


  const [selectedDate, setSelectedDate] = useState(0);

  const [selectedCinema, setSelectedCinema] =
    useState(null);

  const [selectedTime, setSelectedTime] =
    useState(null);

  const [selectedSeats, setSelectedSeats] =
    useState([]);

  const [selectedLocation, setSelectedLocation] = useState(
    () => localStorage.getItem("cinebookLocation") || "Pune"
  );

  useEffect(() => {
    const updateLocation = () => {
      setSelectedLocation(localStorage.getItem("cinebookLocation") || "Pune");
      setSelectedCinema(null);
      setSelectedTime(null);
      setSelectedSeats([]);
    };
    window.addEventListener("cinebook-location-change", updateLocation);
    return () => window.removeEventListener("cinebook-location-change", updateLocation);
  }, []);

  const locationCinemas = cinemas.filter((cinema) => cinema.city === selectedLocation);


  if (!movie) {

    return (
      <div className="booking-not-found">

        <h2>Movie not found</h2>

        <Link to="/movies">
          Back to Movies
        </Link>

      </div>
    );
  }


  // Generate next 5 dates

  const dates = Array.from(
    { length: 5 },
    (_, index) => {

      const date = new Date();

      date.setDate(
        date.getDate() + index
      );

      return date;
    }
  );


  // Seat rows

  const rows = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
  ];


  const seatsPerRow = 10;


  // Some seats are already booked

  const occupiedSeats = [
    "A3",
    "A4",
    "B6",
    "B7",
    "C2",
    "C3",
    "D8",
    "E5",
    "F1",
    "F2"
  ];


  // Seat selection

  function toggleSeat(seat) {

    if (occupiedSeats.includes(seat)) {
      return;
    }


    if (selectedSeats.includes(seat)) {

      setSelectedSeats(
        selectedSeats.filter(
          (item) => item !== seat
        )
      );

    } else {

      setSelectedSeats([
        ...selectedSeats,
        seat
      ]);

    }
  }


  const ticketPrice = 180;

  const convenienceFee =
    selectedSeats.length * 18;

  const subtotal =
    selectedSeats.length * ticketPrice;

  const total =
    subtotal + convenienceFee;


  function continueBooking() {

    if (!selectedCinema) {

      alert("Please select a cinema.");

      return;
    }

    if (!selectedTime) {

      alert("Please select a show time.");

      return;
    }

    if (selectedSeats.length === 0) {

      alert("Please select at least one seat.");

      return;
    }


    navigate(
  "/payment-details",
  {
    state: {
      movie,
      date: dates[selectedDate],
      cinema: selectedCinema,
      time: selectedTime,
      seats: selectedSeats,
      subtotal,
      convenienceFee,
      total,
      ticketPrice
    }
  }
);
  }


  return (

    <div className="booking-page">


      {/* Header */}

      <div className="booking-header">

        <Link
          to={`/movies/${movie.id}`}
          className="back-button"
        >
          <ArrowLeft size={18} />

          Back
        </Link>


        <div>

          <h1>
            {movie.title}
          </h1>

          <p>
            Select your show
          </p>

        </div>

      </div>

      <div className="booking-progress" aria-label="Booking progress">
        <span className="complete">1 <small>Show</small></span><i></i>
        <span className={selectedCinema ? "complete" : ""}>2 <small>Seats</small></span><i></i>
        <span>3 <small>Payment</small></span>
      </div>


      {/* Date */}

      <section className="booking-section">

        <div className="booking-section-title">

          <CalendarDays size={20} />

          <h2>Select Date</h2>

        </div>


        <div className="date-list">

          {dates.map(
            (date, index) => (

              <button
                key={index}
                className={
                  selectedDate === index
                    ? "date-card active"
                    : "date-card"
                }
                onClick={() =>
                  setSelectedDate(index)
                }
              >

                <span>
                  {date.toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short"
                    }
                  )}
                </span>

                <strong>
                  {date.getDate()}
                </strong>

                <small>
                  {date.toLocaleDateString(
                    "en-US",
                    {
                      month: "short"
                    }
                  )}
                </small>

              </button>

            )
          )}

        </div>

      </section>


      {/* Cinemas */}

      <section className="booking-section">

        <div className="booking-section-title">

          <MapPin size={20} />

          <h2>
            Select Cinema in {selectedLocation}
          </h2>

        </div>


        <div className="cinema-list">

          {locationCinemas.length ? locationCinemas.map(
            (cinema) => (

              <div
                key={cinema.id}
                className={
                  selectedCinema?.id === cinema.id
                    ? "cinema-card selected"
                    : "cinema-card"
                }
              >

                <div className="cinema-info">

                  <h3>
                    {cinema.name}
                  </h3>

                  <p>
                    {cinema.location}
                  </p>

                  <span>
                    {cinema.distance}
                  </span>

                </div>


                <div className="cinema-formats">

                  {cinema.formats.map(
                    (format) => (

                      <span key={format}>
                        {format}
                      </span>

                    )
                  )}

                </div>


                <div className="show-times">

                  {cinema.times.map(
                    (time) => (

                      <button
                        key={time}
                        className={
                          selectedCinema?.id === cinema.id &&
                          selectedTime === time
                            ? "show-time selected"
                            : "show-time"
                        }
                        onClick={() => {

                          setSelectedCinema(
                            cinema
                          );

                          setSelectedTime(
                            time
                          );

                        }}
                      >

                        {time}

                      </button>

                    )
                  )}

                </div>

              </div>

            )
          ) : <div className="no-cinemas"><h3>No cinemas listed for {selectedLocation} yet.</h3><p>Please choose Pune, Mumbai, Kolhapur, Baner, Pune, Akluj, or Solapur from the location menu.</p></div>}

        </div>

      </section>


      {/* Seats */}

      <section className="booking-section seat-section">

        <div className="booking-section-title">

          <Clock size={20} />

          <h2>
            Select Seats
          </h2>

        </div>


        <div className="screen">

          SCREEN

        </div>


        <div className="seat-layout">

          {rows.map(
            (row) => (

              <div
                className="seat-row"
                key={row}
              >

                <span className="row-label">
                  {row}
                </span>


                {Array.from(
                  {
                    length: seatsPerRow
                  },
                  (_, index) => {

                    const seat =
                      `${row}${index + 1}`;

                    const occupied =
                      occupiedSeats.includes(
                        seat
                      );

                    const selected =
                      selectedSeats.includes(
                        seat
                      );


                    return (

                      <button
                        key={seat}
                        disabled={occupied}
                        className={`
                          seat
                          ${occupied ? "occupied" : ""}
                          ${selected ? "selected" : ""}
                        `}
                        onClick={() =>
                          toggleSeat(seat)
                        }
                      >
                        {index + 1}
                      </button>

                    );

                  }
                )}

              </div>

            )
          )}

        </div>


        {/* Legend */}

        <div className="seat-legend">

          <span>
            <i className="available"></i>
            Available
          </span>

          <span>
            <i className="selected"></i>
            Selected
          </span>

          <span>
            <i className="occupied"></i>
            Occupied
          </span>

        </div>

      </section>


      {/* Bottom Summary */}

      <div className="booking-bottom">

        <div>

          <span>
            {selectedSeats.length} Seats
          </span>

          <strong>
            ₹{total}
          </strong>

          <small>{selectedCinema ? `${selectedCinema.name}${selectedTime ? ` · ${selectedTime}` : ""}` : "Choose a cinema and showtime"}</small>

        </div>


        <button
          className="continue-button"
          onClick={continueBooking}
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default Booking;
