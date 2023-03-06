import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("Given a page error 404", () => {
  test("When rendered, Then it should show all information of the page", () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    const titleElement = screen.getByText("Error 404");
    const paragraphElement = screen.getByText(
      "Looks like you got lost on the dark side"
    );
    const imageElement = screen.getByRole("img");
    const linkElement = screen.getByRole("link");
    expect(titleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
