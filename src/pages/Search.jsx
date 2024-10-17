import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { customAxios } from "../api/axios";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useEffect } from "react";

const fetchSearch = async (search, pageParam) => {
  const response = await customAxios.get(
    `/search/photos?query=${search}&page=${pageParam}`
  );
  return response.data;
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [ref, inView] = useInView();

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
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
  console.log(data);
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      {data?.pages?.map((item) => {
        return <img key={item.urls.regular} src={item.urls.regular} />;
      })}
      <Div ref={ref}></Div>
    </div>
  );
};

export default Search;

const Div = styled.div`
  height: 30px;
`;
