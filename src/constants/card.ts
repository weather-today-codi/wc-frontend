import { CardProps } from "../components/Main/Card/index";

import SUNIcon from "../assets/sun.png";
import ClothesIcon from "../assets/clothes.png";
import GoodIcon from "../assets/good.png";

export const card: CardProps[] = [
  {
    ImageSource: SUNIcon,
    text: "오늘의 날씨",
  },
  {
    ImageSource: ClothesIcon,
    text: "오늘의 코디",
  },
  {
    ImageSource: GoodIcon,
    text: "추천 코디",
  },
];
