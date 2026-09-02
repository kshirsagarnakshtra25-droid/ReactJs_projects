import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { activities } from "../../data/experiences";

function Activities() {
  return (
    <CategoryPage
      title="Activities"
      subtitle="Find exciting things to do, from adventure to entertainment."
      category="Popular Activities"
      items={activities}
    />
  );
}

export default Activities;