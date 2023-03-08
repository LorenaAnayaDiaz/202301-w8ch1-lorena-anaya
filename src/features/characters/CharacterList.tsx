import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Card } from "../../shared/components/card/Card";
import Loading from "../../shared/components/Loading/Loading";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import { APIStatus } from "../../shared/models/api-status";
import { CharactersContainer } from "./CharacterListStyled";

import { Character } from "./characters-model";
import { getAllByPageAsync, selectCharacters } from "./characters-slice";

const CharactersList = () => {
  const charactersState = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllByPageAsync(charactersState.currentPage));
  }, [dispatch, charactersState.currentPage]);

  const generateCharacterComponent = () => {
    switch (charactersState.status) {
      case APIStatus.LOADING:
        return <Loading />;
      case APIStatus.ERROR:
        return <p role="paragraph">Error</p>;
      default:
        return (
          <>
            <Pagination />
            <CharactersContainer>
              {charactersState.characters.map((character: Character) => (
                <li key={`${character.id}-${character.name}`}>
                  <Card imgUrl={character.imgUrl} name={character.name} />
                </li>
              ))}
            </CharactersContainer>
          </>
        );
    }
  };

  return <>{generateCharacterComponent()}</>;
};

export default CharactersList;
