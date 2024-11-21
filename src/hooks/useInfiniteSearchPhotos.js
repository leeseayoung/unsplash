import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSearch } from "../api/search";

const useInfiniteSearchPhotos = (query) => {
  return useInfiniteQuery({
    queryKey: ["infiniteSearch", query],
    queryFn: ({ pageParam = 1 }) => {
      return fetchSearch(query, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const lastPageNumber = lastPage.total_pages;
      const currentPageNumber = pages.length + 1;

      if (lastPageNumber > currentPageNumber) {
        return pages.length + 1;
      }
      return undefined;
    },

    select: (data) => {
      return {
        pages: data?.pages.flatMap((page) => page.results),
        pageParams: data.pageParams,
      };
    },
  });
};

export default useInfiniteSearchPhotos;
