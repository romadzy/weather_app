import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUnit, setCities, setInitialized } from "@/services/redux/slices/weatherSlice";
import { RootState } from "@/services/redux/store/store";

export function useWeatherLocalStorageSync() {
  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.weather.cities);
  const unit = useSelector((state: RootState) => state.weather.unit);

  useEffect(() => {
    const storedCities = localStorage.getItem("cities");
    const storedUnit = localStorage.getItem("unit");
    if (storedCities) {
      dispatch(setCities(JSON.parse(storedCities)));
    }
    if (storedUnit) {
      dispatch(setUnit(storedUnit as "metric" | "imperial"));
    }

    dispatch(setInitialized());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);
}
