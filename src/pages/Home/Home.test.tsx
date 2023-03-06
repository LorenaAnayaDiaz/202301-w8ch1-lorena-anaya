import React from "react";
import { Home } from "./Home";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MemoryRouter } from "react-router-dom";

test("When rendering home, the title should be displayed", () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <Home />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
  const title = screen.getByText("Check out the robots!");
  expect(title).toBeInTheDocument();
});
