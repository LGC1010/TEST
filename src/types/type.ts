import { AxiosRequestConfig } from 'axios';
import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type token = AxiosRequestConfig<any> | undefined;

export type User = { id: string; password: string; nickname: string };

export type LoginUser = Omit<User, 'nickname'>;

type UserData = {
  headers: {
    Authorization: string;
    'Content-Type': string;
  };
};
export type Profile = {
  formData: FormData;
  userData: UserData;
};

export type UserInfo = {
  id: string;
  nickname: string;
};

export type RouteProps = {
  element: React.ElementType;
  [key: string]: unknown;
};

export type QueryProviderProps = {
  children: ReactNode;
};
