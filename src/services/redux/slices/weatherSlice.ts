import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  cities: string[];
  unit: "metric" | "imperial";
  initialized: boolean;
}

const initialState: WeatherState = {
  cities: [],
  unit: "metric",
  initialized: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setInitialized: (state) => { state.initialized = true; },
    addCity: (state, action: PayloadAction<string>) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload);
      }
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter(city => city !== action.payload);
    },
    setUnit: (state, action: PayloadAction<"metric" | "imperial">) => {
      state.unit = action.payload;
    },
    setCities: (state, action: PayloadAction<string[]>) => {
      state.cities = action.payload;
    },
  },
});

export const { addCity, removeCity, setUnit, setCities, setInitialized } = weatherSlice.actions;
export default weatherSlice.reducer;