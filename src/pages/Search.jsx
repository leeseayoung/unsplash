import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useEffect } from "react";
import useInfiniteSearchPhotos from "../hooks/useInfiniteSearchPhotos";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [ref, inView] = useInView();

  const { data, fetchNextPage } = useInfiniteSearchPhotos(query);

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
      <Div ref={ref} />
    </div>
  );
};

export default Search;

const Div = styled.div`
  height: 30px;
`;
