import CharactersList from "../../features/characters/CharacterList";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <h1 className="home__title">CHARACTERS</h1>
      <CharactersList />
    </>
  );
};
