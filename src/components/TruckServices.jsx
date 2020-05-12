import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


export default function TruckServices({
  locations,
  getFilterState,
  getFilterCity,
  getFilterHighway,
  getFilterOilChange,
}) {
  return (
    <div id="truckServicesContainer" className="dropdown">
      <label className="checkbox">Truck Services: </label>
      <form action="/action_page.php">
        <input
          onClick={(e) => getFilterOilChange()}
          type="checkbox"
          id="oilChange"
          name="oilChangeCheckbox"
          value=""
        />
        <label> Oil Change </label>
        <input
          type="checkbox"
          id="lightMechanical"
          name="lightMechanicalCheckbox"
          value=""
        />
        <label> Light Mechanical </label>
        <input type="checkbox" id="tirePass" name="tirePassCheckbox" value="" />
        <label> Tire Pass </label>
        <input
          type="checkbox"
          id="TruckTireCare"
          name="TruckTireCareCheckbox"
          value=""
        />
        <label> Truck Tire Service </label>
      </form>
    </div>
  );
}
