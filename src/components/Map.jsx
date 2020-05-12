import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
const MyMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.key}
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

// We use object destructuring here to shorten our code
export default function Map({
  locations,
  getLocations,
  filteredByState,
  filteredByStateByCity,
  filteredByStateByHighway,
  filteredByOilChange,
  filteredByATM,
  filteredByWifi,
}) {
  const changeLength = locations.length <= 0;
  useEffect(() => {
    if (changeLength) {
      getLocations();
    }
  }, [changeLength, getLocations]);

  if (
    filteredByState.length === 0 &&
    filteredByStateByCity.length === 0 &&
    filteredByStateByHighway.length === 0 &&
    filteredByOilChange.length === 0 &&
    filteredByATM.length === 0 &&
    filteredByWifi.length === 0
  ) {
    //default map with all the markers
    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={locations}
        onMarkerRightClick={() => {}}
      />
    );
  } //map with the filtered markers by oil change
  else if (filteredByState.length === 0 && filteredByOilChange.length !== 0) {
    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={filteredByOilChange}
        onMarkerRightClick={() => {}}
      />
    );
  }

  // filtered by atm
  else if (filteredByState.length === 0 && filteredByATM.length !== 0) {
    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={filteredByATM}
        onMarkerRightClick={() => {}}
      />
    );
  }

  // filtered by wifi
  else if (filteredByState.length === 0 && filteredByWifi.length !== 0) {
    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={filteredByWifi}
        onMarkerRightClick={() => {}}
      />
    );
  }

  // filtered by state by city
  else if (filteredByState.length !== 0) {
    if (filteredByStateByCity.length !== 0) {
      return (
        <MyMap
          className="test"
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={() => {}}
          onMapClick={() => {}}
          markers={filteredByStateByCity}
          onMarkerRightClick={() => {}}
        />
      );
    }
    // filtered by highway
    else if (filteredByStateByHighway.length !== 0) {
      return (
        <MyMap
          className="test"
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={() => {}}
          onMapClick={() => {}}
          markers={filteredByStateByHighway}
          onMarkerRightClick={() => {}}
        />
      );
    }
    // filtered by state

    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={filteredByState}
        onMarkerRightClick={() => {}}
      />
    );
  }
}

// This looks new? Can you guess what this does?
Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
  filteredByState: PropTypes.array.isRequired,
  filteredByStateByCity: PropTypes.array.isRequired,
  filteredByStateByHighway: PropTypes.array.isRequired,
};
