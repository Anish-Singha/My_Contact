import React from "react";
//import ReactDOM from "react-dom";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

const CreateCard = (props) => {
  return (
    <Card
        id={props.id}
        key={props.id}
        name={props.name}
        img={props.imgURL}
        tel={props.phone}
        email={props.email}
      />
  );
};


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/220px-Dwayne_Johnson_2014_%28cropped%29.jpg" />

        {contacts.map(CreateCard)}
     
      {/* <Card
        name={contact[0].name}
        img={contact[0].imgURL}
        tel={contact[0].phone}
        email={contact[0].email}
      />
      <Card
        name={contact[1].name}
        img={contact[1].imgURL}
        tel={contact[1].phone}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        img={contact[2].imgURL}
        tel={contact[2].phone}
        email={contact[2].email}
      /> */}
    </div>
  );
}

export default App;
