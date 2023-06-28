import React from "react";
import { cardList } from "../../utils/constants";
// import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
// import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Navigation />
      <SearchForm />
      {/*<Preloader />*/}
      <MoviesCardList cardList={cardList} typeCardBtn={{ save: true }} />
      <Footer />
    </>
  );
}

export default Movies;
