import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CCLogo2.png";
import Team from "../assets/Team.png";
import Faq from "./Faq"; // Import the Faq component
import Bs from "./Bs"; // Import the Best Sales component
import Fav from "./Favorite"; 
import Banner from "../assets/Banner.png";
import Event from "../assets/event.png";
import NewSystem from "../assets/newSystem.png";

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

  const announcements = [
    {
      text: "Cool Event!",
      image: Event,
    },
    {
      text: "New System Tool Coming Soon",
      image: NewSystem,
    },
    // Add more objects as needed
  ];

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const goToNextAnnouncement = () => {
    setCurrentAnnouncementIndex((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevAnnouncement = () => {
    setCurrentAnnouncementIndex((prevIndex) =>
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextAnnouncement, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  

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

      <div className="WaWelcome">
        <div className="Banner">
      
        <img src={Banner} alt="ban" width={900} height={500} ></img>
        
        </div>
<div className="Announce">
<p>Announcements</p>
<div className="slideshow-container">
        <div className="slideshow-box">
          <div className="slideshow">
            <div className="announcement">
              <p>{announcements[currentAnnouncementIndex].text}</p>
              <img
                src={announcements[currentAnnouncementIndex].image}
                alt="announcement_image"
              />
            </div>
          </div>
          <button className="arrow left" onClick={goToPrevAnnouncement}>
            &#10094;
          </button>
          <button className="arrow right" onClick={goToNextAnnouncement}>
            &#10095;
          </button>
        </div>
      

</div>

      </div>


      </div>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
   
    </div>
  );
}
