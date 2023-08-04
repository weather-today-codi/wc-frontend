import { UseQueryOptions } from "@tanstack/react-query";

import { AxiosError, AxiosResponse } from "axios";

export type UseQueryCustomOptions<
  TData,
  TError = AxiosError<AxiosResponse>
> = Omit<UseQueryOptions<TData, TError, TData>, "initialData">;
