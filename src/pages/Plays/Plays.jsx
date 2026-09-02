import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { plays } from "../../data/experiences";

function Plays() {
  return (
    <CategoryPage
      title="Plays & Theatre"
      subtitle="Experience powerful stories, live performances and unforgettable theatre."
      category="Trending Plays"
      items={plays}
    />
  );
}

export default Plays;