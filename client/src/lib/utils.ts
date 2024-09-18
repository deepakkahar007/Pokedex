import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

import axios from "axios";

export const fetchData = async (category?: string) => {
  let res;
  category === "all"
    ? (res = axios
        .get(`${import.meta.env.VITE_SERVER_URL}/pokemon`)
        .then((res) => res.data))
    : (res = axios
        .get(`${import.meta.env.VITE_SERVER_URL}/pokemon?type=${category}`)
        .then((res) => res.data));

  const data = await Wait(3000).then(() => res);
  return data;
};
