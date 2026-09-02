import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({
  image,
  category,
  title,
  excerpt,
  author,
  date,
}) {
  return (
    <article className="article-card">

      <Link to="/article-details" className="article-image">
        <img
          src={image}
          alt={title}
        />

        <span className="article-category">
          {category}
        </span>
      </Link>

      <div className="article-content">

        <div className="article-meta">
          <span>{date}</span>
          <span className="meta-dot"></span>
          <span>{author}</span>
        </div>

        <h3>
          <Link to="/article-details">
            {title}
          </Link>
        </h3>

        <p>{excerpt}</p>

        <Link
          to="/article-details"
          className="read-more"
        >
          Read Story
          <i className="fa-solid fa-arrow-right"></i>
        </Link>

      </div>

    </article>
  );
}

export default ArticleCard;