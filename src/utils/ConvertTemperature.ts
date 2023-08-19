export const ConvertTemperature = (tempInKelvin: number | undefined) => {
  if (tempInKelvin) {
    const celsius = tempInKelvin - 273;
    return Math.round(celsius);
  } else return null;
};
