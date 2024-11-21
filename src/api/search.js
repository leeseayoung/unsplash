import { customAxios } from "./axios";

export const fetchSearch = async (search, pageParam) => {
  const response = await customAxios.get(
    `/search/photos?query=${search}&page=${pageParam}`
  );
  return response.data;
};
