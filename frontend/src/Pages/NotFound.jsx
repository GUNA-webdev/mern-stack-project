import React from 'react'
import{ Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const NotFound = () => {
  return (

    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>CONNECTION LOST</h1>
        <p>we can't find the page you need</p>
        <Link to={"/"}>
        Back To Home Page{""}
        <span>
          <HiOutlineArrowNarrowRight  />
        </span>
        </Link>
      </div>
    </section>
    
  )
}

export default NotFound