import { React } from "react";
import "./Home.css";
import Logo from "../../Imagenes/logo.svg";
import HomeLogo from "../../Imagenes/home.svg";
import Movie from "../../Imagenes/movie.svg";
import Drama from "../../Imagenes/drama.svg";
import MusicVideo from "../../Imagenes/music-video.svg";
import LiveShow from "../../Imagenes/live-show.svg";
import Comedies from "../../Imagenes/comedies.svg";
import Lupa from "../../Imagenes/lupa.svg";
import HeaderOut from "../HeaderOut/HeaderOut";

import Popular from "../Popular/Popular";
import TopRated from "../TopRated/TopRated";
import Upcoming from "../Upcoming/Upcoming";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="container-home">
      <header>
        <div className="overly">
          <nav>
            <img className="logo" src={Logo} alt="Logo" />

            <ul className="menu-list">
              <li>
                <img src={HomeLogo} alt="Home Logo" />
                <p>Home</p>
              </li>
              <li>
                <img src={Movie} alt="Movie Logo" />
                <p>Movie</p>
              </li>
              <li>
                <img src={Drama} alt="Drama Logo" />
                Drama
              </li>
              <li>
                <img src={MusicVideo} alt="Music Video Logo" />
                Music Video
              </li>
              <li>
                <img src={LiveShow} alt="Live Show Logo" />
                Live Show
              </li>
              <li>
                <img src={Comedies} alt="Comedies Logo" />
                Comedies
              </li>
            </ul>

            <div className="lupa-btn">
              <img src={Lupa} alt="" />
              <button className="sign-in-btn">Sign In</button>
            </div>
          </nav>

          <HeaderOut />
        </div>
      </header>

      <section className="categories">
        <Popular />

        <TopRated />

        <Upcoming />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
