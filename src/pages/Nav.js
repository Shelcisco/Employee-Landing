import React, { useState } from "react";
import { Link } from "react-router-dom";
import Faq from "./Faq"; // Import the Faq component
import Bs from "./Bs"; // Import the Best Sales component
import Fav from "./Favorite"; 

export default function Navbar({ page, setPage }) {
  // State to keep track of the currently open sidebar option
  const [activeOption, setActiveOption] = useState(null);
  const [showFaq, setShowFaq] = useState(false);
  const [showBs, setShowBs] = useState(false);
  const [showFav, setShowFav] = useState(false);

  // Function to toggle the sidebar menu for a specific option
  const toggleSidebar = (option) => {
    if (activeOption === option) {
      // If the same option is clicked again, close the sidebar
      setActiveOption(null);
      setShowFaq(false);
      setShowBs(false);
      setShowFav(false);
    } else {
      setActiveOption(option);

      if (option === "faq") {
        setShowFaq(true);
        setShowBs(false);
        setShowFav(false);
      } else if (option === "Bs") {
        setShowBs(true);
        setShowFaq(false);
        setShowFav(false);
      } else if (option === "Fav") {
        setShowFav(true);
        setShowFaq(false);
        setShowBs(false);
      } else {
        setShowFaq(false);
        setShowBs(false);
        setShowFav(false);
      }
    }
  };

  return (
    <div className="">
      <div className="topnav">
        <Link to="/home" className={page === "home" ? "active" : ""}>
          Home
        </Link>
        <a
          href="#delivery"
          onClick={() => toggleSidebar("delivery")}
          className={activeOption === "delivery" ? "active" : ""}
        >
          Delivery
        </a>
        <a
          href="#warehouse"
          onClick={() => toggleSidebar("warehouse")}
          className={activeOption === "warehouse" ? "active" : ""}
        >
          Warehouse
        </a>
        <a
          href="#cs"
          onClick={() => toggleSidebar("cs")}
          className={activeOption === "cs" ? "active" : ""}
        >
          Customer Service
        </a>
        <a
          href="#sales"
          onClick={() => toggleSidebar("sales")}
          className={activeOption === "sales" ? "active" : ""}
        >
          Sales
        </a>
 <a 
          href="#fav"
          onClick={() => toggleSidebar("Fav")}
          className={activeOption === "Fav" ? "active" : ""}
        >
          Favorites
        </a>
      </div>


      <div className="sidebar">
        {activeOption === "sales" && (
          <div className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => toggleSidebar("sales")}>
              &times; Close
            </a>
            <a
              href="#faq" // Change the href to "faq"
              onClick={() => toggleSidebar("faq")}
              className={activeOption === "faq" ? "active" : ""} // Add an active class for FAQ
            >
              Frequently Asked
            </a> {/* "Frequently Asked" link in the sidebar */}
            <a
              href="#Bs" // Change the href to "faq"
              onClick={() => toggleSidebar("Bs")}
              className={activeOption === "Bs" ? "active" : ""} // Add an active class for FAQ
            >
              Succesful Sales SOP
            </a>
            <a href="#">Sales Option 2</a>
            {/* Add more Sales options here */}
          </div>
        )}
        {activeOption === "cs" && (
          <div className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => toggleSidebar("cs")}>
              &times; Close
            </a>
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            {/* Add more Customer Service options here */}
          </div>
        )}
      </div>
     
    </div>
  );
}
