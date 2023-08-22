import * as S from "./styled";
import { Title } from "../../components/main/Title";
import { TitleDescription } from "../../components/main/TitleDescription";
import { card } from "@/constants/card";
import { CardButton } from "@/components/Main/CardButton";
import { AppLayout } from "@/components/layouts/AppLayout";

const MainPage = () => {
  return (
    <AppLayout>
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
              ImageSource={item.ImageSource}
              text={item.text}
              path={item.path}
            />
          ))}
        </S.UnorderList>
      </S.MainSection>
    </AppLayout>
  );
};

export default MainPage;
