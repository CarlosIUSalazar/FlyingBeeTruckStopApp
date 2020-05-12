import React from "react";
// import logo from "./logo.svg";
import flyingBee from "./flyingBeeTruckStopsSmaller.png";
import "./App.css";
import Map from "./containers/Map";
import FilterState from "./containers/FilterState";
import Amenities from "./containers/Amenities";
import TruckServices from "./containers/TruckServices";

require("dotenv").config();

export default function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={flyingBee} className="App-logo" alt="bee logo"></img>
        <h2>🐝 Welcome to FlyingBee Truck Stops 🐝</h2>
      </div>
      <p className="App-intro">Feel the Buzz</p>
      <Map id="map" />
      <FilterState />
      <Amenities />
      <TruckServices />
    </div>
  );
}
