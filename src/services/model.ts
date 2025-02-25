import {
  InfiniteData,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface IBasicResponse<T> {
  data: T;
  status: number;
  status_check: boolean;
}

export type IBasicResponseError = AxiosError<{
  error?: string;
}>;

export type IQueryOptions<T> = Omit<
  UseQueryOptions<T, IBasicResponseError>,
  'queryKey' | 'queryFn'
>;
export type IMutationOptions<T, D = void> = Omit<
  UseMutationOptions<T, IBasicResponseError, D>,
  'mutationKey' | 'mutationFn'
>;
export type IInfiniteQueryOptions<T> = Omit<
  UseInfiniteQueryOptions<T, IBasicResponseError, InfiniteData<T>>,
  'queryKey' | 'queryFn' | 'getPreviousPageParam' | 'getNextPageParam' | 'initialPageParam'
>;

export interface ContactUsRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}
