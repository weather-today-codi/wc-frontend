import * as S from "./styled";
import { Title } from "../../components/Main/Title";
import { TitleDescription } from "../../components/Main/TitleDescription";
import { card } from "../../constants/card";
import { Card } from "../../components/Main/Card";

const MainPage = () => {
  return (
    <S.MainSection>
      <Title>안녕하세요.</Title>
      <TitleDescription>
        처음이시라면
        <br /> 오늘의 날씨로 시작해봐요
      </TitleDescription>
      <S.UnorderList>
        {card.map((item, index) => (
          <Card key={index} ImageSource={item.ImageSource} text={item.text} />
        ))}
      </S.UnorderList>
    </S.MainSection>
  );
};

export default MainPage;
