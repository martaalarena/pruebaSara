import ClientList from "../clientList/ClientList";
import Filter from "../filter/Filter";
import Searcher from "../searcher/Searcher";
import "./HomePage.css"

export default function HomePage() {
  return (
    <>
      <section className="homePageContainer">
        <Searcher />
        <ClientList />
        <Filter />
      </section>
    </>
  );
}
