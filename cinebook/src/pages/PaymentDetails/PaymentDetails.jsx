import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentDetails.css";
import BackButton from "../../components/BackButton/BackButton";

const PaymentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Booking information coming from Seat Selection / Booking page
  const booking = location.state || {};

  const {
    movie,
    movieName,
    moviePoster,
    theatre,
    theatreName,
    date,
    showTime,
    time,
    selectedSeats = [],
    seats = [],
    ticketPrice = 200,
    convenienceFee = 30,
  } = booking;

  const finalMovieName = movieName || movie?.title || movie?.name || "Movie";
  const finalMoviePoster = moviePoster || movie?.image || movie?.poster;
  const finalTheatreName = theatreName || theatre || "CineBook Theatre";
  const finalTime = showTime || time || "7:00 PM";
  const dateText = date instanceof Date ? date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) : date || "Selected Date";

  const finalSeats =
    selectedSeats.length > 0 ? selectedSeats : seats;

  const ticketCount = finalSeats.length;

  const subtotal = ticketCount * Number(ticketPrice);
  const platformFee = Number(convenienceFee);
  const totalAmount = subtotal + platformFee;

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  // -----------------------------
  // Card input formatting
  // -----------------------------
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.substring(0, 16);

    // Add spaces after every 4 digits
    value = value.replace(/(.{4})/g, "$1 ").trim();

    setCardDetails({
      ...cardDetails,
      cardNumber: value,
    });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.substring(0, 4);

    if (value.length >= 3) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }

    setCardDetails({
      ...cardDetails,
      expiry: value,
    });
  };

  const handleCVVChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 3);

    setCardDetails({
      ...cardDetails,
      cvv: value,
    });
  };

  // -----------------------------
  // Validation
  // -----------------------------
  const validatePayment = () => {
    const newErrors = {};

    if (paymentMethod === "card") {
      if (!cardDetails.cardHolder.trim()) {
        newErrors.cardHolder = "Cardholder name is required";
      }

      const cardNumber = cardDetails.cardNumber.replace(/\s/g, "");

      if (cardNumber.length !== 16) {
        newErrors.cardNumber = "Enter a valid 16-digit card number";
      }

      if (cardDetails.expiry.length !== 5) {
        newErrors.expiry = "Enter expiry date in MM/YY format";
      }

      if (cardDetails.cvv.length !== 3) {
        newErrors.cvv = "Enter a valid 3-digit CVV";
      }
    }

    if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        newErrors.upiId = "UPI ID is required";
      } else if (!/^[\w.-]+@[\w.-]+$/.test(upiId)) {
        newErrors.upiId = "Enter a valid UPI ID";
      }
    }

    if (paymentMethod === "netbanking" && !selectedBank) newErrors.bank = "Please choose your bank";
    if (paymentMethod === "wallet" && !selectedWallet) newErrors.wallet = "Please choose a wallet";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // Proceed to payment
  // -----------------------------
  const handlePayment = () => {
    if (!validatePayment()) {
      return;
    }

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const bookingId =
        "CB-" +
        new Date().toISOString().slice(0, 10).replace(/-/g, "") +
        "-" +
        Math.floor(1000 + Math.random() * 9000);

      const paymentData = {
        ...booking,

        movie: movie || {
          title: finalMovieName,
          image: finalMoviePoster,
          genre: booking.experience ? "Live Experience" : "Entertainment",
          language: booking.experience ? "Event ticket" : "",
          duration: booking.experience ? "" : "",
          id: booking.experience ? "event" : undefined
        },
        movieName: finalMovieName,
        moviePoster: finalMoviePoster,

        theatre: finalTheatreName,
        theatreName: finalTheatreName,

        date: date,
        showTime: finalTime,

        selectedSeats: finalSeats,
        seats: finalSeats,

        ticketCount,

        ticketPrice: Number(ticketPrice),
        convenienceFee: platformFee,

        subtotal,
        total: totalAmount,
        totalAmount,

        paymentMethod:
          paymentMethod === "card"
            ? "Credit / Debit Card"
            : paymentMethod === "upi"
            ? "UPI"
            : paymentMethod === "netbanking"
            ? "Net Banking"
            : "Wallet",

        paymentStatus: "Payment Successful",

        bookingId,
      };

      // Save booking locally as backup
      localStorage.setItem(
        "cinebookBooking",
        JSON.stringify(paymentData)
      );
      const savedBookings = JSON.parse(localStorage.getItem("cinebookBookings") || "[]");
      localStorage.setItem("cinebookBookings", JSON.stringify([paymentData, ...savedBookings.filter((item) => item.bookingId !== bookingId)]));

      navigate("/booking-summary", {
        state: paymentData,
      });
    }, 2000);
  };

  return (
    <div className="payment-page">

      {/* Header */}
      <div className="payment-header">
        <div>
          <h1>Payment Details</h1>
          <p>Complete your payment to confirm your booking</p>
        </div>
      </div>

      <div className="payment-container">

        {/* LEFT SIDE */}
        <div className="payment-left">

          {/* Booking Information */}
          <div className="payment-card booking-info">

            <h2>Booking Details</h2>

            <div className="booking-movie">

              {finalMoviePoster && (
                <img
                  src={finalMoviePoster}
                  alt={finalMovieName}
                  className="payment-movie-poster"
                />
              )}

              <div className="booking-movie-details">
                <h3>{finalMovieName}</h3>

                <p>
                  <strong>Theatre:</strong>{" "}
                  {finalTheatreName}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {dateText}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {finalTime}
                </p>

                <p>
                  <strong>Seats:</strong>{" "}
                  {finalSeats.length > 0
                    ? finalSeats.join(", ")
                    : "No seats selected"}
                </p>
              </div>

            </div>
          </div>

          {/* Payment Methods */}
          <div className="payment-card">

            <h2>Payment Method</h2>

            <div className="payment-methods">

              <label
                className={`payment-method ${
                  paymentMethod === "card"
                    ? "active"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <strong>Credit / Debit Card</strong>
                  <span>Visa • Mastercard • RuPay</span>
                </div>
              </label>

              <label
                className={`payment-method ${
                  paymentMethod === "upi"
                    ? "active"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <strong>UPI</strong>
                  <span>Google Pay • PhonePe • Paytm</span>
                </div>
              </label>

              <label
                className={`payment-method ${
                  paymentMethod === "netbanking"
                    ? "active"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <strong>Net Banking</strong>
                  <span>Pay using your bank account</span>
                </div>
              </label>

              <label
                className={`payment-method ${
                  paymentMethod === "wallet"
                    ? "active"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <strong>Wallet</strong>
                  <span>Pay using your wallet</span>
                </div>
              </label>

            </div>
          </div>

          {/* Card Payment */}
          {paymentMethod === "card" && (
            <div className="payment-card">

              <h2>Card Details</h2>

              <div className="form-group">
                <label>Cardholder Name</label>

                <input
                  type="text"
                  placeholder="Enter cardholder name"
                  value={cardDetails.cardHolder}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardHolder: e.target.value,
                    })
                  }
                />

                {errors.cardHolder && (
                  <span className="error">
                    {errors.cardHolder}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label>Card Number</label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength="19"
                />

                {errors.cardNumber && (
                  <span className="error">
                    {errors.cardNumber}
                  </span>
                )}
              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Expiry Date</label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={handleExpiryChange}
                    maxLength="5"
                  />

                  {errors.expiry && (
                    <span className="error">
                      {errors.expiry}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label>CVV</label>

                  <input
                    type="password"
                    placeholder="•••"
                    value={cardDetails.cvv}
                    onChange={handleCVVChange}
                    maxLength="3"
                  />

                  {errors.cvv && (
                    <span className="error">
                      {errors.cvv}
                    </span>
                  )}
                </div>

              </div>

            </div>
          )}

          {/* UPI */}
          {paymentMethod === "upi" && (
            <div className="payment-card">

              <h2>UPI Payment</h2>

              <div className="form-group">

                <label>UPI ID</label>

                <input
                  type="text"
                  placeholder="example@upi"
                  value={upiId}
                  onChange={(e) =>
                    setUpiId(e.target.value)
                  }
                />

                {errors.upiId && (
                  <span className="error">
                    {errors.upiId}
                  </span>
                )}

              </div>

              <p className="payment-note">
                Enter your UPI ID to continue with the
                payment.
              </p>

            </div>
          )}

          {/* Net Banking */}
          {paymentMethod === "netbanking" && (
            <div className="payment-card">

              <h2>Net Banking</h2>

              <div className="form-group">

                <label>Select Bank</label>

                <select value={selectedBank} onChange={(event) => setSelectedBank(event.target.value)}>
                  <option value="">Select your bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                </select>
                {errors.bank && <span className="error">{errors.bank}</span>}

              </div>

            </div>
          )}

          {/* Wallet */}
          {paymentMethod === "wallet" && (
            <div className="payment-card">

              <h2>Wallet Payment</h2>

              <div className="wallet-options">

                <button type="button" className={selectedWallet === "Paytm" ? "active-wallet" : ""} onClick={() => setSelectedWallet("Paytm")}>
                  Paytm
                </button>

                <button type="button" className={selectedWallet === "Amazon Pay" ? "active-wallet" : ""} onClick={() => setSelectedWallet("Amazon Pay")}>
                  Amazon Pay
                </button>

                <button type="button" className={selectedWallet === "Mobikwik" ? "active-wallet" : ""} onClick={() => setSelectedWallet("Mobikwik")}>
                  Mobikwik
                </button>

              </div>
              {errors.wallet && <span className="error">{errors.wallet}</span>}

            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="payment-right">

          <div className="price-card">

            <h2>Price Summary</h2>

            <div className="price-row">
              <span>
                Tickets ({ticketCount})
              </span>

              <strong>
                ₹{subtotal}
              </strong>
            </div>

            <div className="price-row">
              <span>Convenience Fee</span>

              <strong>
                ₹{platformFee}
              </strong>
            </div>

            <div className="price-divider"></div>

            <div className="total-row">
              <span>Total Amount</span>

              <strong>
                ₹{totalAmount}
              </strong>
            </div>

            <button
              className="pay-button"
              onClick={handlePayment}
              disabled={processing}
            >
              {processing
                ? "Processing Payment..."
                : `Proceed to Pay ₹${totalAmount}`}
            </button>

            <p className="secure-payment">
              🔒 Your payment is secure and encrypted
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PaymentDetails;
