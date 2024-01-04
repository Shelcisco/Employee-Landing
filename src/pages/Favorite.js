import React from "react";
import BsPic1 from '../assets/BsPic1.png';
import FAQpic from '../assets/FAQpic.png';
import { Link } from "react-router-dom";
import Navbar from "./Nav";
import { useFavorites } from "./FavoritesContext"; // Import the context

export default function Fav() {
  const { isFavorite } = useFavorites();

  return (
    <div className="fav">
      <Navbar />

      {isFavorite("Bs") && (
        <div className="card" alt="bsCard">
          <Link to="/Bs">
            <img src={BsPic1} width={250} height={200} alt="BsFav" />
          </Link>
          <div className="container">
            <Link to="/Bs"><h4>Succesful Salesperson SOP</h4></Link>
          </div>
        </div>
      )}

      {isFavorite("Faq") && (
        <div className="card" alt="faqCard">
          <Link to="/Faq">
            <img src={FAQpic} width={250} height={200} alt="FaqFav" />
          </Link>
          <div className="container">
            <Link to="/Faq"><h4>Frequently Asked Questions</h4></Link>
          </div>
        </div>
      )}
    </div>
  );
}
