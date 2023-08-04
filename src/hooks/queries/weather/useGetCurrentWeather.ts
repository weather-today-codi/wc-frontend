import { useQuery } from "@tanstack/react-query";

import { getCurrentWeather } from "../../../apis";

export const useGetCurrentWeather = (city: string, apiKey?: string) => {
  return useQuery({
    queryKey: ["weather"],
    queryFn: () => getCurrentWeather(city, apiKey),
  });
};
