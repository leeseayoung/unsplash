import { useQuery } from "@tanstack/react-query";
import { customAxios } from "../api/axios";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const fetchSearch = async (search) => {
  const response = await customAxios.get(`/search/photos?query=${search}`);
  return response.data;
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data } = useQuery({
    queryKey: [`search`, query],
    queryFn: () => fetchSearch(query),
  });

  const [ref, inView] = useInView();
  console.log(inView);
  return (
    <div>
      {data?.results?.map((item) => {
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
