import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import approved from "../../components/images/approved.png"
import { NavLink } from 'react-router-dom';
import { sliderData } from "../slider/sliderdata";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
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
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="sliderLeft">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="Slideshow image" className="image" />
                </div>
              )}
            </div>
          );
        })}
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      </div>
      <div className="sliderRight">
        <div className='textHeader'>
          <img className='approvedLogo' src={approved} alt=""></img>
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