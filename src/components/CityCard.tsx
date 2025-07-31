"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/services/redux/store/store";
import { removeCity } from "@/services/redux/slices/weatherSlice";
import { useGetCityWeatherQuery } from "@/services/redux/api/weatherApi";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  Stack,
  Typography,
  Card,
  Grid,
  Alert,
  IconButton
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Loader from "./UI/Loader";
import WeatherInfo from "./WeatherInfo";


const CityCard = ({ city, unit }: { city: string, unit: "metric" | "imperial" }) => {
  const dispatch = useDispatch();
  const initialized = useSelector((state: RootState) => state.weather.initialized);
  
  const { data, error, isLoading } = useGetCityWeatherQuery({ city, unit }, {
    skip: !initialized,
  });

  const handleRemove = () => {
    dispatch(removeCity(city));
  }

  if (!initialized) return null;

  if (isLoading) return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Loader />
    </Grid>
  );

  if (error) return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} alignItems="center" justifyContent="center">
      <Alert severity="error">Error loading weather data</Alert>
    </Grid>
  );

  if (data?.cod === "404") {
    toast.error(`City "${city}" not found`)
    dispatch(removeCity(city));
  }

  if (!data) return null;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card
          sx={{
            m: 0,
            p: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5">{data.name}</Typography>
              <Image
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
                width={50}
                height={50}
                unoptimized
              />
            </Stack>
            <IconButton color="primary" onClick={handleRemove}>
              <DeleteIcon />
            </IconButton>
          </Stack>
          <WeatherInfo data={data} unit={unit} type="card"/>

          <Link href={`/city/${city}`} style={{ alignSelf: "flex-end" }}>
            <IconButton color="primary">
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </Card>
    </Grid>
  );
};

export default CityCard;
export { CityCard };