import React from "react";
import "../styles/offerservice.css";
import guidedImg from "../assets/guided.jpg";
import travellingImg from "../assets/travelling.png";
import foodImg from "../assets/food.jpg";
import medicalImg from "../assets/medical.jpg";


const OfferService: React.FC = () => {
  return (
    <div className="offerservice">
      <h1> We Offer Best Services</h1>
      <div className="service-grid">

        <div className="service-cards">
          <img src={guidedImg} alt="Guided Tours" />
          <h2>Guided Tours</h2>
          <p>Explore new destinations with our expert guides who provide insights and local knowledge to enhance your travel experience.</p>
        </div>

        <div className="service-cards">
            <img src={travellingImg} alt="Best Flights Options" />
          <h2>Best Flights Options</h2>
          <p>Find the best flight options tailored to your preferences, ensuring a smooth and enjoyable journey.</p>
      </div>
        <div className="service-cards">
            <img src={foodImg} alt="Foods" />
          <h2>Foods</h2>
          <p>Indulge in a variety of culinary delights with our curated food experiences, showcasing local flavors and dishes.</p>
      </div>
        <div className="service-cards">
            <img src={medicalImg} alt="Medical Emergency" />
          <h2>Medical Emergency</h2>
          <p>Receive immediate assistance and support during medical emergencies, ensuring your safety and well-being while traveling.</p>
      </div>
    </div>
    </div>
  );
};

export default OfferService;
