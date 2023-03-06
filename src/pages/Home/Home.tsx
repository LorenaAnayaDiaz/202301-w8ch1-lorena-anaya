import { Link } from "react-router-dom";
import CardList from "../../features/cardlist/CardList";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <h1 className="home__title">Check out the robots!</h1>
      <CardList />
      <Link className="text" data-testid="link" to={"/Form"}>
        CREATE YOUR OWN ROBOTS!
      </Link>{" "}
    </>
  );
};
