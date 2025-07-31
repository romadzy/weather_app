export const weatherApi = {
  reducerPath: 'weatherApi',
  reducer: (state = {}, action: any) => state,
  middleware: () => (next: any) => (action: any) => next(action),
  useGetCityWeatherQuery: () => ({
    data: {
      name: 'London',
      weather: [{ icon: '01d', description: 'clear sky' }],
      main: { temp: 20, humidity: 50 },
      wind: { speed: 5 },
    },
    error: undefined,
    isLoading: false,
    refetch: jest.fn(),
  }),
  useGetCityHourlyQuery: () => ({
    data: {
      list: [
        { dt: 1710000000, main: { temp: 20 } },
        { dt: 1710003600, main: { temp: 21 } },
      ],
    },
    isLoading: false,
    error: undefined,
    refetch: jest.fn(),
  }),
};
