import React from "react";
import "../styles/upcomingpackages.css";

const UpcomingPackages = () => {
  return (
    <section className="upcoming-package">
      <h2 className="heading">Upcoming Packages</h2>

      <div className="content">
        {/* main images */}
        <div className="images-section">
          <div className="main-image">
            <img
              src="../../src/assets/honeymoon.jpg"
              alt="Couple on beach"
            />
          </div>

          {/* Floating circles */}
          <div className="circle circle1">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="circle1"
            />
          </div>
          <div className="circle circle2">
            <img
              src="../../src/assets/honey2.jpg"
              alt="circle2"
            />
          </div>
          <div className="circle circle3">
            <img
              src="../../src/assets/honey1.jpg"
              alt="circle3"
            />
          </div>

          {/* right Text */}
          <span className="vertical-text">Honeymoon Packages</span>
        </div>

        {/* Right - Text paragraph */}
        <div className="text-section">
          <p className="subheading">HONEYMOON SPECIALS</p>
          <h3 className="title">Our Romantic Tropical Destinations</h3>
          <p className="description">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium. Non nisi eius quo eligendi corrupti et
            fuga nulla qui soluta recusandae in maxime quasi aut ducimus illum
            aut optio quibusdam!
          </p>
          <button className="btn">View Packages</button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingPackages;
