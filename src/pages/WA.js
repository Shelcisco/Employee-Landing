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

  const handleLinkClick = (option) => {
    if (option === "Bs") {
      // Do something related to the Bs option
      // For example:
      toggleSidebar("Bs");
    } else if (option === "Faq") {
      // Do something related to the Faq option
      // For example:
      toggleSidebar("faq");
    }
    // Add more conditions as needed
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
        <Link to="/Fav" className={page === "fav" ? "active" : ""}>
          Favorites
        </Link>
      </div>


      <div className="sidebar">
        {activeOption === "sales" && (
          <div className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => toggleSidebar("sales")}>
              &times; Close
            </a>
          
            <Link to="/Faq" className={page === "faq" ? "active" : ""}>
          Frequently Asked
        </Link>
        <Link to="/Bs" className={page === "bs" ? "active" : ""}>
        Succesful Sales SOP
        </Link>
       
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
