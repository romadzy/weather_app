"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity, setUnit } from "@/services/redux/slices/weatherSlice";
import { RootState } from "@/services/redux/store/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Link from "next/link";
import {
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
  Box,
  Icon,
  Stack,
} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Header() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const cities = useSelector((state: RootState) => state.weather.cities);
  const unit = useSelector((state: RootState) => state.weather.unit);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const city = input.trim().toLowerCase();
    if (city && !cities.includes(city)) {
      dispatch(addCity(city));
      router?.push("/");
    } else {
      toast.error("City already exists or is invalid");
    }

    setInput("");
  };

  const handleUnitChange = (value: 'metric' | 'imperial') => {
    dispatch(setUnit(value));
  };

  return (
    <Box
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      mb={2}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("tablet")]: {
            display: "none",
          }
        })}
      >
        <Link href="/">
          <Icon
            color="primary"
            sx={{
              display: "flex",
              width: "40px",
              height: "40px",
            }}
          >
            <WbSunnyIcon sx={{ width: "40px", height: "40px" }}/>
          </Icon>
        </Link>
      </Box>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <TextField
          label="Enter city"
          value={input}
          onChange={e => setInput(e.target.value)}
          size="small"
          onKeyDown={e => e.key === "Enter" && handleAdd()}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={(_, value) => value && handleUnitChange(value)}
          size="small"
        >
          <ToggleButton value="metric">°C</ToggleButton>
          <ToggleButton value="imperial">°F</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Box>
  );
}

export { Header };