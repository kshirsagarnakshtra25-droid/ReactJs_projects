import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { sports } from "../../data/experiences";

function Sports() {
  return (
    <CategoryPage
      title="Sports"
      subtitle="Catch the biggest matches, tournaments and sporting experiences."
      category="Upcoming Sports"
      items={sports}
    />
  );
}

export default Sports;