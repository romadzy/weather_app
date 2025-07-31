import { render, screen } from "@testing-library/react";
import CityDetail from "@/components/CityDetail";
import { Providers } from "@/services/redux/providers";

jest.mock("next/navigation", () => ({
  useParams: () => ({ id: "london" }),
  useRouter: () => ({ back: jest.fn() }),
}));

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
  useGetCityHourlyQuery: jest.fn(() => ({
    data: {
      list: [
        { dt: 1710000000, main: { temp: 20 } },
        { dt: 1710003600, main: { temp: 21 } },
      ],
    },
    isLoading: false,
    error: undefined,
    refetch: jest.fn(),
  })),
  weatherApi: {
    reducerPath: 'weatherApi',
    reducer: (state = {}, action: any) => state,
    middleware: () => (next: any) => (action: any) => next(action),
  },
}));

describe("CityDetail", () => {
  it("renders city name and weather info", () => {
    render(
      <Providers>
        <CityDetail />
      </Providers>
    );
    expect(screen.getByText(/london/i)).toBeInTheDocument();
    expect(screen.getByText(/hourly forecast/i)).toBeInTheDocument();
  });
});
