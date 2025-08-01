"use client";

import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store/store";
import {
  useGetCityWeatherQuery,
  useGetCityHourlyQuery
} from "@/services/redux/api/weatherApi";
import {
  Button,
  Box,
  Typography,
  Stack,
  Card,
  Alert,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import Image from "next/image";
import Link from "next/link";

import WeatherInfo from "./WeatherInfo";
import Loader from "./UI/Loader";
import RefetchButton from "./UI/RefetchButton";

const CityDetail = () => {
  const params = useParams();
  const router = useRouter();
  const city = params.id as string;
  const cities = useSelector((state: RootState) => state.weather.cities);
  const unit = useSelector((state: RootState) => state.weather.unit);

  if (!cities.includes(city)) {
    notFound();
  }

  const {
    data: weather,
    isLoading: isWeatherLoading,
    error: weatherError,
    refetch: refetchWeather,
  } = useGetCityWeatherQuery({ city, unit });

  const {
    data: hourly,
    isLoading: isHourlyLoading,
    error: hourlyError,
    refetch: refetchHourly,
  } = useGetCityHourlyQuery({ city, unit });

  const isLoading = isWeatherLoading || isHourlyLoading;
  const error = weatherError || hourlyError;

  const chartData =
    hourly?.list?.slice(0, 8).map((item: any) => ({
      time: new Date(item.dt * 1000).getHours() + ":00",
      temp: item.main.temp,
    })) || [];

  const refetch = () => {
    refetchWeather();
    refetchHourly();
  };

  if (isLoading) return <Loader />;
  if (error) return <Alert severity="error">Error loading data</Alert>;
  if (!weather) return <Alert severity="warning">Do not have weather data</Alert>;

  return (
    <Box maxWidth={600} mx="auto">
      <Link href="/">
        <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 2 }}>
          Back to Cities
        </Button>
      </Link>
      <Card sx={{ p: 3, m: 0, mb: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h4">{weather.name}</Typography>
              <Image
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
                width={64}
                height={64}
                priority
              />
            </Stack>
            <WeatherInfo data={weather} unit={unit} type="detail"/>
          </Box>
          <RefetchButton refetch={refetch} />
        </Stack>
      </Card>
      <Card sx={{ p: 3, m: 0 }}>
        <Typography variant="h6" mb={2}>
          Hourly Forecast
        </Typography>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis
                domain={['auto', 'auto']}
                tickFormatter={v => `${v}°`}
              />
              <Tooltip formatter={v => `${v}°`} />
              <Line type="monotone" dataKey="temp" stroke="#1976d2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <Typography>Not enough data for chart</Typography>
        )}
      </Card>
    </Box>
  );
};

export default CityDetail;