import React, { useState } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import PropTypes from "prop-types";

export default function FilterState({
  locations,
  getFilterState,
  getFilterCity,
  getFilterHighway,
}) {
  const changeLength = locations.length <= 0;
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHighway, setSelectedHighway] = useState("");

  // FILTERING UNIQUE STATES FOR <SELECT>
  let allStates = locations.map((obj) => {
    return obj.state;
  });

  let filteredStates = allStates.filter(function(item, pos) {
    return allStates.indexOf(item) === pos;
  });
  filteredStates.unshift("STATES");

  // CITY ARRAY FILTERED BY SELECTED STATE

  let filteredCities = locations
    .filter((obj) => {
      return obj.state === selectedState;
    })
    .filter((e) => e.city)
    .map((e) => e.city)
    .filter(function(item, pos, array) {
      return array.indexOf(item) === pos;
    });
  filteredCities.unshift("CITY");

  // HIGHWAY ARRAY FILTERED BY SELECTED STATE

  let filteredHighways = locations
    .filter((obj) => {
      return obj.state === selectedState;
    })
    .filter((e) => e.highway)
    .map((e) => e.highway)
    .filter(function(item, pos, array) {
      return array.indexOf(item) === pos;
    });
  filteredHighways.unshift("HIGHWAY");

  return (
    <div id="locations" className="dropdown">
      <label className="dropdown">Locations: </label>
      {/* STATE SELECT */}
      <select
        name="State"
        className="dropdown"
        onChange={(e) => {
          setSelectedState(e.target.value);
          // capture the state choice here
          getFilterState(e.target.value);
        }}
      >
        {filteredStates.map((stateName, index) => {
          return (
            <option value={stateName} key={index}>
              {stateName}
            </option>
          );
        })}
      </select>
      {/* CITY SELECT */}
      <select
        name="City"
        className="dropdown"
        onChange={(e) => {
          setSelectedCity(e.target.value);
          // capture the city choice here
          getFilterCity(e.target.value);
        }}
      >
        {filteredCities.map((cityName, index) => {
          return (
            <option value={cityName} key={index}>
              {cityName}
            </option>
          );
        })}
      </select>

      {/* HIGHWAY SELECT */}
      <select
        name="Highway"
        className="dropdown"
        onChange={(e) => {
          setSelectedHighway(e.target.value);
          // capture the city choice here
          getFilterHighway(e.target.value);
        }}
      >
        {filteredHighways.map((highwayName, index) => {
          return (
            <option value={highwayName} key={index}>
              {highwayName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

FilterState.propTypes = {
  getFilterState: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};
