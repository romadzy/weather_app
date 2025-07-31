"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store/store";

import { Grid } from "@mui/material";
import CityCard from "@/components/CityCard";

const CitiesList = () => {
  const cities = useSelector((state: RootState) => state.weather.cities);
  const unit = useSelector((state: RootState) => state.weather.unit);
  console.log({cities});

  return (
    <Grid container spacing={2}>
      {cities.map(city => (
        <CityCard key={city} city={city} unit={unit} />
      ))}
    </Grid>
  );
}

export default CitiesList;