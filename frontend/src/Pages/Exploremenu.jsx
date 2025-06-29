import React from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import {Link} from "react-router-dom";
import {data} from "../restApi.json"

export const Exploremenu = () => {
  return (
<>
 <section className="menu" id="menu" >
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">OUR MENU</h1>
                <p>"The Dishes we have to offer to fullfil your Taste and Stomach."</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].ourdishes.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                 <img src={element.image} alt={element.title} />
                                 <h3>{element.title}</h3>
                                 <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
             <Link to={"/"}>
        Back To Home Page{""}
        <span>
          <HiOutlineArrowNarrowLeft  />
        </span>
        </Link>
        </div>
    </section>
</>
  )
}
