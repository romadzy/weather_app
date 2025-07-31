import { render, screen } from "@testing-library/react";
import UnitType from "@/components/UnitType";

describe("UnitType", () => {
  it("shows °C for metric", () => {
    render(<UnitType unit="metric" />);
    expect(screen.getByText("°C")).toBeInTheDocument();
  });
  it("shows °F for imperial", () => {
    render(<UnitType unit="imperial" />);
    expect(screen.getByText("°F")).toBeInTheDocument();
  });
});
