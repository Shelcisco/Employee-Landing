
import React from "react";
import BsPic1 from './BsPic1.png';
import FAQpic from './FAQpic.png';
import { Link } from "react-router-dom";

export default function Fav({ handleLinkClick }) {
  return (
    <div className="fav">
      <div className="plac">
      </div>
     
      <div className="card">
        <Link to="/WA#Bs" onClick={() => handleLinkClick("Bs")}>
          <img src={BsPic1} width={250} height={200} alt="BsFav" />
        </Link>
        <div className="container">
        <Link to="/WA#Bs" onClick={() => handleLinkClick("Bs")}><h4>Succesful Salesperson SOP</h4></Link>
        </div>
      </div>

      <div className="card">
        <Link to="/WA#Faq" onClick={() => handleLinkClick("Faq")}>
          <img src={FAQpic} width={250} height={200} alt="BsFav" />
        </Link>
        <div className="container">
        <Link to="/WA#Faq" onClick={() => handleLinkClick("Faq")}><h4>Frequently Asked Questions</h4></Link>
        </div>
      </div>
    </div>
  );
}