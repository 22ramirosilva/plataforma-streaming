import { React, useState, useEffect } from "react";
import "./Popular.css";
import { getPopular } from "../../Api/Movies";
import CardPoster from "../CardPoster/CardPoster";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 15,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopular()
      .then((response) => {
        setMovies(response.results);
        console.log(response);
      })
      .catch();
  }, []);

  const showMovies = () => {
    return movies.map((movie) => <CardPoster key={movie.id} movie={movie} />);
  };

  console.log(movies);

  return (
    <>
      <section className="popular">
        <h2 className="popular genreTitle">Most Popular</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          slidesToSlide={3}
          draggable={false}
          centerMode={true}
        >
          {showMovies()}
        </Carousel>
      </section>
    </>
  );
};

export default Popular;
