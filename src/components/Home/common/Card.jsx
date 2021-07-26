import React from "react";
function Cardcomponent (props) 
{
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="Picture" className="card_img" />
        <div className="card_info">
          <span className="card_category"> {props.director}</span>
          <h2 className="card_title"> {props.title}</h2>
          <a href ={`./movies/${props.id}`} target="blank"> 
            <button> Book Now</button>
            </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cardcomponent;
