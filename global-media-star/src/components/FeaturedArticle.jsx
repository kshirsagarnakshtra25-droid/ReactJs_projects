import SectionTitle from "./SectionTitle";
import ArticleCard from "./ArticleCard";

import "./FeaturedArticles.css";

function FeaturedArticles() {

  const articles = [
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      category: "Business",
      title:
        "The New Rules of Building a Global Business",
      excerpt:
        "How modern companies are adapting their strategies to compete in an increasingly connected global economy.",
      author: "GMS Editorial",
      date: "August 28, 2026",
    },

    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
      category: "Leadership",
      title:
        "What Great Leaders Are Doing Differently",
      excerpt:
        "A closer look at the leadership principles helping organizations navigate rapid change and uncertainty.",
      author: "GMS Editorial",
      date: "August 27, 2026",
    },

    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
      category: "Technology",
      title:
        "Technology Is Redefining the Future of Work",
      excerpt:
        "From artificial intelligence to automation, technology is changing how modern organizations operate.",
      author: "GMS Editorial",
      date: "August 26, 2026",
    },
  ];

  return (
    <section className="featured-section section">

      <div className="container">

        <SectionTitle
          eyebrow="Editor's Choice"
          title="Featured Stories"
          description="Curated business stories, leadership insights and technology developments from the world of modern enterprise."
        />

        <div className="featured-grid">

          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              {...article}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedArticles;