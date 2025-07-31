import { render, screen } from "@testing-library/react";
import CityDetailPage from "./page";

jest.mock("@/components/CityDetail", () => () => <div data-testid="city-detail" />);

describe("CityDetailPage", () => {
  it("renders CityDetail", () => {
    render(<CityDetailPage />);
    expect(screen.getByTestId("city-detail")).toBeInTheDocument();
  });
});
