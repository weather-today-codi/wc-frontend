import React, { useEffect, useState } from "react";
import { AppLayout } from "@/components/layouts/AppLayout";
import {
  WeatherForm,
  WeatherStep1Form,
} from "@/components/weather/WeatherStepForm";

const SaveFirstFlowOnClick = () => {
  if (!localStorage.getItem("flow")) {
    return localStorage.setItem("flow", "start");
  } else 0;
};

const WeatherPage = () => {
  const [step, setStep] = useState<"step1" | "step2">("step1");
  const [step1Data, setStep1Data] = useState<WeatherStep1Form | undefined>(
    undefined
  );

  const handleNextStep = (step1: WeatherStep1Form) => {
    setStep1Data(step1);
    setStep("step2");
  };
  const renderStep1 = () => (
    <WeatherForm.Step1
      options={step1Data}
      inputSet={(e) => setStep1Data(e)}
      onNext={handleNextStep}
      SaveFirstFlowOnClick={SaveFirstFlowOnClick}
    />
  );
  const renderStep2 = () => (
    <>
      <WeatherForm.Step2 area={step1Data?.area} />
    </>
  );

  return (
    <AppLayout>{step === "step1" ? renderStep1() : renderStep2()}</AppLayout>
  );
};

export default WeatherPage;
