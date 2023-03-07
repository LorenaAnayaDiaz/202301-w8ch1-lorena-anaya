import { waitFor, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { server } from "../../mocks/server";
import CharactersList from "./CharacterList";

//3 CASOS DE USOS PRINCIPALES: LOADING, ERROR, IDLE
//PARA HACER LLAMADAS A LA API NECESITAMOS UN HANDLER, QUE VIENE DE MSW

describe("Given a character list component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("When the page is loaded, it should show a list of characters", async () => {
    render(
      <Provider store={store}>
        <CharactersList />
      </Provider>
    );

    await waitFor(async () => {
      const charactersItems = screen.getAllByRole("listitem");
      expect(charactersItems.length).toBe(10);
    });
  });
});
