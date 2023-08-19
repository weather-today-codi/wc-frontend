import axios from "axios";
import { CurrentWeather } from "./types";

export const getCurrentWeather = async (city: string, apiKey: string) => {
  console.log(city, apiKey);
  if (!city || !apiKey) {
    console.log(city, apiKey);
    throw new Error("도시와 API 키는 필수 매개변수입니다.");
  }

  try {
    const response = await axios.get<CurrentWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${apiKey}`
    );

    return response.data;
  } catch (error) {
    throw new Error("날씨 정보를 가져오는 중에 오류가 발생했습니다.");
  }
};
