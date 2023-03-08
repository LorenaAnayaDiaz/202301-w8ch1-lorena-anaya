import { useAppDispatch } from "../../../app/hooks";
import {
  nextPage,
  previousPage,
} from "../../../features/characters/characters-slice";
import { PaginationButton, PaginationContainer } from "./PaginationStyled";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  return (
    <PaginationContainer>
      <PaginationButton type="button" onClick={() => dispatch(previousPage())}>
        <i className="fa-solid fa-left-long"></i>
      </PaginationButton>
      <PaginationButton type="button" onClick={() => dispatch(nextPage())}>
        <i className="fa-solid fa-right-long"></i>
      </PaginationButton>
    </PaginationContainer>
  );
};
