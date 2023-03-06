import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MemoryRouter } from "react-router-dom";
import { Form } from "./Form";

test("When rendering form page, the title should be displayed", () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <Form />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
  const title = screen.getByText("Create your own robot!");
  expect(title).toBeInTheDocument();
});
