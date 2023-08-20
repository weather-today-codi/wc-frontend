import React, { Suspense, useEffect } from "react";

import * as S from "../styles/styled";

import { useGetCurrentWeather } from "@/hooks/queries/weather/useGetCurrentWeather";
import { SuspenseFallback } from "@/components/common/SuspenseFallback";
import { ConvertTemperature } from "@/utils/ConvertTemperature";
import {
  areaKr,
  areaEng,
  areaKrTypes,
  AreaEngTypes,
} from "@/constants/areaNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Information, weatherIconMapping } from "@/constants/weather";
import { WeatherIconMappingTypes } from "../../../constants/weather";

export type WeatherStep2Props = {
  area: keyof areaKrTypes;
};

export const WeatherStep2: React.FC<WeatherStep2Props> = ({ area }) => {
  const nowCountry = area;
  const { data } = useGetCurrentWeather(
    areaKr[nowCountry],
    import.meta.env.VITE_APP_API_KEY
  );
  const CurrentTemp = `${ConvertTemperature(data?.main.temp)}°`;
  const WeatherIcon = data ? weatherIconMapping[data.weather[0].icon] : null;
  const TranslateArea = data ? areaEng[data.name] : null;
  const test = [data?.main.temp, data?.wind, "오늘의 코디"];
  const WeatherInformation: React.FC = () => {
    return Information.map((data) => (
      <S.InformationWrapper>
        <FontAwesomeIcon icon={data.icon} />
        <S.InformationName>{data.name}</S.InformationName>
      </S.InformationWrapper>
    ));
  };

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <S.StepTwoContainer>
        <S.StepTwoUsersArea>{area}</S.StepTwoUsersArea>
        <S.TempInformation>
          <S.StepTwoTempArea>{TranslateArea}</S.StepTwoTempArea>
          <S.WeatherIconContainer>
            <FontAwesomeIcon icon={WeatherIcon} size="6x" />
          </S.WeatherIconContainer>
          <S.TempNumber>{CurrentTemp}</S.TempNumber>
        </S.TempInformation>
      </S.StepTwoContainer>
    </Suspense>
  );
};
