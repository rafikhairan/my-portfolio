import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { SetStateAction } from "react";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const fetchData = async <T>(
  url: string,
  mapper: (result: any) => T,
  setData: React.Dispatch<SetStateAction<T>>,
  setIsFetching: React.Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  try {
    const response = await fetch(url);
    const { result } = await response.json();
    const data = mapper(result);

    setData(data);
    setIsFetching(false);
  } catch (err) {
    console.error(err);
  }
};
