import { Link } from "react-router-dom";
import CardList from "../../features/cardlist/CardList";

import "./Form.css";

export const Form = () => {
  return (
    <>
      <h1 className="home__title">Create your own robot!</h1>
      <CardList />
      <Link className="text" data-testid="link" to={"/"}>
        Go home
      </Link>{" "}
    </>
  );
};
