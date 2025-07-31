import { Typography } from "@mui/material";
import UnitType from "./UnitType";
import React from "react";

type WeatherInfoProps = {
  data: any;
  unit: "metric" | "imperial";
  type: "detail" | "card";
};

const WeatherInfo: React.FC<WeatherInfoProps> = React.memo(({ data, unit, type }) => (
  <>
    <Typography variant={type === "detail" ? "h6" : "body1"}>
      {data.weather[0].main}
    </Typography>
    <Typography variant="body1">
      Temperature: {data.main.temp}<UnitType unit={unit} />
    </Typography>
    {type === "detail" && (
      <>
        <Typography variant="body2">
          Feels like: {data.main.feels_like}°
        </Typography>
        <Typography variant="body2">
          Humidity: {data.main.humidity}%
        </Typography>
        <Typography variant="body2">
          Pressure: {data.main.pressure} hPa
        </Typography>
        <Typography variant="body2">
          Wind: {data.wind.speed} {unit === "metric" ? "m/s" : "mph"}
        </Typography>
      </>
    )}
    {type === "card" && (
      <Typography variant="body1">
        Humidity: {data.main.humidity}%
      </Typography>
    )}
  </>
));

export default WeatherInfo;