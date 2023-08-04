import axios from "axios";
import { CurrentWeather } from "./types";

export const getCurrentWeather = async (city?: string, apiKey?: string) => {
  if (!city || !apiKey) return;
  return await axios
    .get<CurrentWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${apiKey}`
    )
    .then((res) => res.data);
};
