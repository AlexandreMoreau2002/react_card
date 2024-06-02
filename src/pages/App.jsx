// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../components/card";

export default function App() {
  /* Utilisation de 1 card en react */
  // return (
  // <div className='App'>
  //   < Card
  //     imgSrc={"https://picsum.photos/200"}
  //     imgAlt={"Card image"}
  //     title={"Title card"}
  //     description={"this is the card description, she can be more longer but the time is money"}
  //     buttonText={"Learn more"}
  //     link="cardPage"
  //   />
  // </div>
  // )

  /* utilisation de plusieurs card */
  return (
    <div className="App">
      <div className="container">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            imgSrc={"https://picsum.photos/200"}
            imgAlt={`img card ${index + 1}`}
            title={`Title card ${index + 1}`}
            description="This is the card description, it can be longer but time is money."
            buttonText="Learn more"
            link="cardPage"
          />
        ))}
      </div>
    </div>
  );
}
