import React, { useState } from "react";
import { Link } from "react-router-dom";
import Faq from "./Faq"; // Import the Faq component

export default function Navbar({ page, setPage }) {
  // State to keep track of the currently open sidebar option
  const [activeOption, setActiveOption] = useState(null);
  const [showFaq, setShowFaq] = useState(false); // State to control the FAQ page display

  // Function to toggle the sidebar menu for a specific option
  const toggleSidebar = (option) => {
    if (activeOption === option) {
      // If the same option is clicked again, close the sidebar
      setActiveOption(null);
      // Also, hide the FAQ page
      setShowFaq(false);
    } else {
      // Otherwise, open the new option and close the previous one
      setActiveOption(option);

      // Check if the option is "Frequently Asked"
      if (option === "faq") {
        // Show the FAQ page
        setShowFaq(true);
      } else {
        // Hide the FAQ page for other options
        setShowFaq(false);
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
          href="#sales"
          onClick={() => toggleSidebar("sales")}
          className={activeOption === "sales" ? "active" : ""}
        >
          Sales
        </a>
        <a
          href="#cs"
          onClick={() => toggleSidebar("cs")}
          className={activeOption === "cs" ? "active" : ""}
        >
          Customer Service
        </a>
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
            <a href="#">Sales Option 1</a>
            <a href="#">Sales Option 2</a>
            {/* Add more Sales options here */}
            
          </div>
        )}
{activeOption === "cs" && (
          <div className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => toggleSidebar("cs")}>
              &times; Close
            </a>
            <a href="#">Customer Service Option 1</a>
            <a href="#">Customer Service Option 2</a>
            {/* Add more Customer Service options here */}
          </div>
        )}
      </div>
      <div className="main">
        {showFaq ? <Faq /> : null} {/* Conditionally render the FAQ component */}
      </div>
    </div>
  );
}
