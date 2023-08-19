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

type InformationTypes = {
  icon: IconDefinition;
  name: string;
};

export const Information: InformationTypes[] = [
  {
    icon: faUser,
    name: "체감온도",
  },
  {
    icon: faWind,
    name: "바람",
  },
  {
    icon: faTShirt,
    name: "코디",
  },
];