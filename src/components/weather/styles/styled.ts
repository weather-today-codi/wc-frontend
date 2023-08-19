import styled from "@emotion/styled";

export const StepOneInput = styled.input`
  font-size: 2.4rem;
  font-weight: 600;
  color: #3e3e3e;
  border: none;
  outline: none;
  ::placeholder {
    color: #898989;
  }
`;

export const StepTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepTwoUsersArea = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #505050;
`;

export const StepTwoTempArea = styled.p`
  font-size: 2.6rem;
  font-weight: 300;
  color: #505050;
`;

export const TempInformation = styled.section`
  margin-top: 2rem;
  text-align: center;
`;

export const TempNumber = styled.p`
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 0.1rem;

  margin-top: 4rem;
`;

export const WeatherIconContainer = styled.div`
  margin-top: 4rem;
`;

export const WeatherForm = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InformationName = styled.p`
  color: #7b7b7b;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const DetailInformation = styled.h3`
  color: #3e3e3e;
  font-size: 1.6rem;
  font-weight: 300;
`;
