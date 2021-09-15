import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  function nextPerson(){
    if(index===people.length-1){
      setIndex(0);
    }
   else{
    setIndex(index+1);
   }
   
  }
  function prevPerson(){
    if(index===0){
      setIndex(people.length-1);
    }
    else{
    setIndex(index-1);
    }
  }
  function randomPerson(){
    var randomNumber=Math.floor(Math.random()*people.length);

    if(randomNumber>=people.length-1){
      setIndex(0);
    }
    if(randomNumber<0){
      setIndex(people.length-1);
    }
   else{

     setIndex(randomNumber);
   }
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
