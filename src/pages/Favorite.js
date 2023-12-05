import React from "react";
import BsPic1 from './BsPic1.png';

export default function Fav() {
  return (
    <div className="fav">
      <div className="plac">
        <p>"Hello World"</p>
      </div>
      <div className="card">
        <img src={BsPic1} width={200} height={200} alt="BsFav" />
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
          {/* Container for the button with specified width */}
        </div>
      </div>
    </div>
  );
}
