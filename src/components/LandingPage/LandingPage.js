import React from 'react';
import './LandingPage.css';
import Image_1 from './images/Image_1.png';
import Image_2 from './images/Image_2.png';

const LandingPage = () => {
  return (
    <div>
        <div className="Section_1_Box_1" style={{ backgroundImage: `url(${Image_2})` }}>
          <div className="Section_1_Inner_Box_1" style={{ backgroundImage: `url(${Image_1})` }}>
            <div className="Section_1_Inner_Heading_1">Welcome to RUFFERAL!!</div>
            <div className="Section_1_Inner_Heading_2">What service would you like to use?</div>
            <button className="Section_1_Inner_Button_1">Task Widget</button>
            <br />
            <button className="Section_1_Inner_Button_2">
              Smart-Coupon <br /> (coming soon)
            </button>
          </div>
        </div>
  </div>
  );
};

export default LandingPage;