"use client"
import './Body.scss'
import { useEffect } from 'react';

export default function Body() {

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/scrollreveal';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      ScrollReveal().reveal(".image img", {
        ...scrollRevealOption,
        origin: "right",
      });
      ScrollReveal().reveal(".content h1", {
        ...scrollRevealOption,
        delay: 500,
      });
      ScrollReveal().reveal(".content p", {
        ...scrollRevealOption,
        delay: 1000,
      });
      ScrollReveal().reveal(".content form", {
        ...scrollRevealOption,
        delay: 1500,
      });
    }

  })


  return (
    <div className="container">
      <div className="image">
        <img src="https://i.imgur.com/g3V5WGk.png" alt="Header" />
      </div>
      <div className="content">
        <h1>Single Platform For All Your <span>Learning</span> Needs.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nunc cursus sapien aenean, cursus elit cursus nulla.
        </p>
        <form action="/">
          <div className="input__row">
            <div className="input__group">
              <span><i className="ri-search-line"></i></span>
              <input type="text" placeholder="Search for Course" />
            </div>
            <div className="input__group">
              <span><i className="ri-arrow-down-s-line"></i></span>
              <input type="text" placeholder="Categories" />
            </div>
          </div>
          <button type="submit">Search Now</button>
        </form>
      </div>
    </div>
  );
}