import "./Subscribe.css";

function Subscribe() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for subscribing to Global Media Star!");

    e.target.reset();
  };

  return (
    <main className="subscribe-page">

      <section className="subscribe-section">

        <div className="subscribe-container">

          <span className="subscribe-small-title">
            GLOBAL MEDIA STAR
          </span>

          <h1>
            Stay Ahead
            <span>Of What's Next.</span>
          </h1>

          <p>
            Get the latest business stories, technology insights,
            finance updates, leadership interviews and exclusive
            magazine releases directly in your inbox.
          </p>

          <form
            className="subscribe-form"
            onSubmit={handleSubmit}
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              Subscribe →
            </button>

          </form>

          <div className="subscribe-note">
            🔒 Your email is safe with us. No spam.
          </div>

        </div>

      </section>

    </main>
  );
}

export default Subscribe;