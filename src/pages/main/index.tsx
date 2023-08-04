import * as S from "./styled";
import { Title } from "../../components/Main/Title";
import { TitleDescription } from "../../components/Main/TitleDescription";
import { card } from "../../constants/card";
import { CardButton } from "../../components/Main/CardButton";

import { useCookies } from "react-cookie";

import { useGetCurrentWeather } from "../../hooks/queries/weather/useGetCurrentWeather";
import { AppLayout } from "../../components/layouts/AppLayout";
import { SuspenseFallback } from "../../components/common/SuspenseFallback/index";

const MainPage = () => {
  const [_cookies, setCookie] = useCookies();
  const StartFlowSetCookieOnClick = () => {
    setCookie("flow", "start");
  };
  const { data, isLoading } = useGetCurrentWeather(
    "Seoul",
    import.meta.env.VITE_APP_API_KEY
  );
  console.log(data);
  return (
    <AppLayout>
      {isLoading ? (
        <SuspenseFallback />
      ) : (
        <S.MainSection>
          <Title>안녕하세요.</Title>
          <TitleDescription>
            처음이시라면
            <br /> 오늘의 날씨로 시작해봐요
          </TitleDescription>
          <S.UnorderList>
            {card.map((item, index) => (
              <CardButton
                key={index}
                startFlowOnClick={StartFlowSetCookieOnClick}
                ImageSource={item.ImageSource}
                text={item.text}
              />
            ))}
          </S.UnorderList>
        </S.MainSection>
      )}
    </AppLayout>
  );
};

export default MainPage;
