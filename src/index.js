//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime < 12) {
  greeting = "Good morning";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

ReactDOM.render(
  <h1>{greeting}</h1>,

  document.getElementById("root")
);

//Apply the "heading" style in the styles.css

//Dynamically change the color of the h1 using inline css styles.

//Morning = red, Afternoon = green, Night = blue.
