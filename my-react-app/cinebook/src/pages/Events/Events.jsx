import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { events } from "../../data/experiences";

function Events() {
  return (
    <CategoryPage
      title="Events"
      subtitle="Discover concerts, comedy shows and unforgettable live experiences."
      category="Upcoming Events"
      items={events}
    />
  );
}

export default Events;