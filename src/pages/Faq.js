import React from "react";
import Navbar from "./Nav";
import { useFavorites } from "./FavoritesContext";

export default function Faq() {
  const { addToFavorites } = useFavorites();

  return (
    <div className="faq-page">
      <Navbar/>

      <button className="FavButt" alt="Faq-Butt" onClick={() => addToFavorites("Faq")}>
        Add to Favorites
      </button>
      <br></br>

        <div id="faq-head">
      <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-question">
        <h2>Question 1</h2>
        <p>Answer to Question 1</p>
        <p>For additional help, reach out to Customer Service and District Manager blank</p>
           <p><a href="mailto:shel.cisco5@gmail.com;shelbyfrancisco@hotmail.com">Email</a>, Phone <a href="tel:206-554-9213">206-554-9213</a></p> 
      </div>
      <hr></hr>
      <div className="faq-question">
        <h2>Question 2</h2>
        <p>Answer to Question </p>
      </div>
      <hr></hr>
      <div className="faq-question">
        <h2>Question 3</h2>
        <p>Answer to Question </p>
      </div>
      <hr></hr>
      <div className="faq-question">
        <h2>Question 4</h2>
        <p>Answer to Question </p>
      </div>
    </div>
  );
}

