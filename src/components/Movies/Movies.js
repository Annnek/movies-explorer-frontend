import React from "react";
import { cardList } from "../../utils/constants";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
// import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      {/*<Preloader />*/}
      <MoviesCardList cardList={cardList} typeCardBtn={{ save: true }} />
      <Footer />
    </>
  );
}

export default Movies;
