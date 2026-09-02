import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import "./LatestNews.css";

function LatestNews() {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
      category: "Business",
      title: "How Modern Companies Are Building for Long-Term Growth",
      date: "August 28, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
      category: "Markets",
      title: "The Changing Landscape of Global Markets",
      date: "August 28, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
      category: "Technology",
      title: "Why Innovation Has Become a Business Imperative",
      date: "August 27, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=85",
      category: "Leadership",
      title: "Inside the Mindset of High-Performing Leaders",
      date: "August 27, 2026",
    },
  ];

  return (
    <section className="latest-news section">

      <div className="container">

        <div className="latest-news-heading">

          <SectionTitle
            eyebrow="The Newsroom"
            title="Latest News"
            description="Stay informed with the latest developments, ideas and conversations from the global business world."
          />

          <Link
            to="/articles"
            className="view-all-news"
          >
            View All Stories
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

        </div>


        <div className="news-layout">

          {/* Main Story */}

          <article className="main-news-card">

            <Link
              to="/article-details"
              className="main-news-image"
            >
              <img
                src={news[0].image}
                alt={news[0].title}
              />

              <span>
                {news[0].category}
              </span>
            </Link>

            <div className="main-news-content">

              <div className="news-date">
                {news[0].date}
              </div>

              <h3>
                <Link to="/article-details">
                  {news[0].title}
                </Link>
              </h3>

              <p>
                Explore the strategies and ideas helping
                ambitious organizations navigate an increasingly
                complex global economy.
              </p>

              <Link
                to="/article-details"
                className="news-read"
              >
                Read Story
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

            </div>

          </article>


          {/* Smaller Stories */}

          <div className="news-list">

            {news.slice(1).map((item, index) => (

              <article
                className="news-list-item"
                key={index}
              >

                <Link
                  to="/article-details"
                  className="news-list-image"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </Link>

                <div className="news-list-content">

                  <span>
                    {item.category}
                  </span>

                  <h4>
                    <Link to="/article-details">
                      {item.title}
                    </Link>
                  </h4>

                  <p>
                    {item.date}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default LatestNews;