import React, { useState } from "react";
import WALogo from './WAnew.png';
import HILogo from './HInew.png';
import AKLogo from './AKnew.png';
import { Link } from "react-router-dom"; // Import the Link component


export default function Landing({ page, setPage }) {
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="landing">
      <div class="nav justify-content-end"></div>

      <div className="top-right">
        <select
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option disabled value="Select an option">
            Quick Links
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="image-container">
        {/* Use the Link component to navigate to "/wa" */}
        <Link to="/wa">
          <img src={WALogo} width={250} height={250} alt="WALog"></img>
        </Link>
        <a href="https://github.com/Shelcisco" target="_blank" rel="noreferrer">
          <img src={HILogo} width={300} height={200} alt="HILog"></img>
        </a>
        <a href="https://github.com/Shelcisco" target="_blank" rel="noreferrer">
          <img src={AKLogo} width={350} height={350} alt="AKLog"></img>
        </a>
      </div>
    </div>
  );
}

