import React from "react";
import Avatar from "./Avatar";
import ContactDetail from "./ContactDetail";
//import ReactDOM from "react-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.img} />
      </div>
      <div className="bottom">
        <ContactDetail DetailInfo={props.tel} />
        <ContactDetail DetailInfo={props.email} />
      </div>
    </div>
  );
};

export default Card;
