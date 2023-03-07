import { waitFor, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import CharactersList from "./CharacterList";

//3 CASOS DE USOS PRINCIPALES: LOADING, ERROR, IDLE
//PARA HACER LLAMADAS A LA API NECESITAMOS UN HANDLER, QUE VIENE DE MSW

describe("Given a CharacterList component", () => {
  describe("When component loads and API responds with characters", () => {
    test("Then it should show loading and after response it should render the list", async () => {
      render(
        <Provider store={store}>
          <CharactersList />
        </Provider>
      );
      const loadingElement = await screen.findByRole("img");
      expect(loadingElement).toHaveAttribute("alt", "Waiting for data loading");
      await waitFor(async () => {
        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(10);
      });
    });
  });
});

describe("When component loads and API responds with an error", () => {
  test("Then it should show loading and after response should render the error message", async () => {
    server.use(...errorHandlers);
    render(
      <Provider store={store}>
        <CharactersList />
      </Provider>
    );
    const loadingElement = await screen.findByRole("img");
    expect(loadingElement).toHaveAttribute("alt", "Waiting for data loading");
    await waitFor(async () => {
      const errorMessage = await screen.findByRole("paragraph");
      expect(errorMessage).toHaveTextContent("Error");
    });
  });
});
