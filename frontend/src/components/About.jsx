import React from 'react'
import {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <>
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're seerious about is food.</p>
                </div>
                <p className="mid">
                    At HAPPY BITES, we blend passion with fresh,
                     quality ingredients to create unforgettable dining experiences. 
                     Our dishes are crafted with care, honoring tradition while embracing creativity. 
                     Whether it's a quick bite or a leisurely meal, we're dedicated to flavor, warmth,
                      and making every visit special. Welcome—where good food and heartfelt hospitality meet.
                </p>
                <Link to={"&"}>
                Explore Menu
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
    </div>
    </section>
    </>
  );
};

export default About;