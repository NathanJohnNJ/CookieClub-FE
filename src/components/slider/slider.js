import { useState, useEffect } from "react";
import approved from "../../components/images/approved.png"
import { NavLink } from 'react-router-dom';
import { sliderData } from "../slider/sliderdata";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
      auto();
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line 
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="sliderLeft">
        {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="Slideshow" className="image" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="sliderRight">
        <div className='textHeader'>
          <img className='approvedLogo' src={approved} alt="Approved"></img>
          <p className='textHeader1'> The Best Cookie Recipes To Bake Year-Round!</p>
          <br /><br />
          <p className='textHeader2'> There's a cookie here for everyone.</p>
          <NavLink className='btnHeader'  to="/recipes">RECIPES</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Slider;