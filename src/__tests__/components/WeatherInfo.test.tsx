import { render, screen } from "@testing-library/react";
import WeatherInfo from "@/components/WeatherInfo";

const mockData = {
  weather: [{ main: "Clear", description: "clear sky" }],
  main: { temp: 25, feels_like: 24, humidity: 40, pressure: 1012 },
  wind: { speed: 3 },
};

describe("WeatherInfo", () => {
  it("renders main weather and temperature", () => {
    render(<WeatherInfo data={mockData} unit="metric" type="card" />);
    expect(screen.getByText(/clear/i)).toBeInTheDocument();
    expect(screen.getByText(/temperature/i)).toBeInTheDocument();
    expect(screen.getByText(/humidity/i)).toBeInTheDocument();
  });

  it("renders detail info when type is detail", () => {
    render(<WeatherInfo data={mockData} unit="imperial" type="detail" />);
    expect(screen.getByText(/feels like/i)).toBeInTheDocument();
    expect(screen.getByText(/pressure/i)).toBeInTheDocument();
    expect(screen.getByText(/wind/i)).toBeInTheDocument();
  });
});
