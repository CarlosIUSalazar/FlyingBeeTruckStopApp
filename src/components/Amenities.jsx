/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import "../App.css";

export default function Amenities({
  locations,
  getFilterState,
  getFilterCity,
  getFilterHighway,
  getFilterATM,
  getFilterWifi,
}) {
  return (
    <div className="amenitiesContainer">
      <label className="checkbox">Amenities: </label>
      <form action="/action_page.php">
        <input
          onClick={() => {
            getFilterATM(true);
          }}
          type="checkbox"
          id="ATM"
          className="ATMCheckbox"
          value=""
        />
        <label> ATM </label>
        <input
          onClick={() => {
            getFilterWifi(true);
          }}
          type="checkbox"
          id="Wifi"
          className="WifiCheckbox"
          value=""
        />
        <label> Wifi </label>
        <input
          type="checkbox"
          id="allOtherAmenities"
          className="allOtherAmenitiesCheckbox"
          value=""
        />
        <label> All Others </label>
      </form>
    </div>
  );
}

Amenities.propTypes = {
  getFilterATM: PropTypes.func.isRequired,
  getFilterWifi: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};
