
import React, { useState } from 'react';
import '../styles/Home.css';



const Home: React.FC = () => {
  const [navDropdownVisible, setNavDropdownVisible] = useState(false);
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">ShinaLab <span className="arrow">➔</span></div>
        <ul className="nav-links">
          <li
            className="nav-item active"
            onMouseEnter={() => setNavDropdownVisible(true)}
            onMouseLeave={() => setNavDropdownVisible(false)}
          >
            <span>Home</span>
            {navDropdownVisible && (
              <ul className="dropdown-menu">
                <li>Honeymoon Packages</li>
                <li>Tours Packages</li>
                <li>Food</li>
                <li>Build Package</li>
              </ul>
            )}
          </li>
          <li className="nav-item">Services</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Upcoming Packages</li>
          <li className="nav-item">Destination</li>
          <li className="nav-item">Food</li>
        </ul>
        <button className="contact-btn">Contact us</button>
      </nav>
      <header className="header" >
        <div className="header-content">
          <h1>No matter where you’re going to, we’ll take you there</h1>
          <form className="search-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Where to?" />
            <div className="divider"></div>
            <select defaultValue="Travel Type">
              <option disabled>Travel Type</option>
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>Family</option>
              <option>Solo</option>
            </select>
            <div className="divider"></div>
            <input type="text" placeholder="Duration" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="scroll-down-arrow">⌄</div>
      </header>
    </div>
  );
};
export default Home;
