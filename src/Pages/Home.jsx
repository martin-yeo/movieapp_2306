import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { movies } from "../../movie_data";
import { useEffect, useState } from "react";
import { config } from "../constant";

function Home() {
  const [popularMovies, setPopularMovices ] = useState([])


  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=" + 
      config.API_KEY
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setPopularMovices(data.results)
    })

  }, [])

  return (
    <Container>
      <MoviePoster>
        <Carousel
          showThumbs
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={3}
        >
          {popularMovies.map((movie) => (
            <ul key={movie.id}>
              <ImgBox>
                <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="" height="50%"/>
              </ImgBox>
              <li>{movie.title}</li>
            </ul>
          ))}
        </Carousel>
      </MoviePoster>
    </Container>
  );
}

const Container = styled.div``;
const MoviePoster = styled.div`
  display: flex;
  align-items: center;
`;

const ImgBox = styled.div`
  height: calc()
`;

export default Home;
