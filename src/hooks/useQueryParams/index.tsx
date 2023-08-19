import { useMemo } from "react";

import { useLocation } from "react-router";

export const useQueryParams = <
  T extends Record<string, string> = Record<string, string>
>(): Partial<T> => {
  const location = useLocation();
  return useMemo(
    () => location.search as unknown as Partial<T>,
    [location.search]
  );
};
