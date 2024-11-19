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
    <Container>
      <ImageGrid>
        {data?.pages?.map((item) => (
          <ImageColumn key={item.urls.regular}>
            <ImageWrapper>
              <Image src={item.urls.regular} alt={item.alt_description || ""} />
            </ImageWrapper>
          </ImageColumn>
        ))}
      </ImageGrid>
      <LoadingTrigger ref={ref} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;

const ImageColumn = styled.div`
  width: calc(33.3333% - 5.3333px);
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
  overflow: hidden; // 이미지가 컨테이너를 벗어나지 않도록
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지 비율 유지하면서 컨테이너 채우기
`;

const LoadingTrigger = styled.div`
  height: 30px;
  width: 100%;
`;

export default Search;
