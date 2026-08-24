import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  CheckCircle,
  MapPin,
  CalendarDays,
  Clock,
  Armchair,
  Download,
  Home
} from "lucide-react";

import "./BookingSummary.css";

function BookingSummary() {

  const location = useLocation();
  const navigate = useNavigate();

  const [confirmed, setConfirmed] = useState(false);

  const booking = location.state;


  // If user directly opens the page
  // without booking information

  if (!booking) {

    return (

      <div className="summary-error">

        <h2>
          Booking information not found
        </h2>

        <p>
          Please select a movie and start
          the booking process.
        </p>

        <Link to="/movies">
          Browse Movies
        </Link>

      </div>

    );
  }


  const {
    movie,
    date,
    cinema,
    time,
    seats,
    subtotal,
    convenienceFee,
    total
  } = booking;

  const formattedDate = (options) => {
    if (date instanceof Date) return date.toLocaleDateString("en-IN", options);
    const parsedDate = new Date(date);
    return Number.isNaN(parsedDate.getTime()) ? date : parsedDate.toLocaleDateString("en-IN", options);
  };


  function confirmBooking() {

    setConfirmed(true);

  }


  function downloadTicket() {

    window.print();

  }


  // =========================
  // CONFIRMED SCREEN
  // =========================

  if (confirmed) {

    return (

      <div className="confirmation-page">

        <div className="confirmation-card">

          <div className="success-icon">

            <CheckCircle size={55} />

          </div>


          <h1>
            Booking Confirmed!
          </h1>


          <p className="confirmation-message">

            Your movie tickets have been
            successfully booked.

          </p>


          {/* Ticket */}

          <div className="digital-ticket">

            <div className="ticket-header">

              <div>

                <span>Movie</span>

                <h2>
                  {movie.title}
                </h2>

              </div>

              <span className="ticket-status">
                CONFIRMED
              </span>

            </div>


            <div className="ticket-divider"></div>


            <div className="ticket-details">

              <div>

                <CalendarDays size={18} />

                <div>

                  <span>Date</span>

                  <strong>
                  {formattedDate({
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })}
                  </strong>

                </div>

              </div>


              <div>

                <Clock size={18} />

                <div>

                  <span>Time</span>

                  <strong>
                    {time}
                  </strong>

                </div>

              </div>


              <div>

                <Armchair size={18} />

                <div>

                  <span>Seats</span>

                  <strong>
                    {seats.join(", ")}
                  </strong>

                </div>

              </div>


              <div>

                <MapPin size={18} />

                <div>

                  <span>Cinema</span>

                  <strong>
                    {cinema.name}
                  </strong>

                </div>

              </div>

            </div>


            <div className="ticket-location">

              <MapPin size={16} />

              {cinema.location}

            </div>


            <div className="ticket-divider"></div>


            <div className="ticket-total">

              <span>
                Total Paid
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            <div className="ticket-code">

              <div className="qr-placeholder">

                █▀▀▀▀▀█
                <br />
                █ ▀▀▀ █
                <br />
                █ ███ █
                <br />
                █▄▄▄▄▄█

              </div>

              <span>
                CINEBOOK-{movie.id}
                {seats.length}
                {Date.now().toString().slice(-4)}
              </span>

            </div>

          </div>


          {/* Actions */}

          <div className="confirmation-actions">

            <button
              className="download-button"
              onClick={downloadTicket}
            >

              <Download size={18} />

              Download Ticket

            </button>


            <button
              className="home-button"
              onClick={() =>
                navigate("/")
              }
            >

              <Home size={18} />

              Back to Home

            </button>

          </div>

        </div>

      </div>

    );
  }


  // =========================
  // SUMMARY SCREEN
  // =========================

  return (

    <div className="summary-page">

      <div className="summary-container">


        {/* Header */}

        <div className="summary-header">

          <span>
            CINEBOOK
          </span>

          <h1>
            Booking Summary
          </h1>

          <p>
            Review your booking before
            confirming.
          </p>

        </div>


        <div className="summary-layout">


          {/* LEFT */}

          <div className="summary-main">


            {/* Movie */}

            <div className="summary-movie">

              <img
                src={movie.image}
                alt={movie.title}
              />


              <div>

                <span className="summary-label">
                  MOVIE
                </span>

                <h2>
                  {movie.title}
                </h2>

                <p>
                  {movie.genre}
                </p>

                <span>
                  {movie.language} •
                  {" "}
                  {movie.duration}
                </span>

              </div>

            </div>


            {/* Show Details */}

            <div className="summary-section">

              <h3>
                Show Details
              </h3>


              <div className="summary-info-grid">


                <div className="summary-info">

                  <CalendarDays size={19} />

                  <div>

                    <span>
                      Date
                    </span>

                    <strong>
                      {formattedDate({
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                    </strong>

                  </div>

                </div>


                <div className="summary-info">

                  <Clock size={19} />

                  <div>

                    <span>
                      Time
                    </span>

                    <strong>
                      {time}
                    </strong>

                  </div>

                </div>


                <div className="summary-info">

                  <MapPin size={19} />

                  <div>

                    <span>
                      Cinema
                    </span>

                    <strong>
                      {cinema.name}
                    </strong>

                  </div>

                </div>


                <div className="summary-info">

                  <Armchair size={19} />

                  <div>

                    <span>
                      Seats
                    </span>

                    <strong>
                      {seats.join(", ")}
                    </strong>

                  </div>

                </div>

              </div>


              <p className="cinema-address">

                <MapPin size={15} />

                {cinema.location}

              </p>

            </div>


          </div>


          {/* RIGHT */}

          <aside className="price-card">

            <h3>
              Price Details
            </h3>


            <div className="price-row">

              <span>
                Tickets
                {" "}
                ({seats.length})
              </span>

              <span>
                ₹{subtotal}
              </span>

            </div>


            <div className="price-row">

              <span>
                Convenience Fee
              </span>

              <span>
                ₹{convenienceFee}
              </span>

            </div>


            <div className="price-divider"></div>


            <div className="price-total">

              <span>
                Total
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            <button
              className="confirm-button"
              onClick={confirmBooking}
            >

              Confirm Booking

            </button>


            <p className="secure-message">

              🔒 Secure booking •
              Instant confirmation

            </p>

          </aside>


        </div>

      </div>

    </div>

  );
}

export default BookingSummary;
