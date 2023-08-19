import React, { Suspense, useEffect } from "react";

import * as S from "../styles/styled";

import { useGetCurrentWeather } from "@/hooks/queries/weather/useGetCurrentWeather";
import { SuspenseFallback } from "@/components/common/SuspenseFallback";
import { ConvertTemperature } from "@/utils/ConvertTemperature";
import { areaKr, areaEng } from "@/constants/areaNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Information, weatherIconMapping } from "@/constants/weather";
import { recommend } from "@/constants/recommendWord";

export type WeatherStep2Props = {
  area: string;
};

export const WeatherStep2: React.FC<WeatherStep2Props> = ({ area }) => {
  const nowCountry = area;
  const { data } = useGetCurrentWeather(
    areaKr[nowCountry],
    import.meta.env.VITE_APP_API_KEY
  );
  const CurrentTemp = `${ConvertTemperature(data?.main.temp)}°`;
  const WeatherIcon = weatherIconMapping[data?.weather[0].icon];
  const test = [data?.main.temp, data?.wind, "오늘의 코디"];
  const WeatherInformation: React.FC = () => {
    return Information.map((data, index) => (
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
          <S.StepTwoTempArea>{areaEng[data?.name]}</S.StepTwoTempArea>
          {/* <S.WeatherIcon
          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        /> */}
          <S.WeatherIconContainer>
            <FontAwesomeIcon icon={WeatherIcon} size="6x" />
          </S.WeatherIconContainer>
          <S.TempNumber>{CurrentTemp}</S.TempNumber>
        </S.TempInformation>
      </S.StepTwoContainer>
    </Suspense>
  );
};
