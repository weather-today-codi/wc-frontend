import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CardElement = styled(Link)`
  width: 11rem;
  height: 11rem;

  border: none;
  border-radius: 0.9rem;
  background-color: #fafafc;
  margin: auto;

  text-decoration: none;

  cursor: pointer;

  :active {
    transform: scale(0.98);
  }
  transition: transform 0.2s;
`;

export const CardInner = styled.div`
  padding: 0.9rem 0 0 0.5rem;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0.9rem 0 0 0.2rem;
  }
`;

export const CardImage = styled.img`
  width: 3rem;
  height: 3rem;

  margin-top: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: left;
  color: #505050;

  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
