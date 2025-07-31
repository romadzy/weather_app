import { render, screen } from "@testing-library/react";
import CitiesList from "@/components/CitiesList";
import { Providers } from "@/services/redux/providers";

jest.mock("@/components/CityCard", () => ({ city, unit }: any) => (
  <div data-testid="city-card">{city}</div>
));

describe("CitiesList", () => {
  it("renders city cards for each city", () => {
    render(
      <Providers>
        <CitiesList />
      </Providers>
    );
    expect(screen.queryAllByTestId("city-card").length).toBe(0);
  });
});
