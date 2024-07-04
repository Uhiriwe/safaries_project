import React from 'react';
import Button from 'react-bootstrap/Button';
import { FiArrowRight } from 'react-icons/fi';
import '../Home.css';

const Home = () => {
  const images = [
    require('../assets/pixel.jpg'),
    require('../assets/pixels.jpg'),
    require('../assets/pixel.jpg'),
    require('../assets/pixel.jpg'),
    require('../assets/pixel.jpg'),
    require('../assets/pixel.jpg'),
    require('../assets/pixel.jpg'),
    require('../assets/pixel.jpg'),
  ];

  return (
    <div className="home-container">
      <h1>Explore Our Locations</h1>
      <div className="locations">
        <label htmlFor="destination-dropdown">Destinations</label><br /><br />
        <select id="destination-dropdown" name="destination">
          <option value="option1">Option1</option>
          <option value="option2">Option2</option>
          <option value="option3">Option3</option>
        </select><br /><br />
        <label htmlFor="activities-dropdown">Activities</label><br /><br />
        <select id="activities-dropdown" name="activities">
          <option value="option1">Option1</option>
          <option value="option2">Option2</option>
          <option value="option3">Option3</option>
        </select>
        <Button variant="light" className="custom-btn">
          Search <FiArrowRight />
        </Button>
      </div>
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="photo-card">
            <img src={img} alt={`Gallery ${index}`} />
            <div className="photo-overlay">
              <div className="photo-text">Description or other content here</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
