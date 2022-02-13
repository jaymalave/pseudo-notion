import { GET } from "./fetch";

export const getAllPages = async () => {
  const data = GET("page/get").then((res) => res);
  return data;
};
