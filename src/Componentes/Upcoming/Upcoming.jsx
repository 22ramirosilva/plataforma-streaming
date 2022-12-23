import { React, useState, useEffect } from "react";

import { getUpcoming } from "../../Api/Movies";
import CardBackdrop from "../CardPath/CardBackdrop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcoming()
      .then((response) => {
        setMovies(response.results);
        console.log(response);
      })
      .catch();
  }, []);

  const showMovies = () => {
    return movies.map((movie) => <CardBackdrop key={movie.id} movie={movie} />);
  };

  return (
    <>
      <section className="popular">
        <h2 className="popular genreTitle">Upcoming</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          slidesToSlide={3}
          draggable={false}
        >
          {showMovies()}
        </Carousel>
      </section>
    </>
  );
};

export default Upcoming;
