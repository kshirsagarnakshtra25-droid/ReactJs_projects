import "./NewsTicker.css";

function NewsTicker() {
  const headlines = [
    "Global markets continue to evolve as technology transforms modern business.",
    "AI is reshaping the future of industries and leadership.",
    "Emerging startups are creating new opportunities across global markets.",
    "Business leaders focus on innovation, sustainability, and long-term growth.",
    "Digital transformation continues to redefine modern enterprises.",
  ];

  return (
    <section className="news-ticker" aria-label="Trending news">

      <div className="ticker-label">
        <span className="ticker-dot"></span>
        TRENDING NOW
      </div>

      <div className="ticker-wrapper">
        <div className="ticker-track">

          {/* First set */}
          {headlines.map((headline, index) => (
            <div className="ticker-item" key={`first-${index}`}>
              <span className="ticker-star">✦</span>
              <span>{headline}</span>
            </div>
          ))}

          {/* Duplicate set for continuous animation */}
          {headlines.map((headline, index) => (
            <div className="ticker-item" key={`second-${index}`}>
              <span className="ticker-star">✦</span>
              <span>{headline}</span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default NewsTicker;