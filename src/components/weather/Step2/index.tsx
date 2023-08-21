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
import { InformationTypes, weatherIconMapping } from "@/constants/weather";
import { WeatherIconMappingTypes } from "../../../constants/weather";
import { faTShirt, faUser, faWind } from "@fortawesome/free-solid-svg-icons";

export type WeatherStep2Props = {
  area: keyof areaKrTypes;
};

export const WeatherStep2: React.FC<WeatherStep2Props> = ({ area }) => {
  const nowCountry = area;
  const { data } = useGetCurrentWeather(
    areaKr[nowCountry],
    import.meta.env.VITE_APP_API_KEY
  );
  const Information: InformationTypes[] = [
    {
      icon: faUser,
      name: "체감온도",
      s: `${ConvertTemperature(data?.main.feels_like)}°`,
    },
    {
      icon: faWind,
      name: "바람",
      s: `${data?.wind.speed}m/s`,
    },
    {
      icon: faTShirt,
      name: "코디",
      s: "오늘의 코디",
    },
  ];

  const CurrentTemp = `${ConvertTemperature(data?.main.temp)}°`;
  const WeatherIcon = data ? weatherIconMapping[data.weather[0].icon] : faUser;
  const TranslateArea = data ? areaEng[data.name] : "";
  const WeatherInformation: React.FC = () => {
    return Information.map((detail) => (
      <S.InformationWrapper>
        <FontAwesomeIcon icon={detail.icon} size="xl" />
        <S.InformationName>{detail.name}</S.InformationName>
        <S.DetailInformation>{detail.s}</S.DetailInformation>
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
        <S.InformationContainer>
          <WeatherInformation />
        </S.InformationContainer>
      </S.StepTwoContainer>
    </Suspense>
  );
};
