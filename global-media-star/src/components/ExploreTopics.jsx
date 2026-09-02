import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import "./ExploreTopics.css";

function ExploreTopics() {
  const topics = [
    {
      number: "01",
      title: "Business",
      description:
        "Markets, companies, strategy and the forces shaping global business.",
      icon: "fa-solid fa-chart-line",
      link: "/business",
    },
    {
      number: "02",
      title: "Technology",
      description:
        "Innovation, artificial intelligence and technology transforming industries.",
      icon: "fa-solid fa-microchip",
      link: "/technology",
    },
    {
      number: "03",
      title: "Leadership",
      description:
        "Ideas, strategies and lessons from influential business leaders.",
      icon: "fa-solid fa-user-tie",
      link: "/leadership",
    },
    {
      number: "04",
      title: "Startups",
      description:
        "Founders, emerging companies and the next generation of entrepreneurs.",
      icon: "fa-solid fa-rocket",
      link: "/startups",
    },
    {
      number: "05",
      title: "Finance",
      description:
        "Financial insights, investment trends and the global economy.",
      icon: "fa-solid fa-coins",
      link: "/finance",
    },
    {
      number: "06",
      title: "Innovation",
      description:
        "Discover ideas and innovations creating tomorrow's opportunities.",
      icon: "fa-solid fa-lightbulb",
      link: "/innovation",
    },
  ];

  return (
    <section className="topics-section section">

      <div className="container">

        <SectionTitle
          eyebrow="Explore"
          title="Explore Topics"
          description="Navigate through the ideas, industries and conversations defining today's global business landscape."
        />

        <div className="topics-grid">

          {topics.map((topic) => (
            <Link
              to={topic.link}
              className="topic-card"
              key={topic.number}
            >

              <div className="topic-top">

                <span className="topic-number">
                  {topic.number}
                </span>

                <i className={topic.icon}></i>

              </div>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>

              <span className="topic-arrow">
                Explore
                <i className="fa-solid fa-arrow-right"></i>
              </span>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ExploreTopics;