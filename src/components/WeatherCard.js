import React from "react";
import { Card } from "react-bootstrap";
import classes from "../styles/WeatherCard.module.css";

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <div className={classes.Card}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          <span style={{ fontSize: "1rem", fontWeight: "500" }}>
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <br />
          {date.toLocaleDateString()}
        </p>
        {/* minimum temperature */}
        {/* <p>Min: {Math.round(temp_min)}&#176;F</p> */}
        {/* maximum temperature */}
        <p>{Math.round(temp_max)}&#176;F</p>
      </Card.Body>
    </div>
  );
};
export default WeatherCard;
