import { WeatherStep1Form, WeatherStep1 } from "../Step1";
import { WeatherStep2 } from "../Step2";
import { CurrentWeather } from "@/apis/services/weather/types";
export type WeatherForms = WeatherStep1Form & CurrentWeather;
export type { WeatherStep1Form, CurrentWeather };

export interface WeatherStepProps<T> {
  options?: T;
  onNext?: (value: T) => void;
  inputSet: React.Dispatch<React.SetStateAction<WeatherStep1Form | undefined>>;
  SaveFirstFlowOnClick: () => void;
}

export const WeatherForm = Object.assign(
  {},
  { Step1: WeatherStep1, Step2: WeatherStep2 }
);
