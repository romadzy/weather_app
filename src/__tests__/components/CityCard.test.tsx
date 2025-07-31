import { render, screen } from "@testing-library/react";
import CityCard from "@/components/CityCard";
import { Providers } from "@/services/redux/providers";

jest.mock('@/services/redux/api/weatherApi', () => ({
  __esModule: true,
  useGetCityWeatherQuery: jest.fn(() => ({
    data: {
      name: 'London',
      weather: [{ icon: '01d', description: 'clear sky' }],
      main: { temp: 20, humidity: 50, feels_like: 19, pressure: 1012 },
      wind: { speed: 5 },
    },
    error: undefined,
    isLoading: false,
    refetch: jest.fn(),
  })),
  weatherApi: {
    reducerPath: 'weatherApi',
    reducer: (state = {}, action: any) => state,
    middleware: () => (next: any) => (action: any) => next(action),
  },
}));

describe("CityCard", () => {
  it("renders city name and weather info", () => {
    render(
      <Providers>
        <CityCard city="london" unit="metric" />
      </Providers>
    );
    expect(screen.getByText(/london/i)).toBeInTheDocument();
    expect(screen.getByText(/temperature/i)).toBeInTheDocument();
    expect(screen.getByText(/humidity/i)).toBeInTheDocument();
  });
});
