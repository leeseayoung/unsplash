import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useEffect } from "react";
import useInfiniteSearchPhotos from "../hooks/useInfiniteSearchPhotos";
import Button from "../components/Button";

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
              <ButtonOverlay>
                <Button />
              </ButtonOverlay>
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

const ButtonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover ${ButtonOverlay} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoadingTrigger = styled.div`
  height: 30px;
  width: 100%;
`;

export default Search;
