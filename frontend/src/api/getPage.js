import { GET } from "./fetch";

export const getPage = async (pageId) => {
  const json = await GET("page/get/" + pageId);
  return json.data[0].pages;
};
