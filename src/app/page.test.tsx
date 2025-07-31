import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("@/components/CitiesList", () => () => <div data-testid="cities-list" />);

describe("Home page", () => {
  it("renders CitiesList", () => {
    render(<Home />);
    expect(screen.getByTestId("cities-list")).toBeInTheDocument();
  });
});
