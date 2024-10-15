import { useQuery } from "@tanstack/react-query";
import { customAxios } from "../api/axios";
import { useSearchParams } from "react-router-dom";

const fetchSearch = async (search) => {
  const response = await customAxios.get(`/search/photos?query=${search}`);
  return response.data;
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery({
    queryKey: [`search`, searchParams.get("q")],
    queryFn: () => fetchSearch(searchParams.get("q")),
  });

  return (
    <div>
      {data?.results?.map((item) => {
        return <img key={item.urls.regular} src={item.urls.regular} />;
      })}
    </div>
  );
};

export default Search;
