import { AreaEngTypes } from "@/constants/areaNames";
import { WeatherIconMappingTypes } from "@/constants/weather";

export type CurrentWeather = {
  base: string;
  could: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: keyof AreaEngTypes;
  weather: [
    {
      description: string;
      icon: keyof WeatherIconMappingTypes;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
};
