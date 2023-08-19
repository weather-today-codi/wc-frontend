import React from "react";

import * as S from "../styles/styled";

import { useForm } from "react-hook-form";
import { WeatherStepProps } from "../WeatherStepForm/index";
import { Button } from "@/components/common/Button";

export type WeatherStep1Form = {
  area: any;
};

export const WeatherStep1: React.FC<WeatherStepProps<WeatherStep1Form>> = ({
  options,
  onNext,
  inputSet,
  SaveFirstFlowOnClick,
}) => {
  const { handleSubmit, register } = useForm<WeatherStep1Form>({
    defaultValues: options,
  });

  return (
    <S.WeatherForm onSubmit={handleSubmit((options) => onNext?.(options))}>
      <S.StepOneInput
        placeholder="지역을 입력해주세요."
        {...register("area")}
        defaultValue={options?.area}
      />
      <Button
        onClick={() => {
          inputSet(options?.area);
          SaveFirstFlowOnClick();
        }}
        type="submit"
      >
        다음
      </Button>
    </S.WeatherForm>
  );
};
