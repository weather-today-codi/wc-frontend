import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faBolt,
  faSnowflake,
  faSmog,
  faUser,
  faWind,
  faTShirt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type WeatherIconMappingTypes = {
  "01d": IconDefinition;
  "01n": IconDefinition;
  "02d": IconDefinition;
  "02n": IconDefinition;
  "03d": IconDefinition;
  "03n": IconDefinition;
  "04d": IconDefinition;
  "04n": IconDefinition;
  "09d": IconDefinition;
  "09n": IconDefinition;
  "10d": IconDefinition;
  "10n": IconDefinition;
  "11d": IconDefinition;
  "11n": IconDefinition;
  "13d": IconDefinition;
  "13n": IconDefinition;
  "50d": IconDefinition;
  "50n": IconDefinition;
};

export const weatherIconMapping = {
  "01d": faSun, // clear sky (day)
  "01n": faMoon, // clear sky (night)
  "02d": faCloudSun, // few clouds (day)
  "02n": faCloudMoon, // few clouds (night)
  "03d": faCloud, // scattered clouds
  "03n": faCloud, // scattered clouds
  "04d": faCloud, // broken clouds
  "04n": faCloud, // broken clouds
  "09d": faCloudShowersHeavy, // shower rain
  "09n": faCloudShowersHeavy, // shower rain
  "10d": faCloudSunRain, // rain (day)
  "10n": faCloudMoonRain, // rain (night)
  "11d": faBolt, // thunderstorm
  "11n": faBolt, // thunderstorm
  "13d": faSnowflake, // snow
  "13n": faSnowflake, // snow
  "50d": faSmog, // mist
  "50n": faSmog, // mist
};

export type InformationTypes = {
  icon: IconDefinition;
  name: string;
  s: string;
};
