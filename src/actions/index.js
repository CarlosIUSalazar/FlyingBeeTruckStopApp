import { getLocationsFromApi } from "../utils";

export function getLocations() {
  return async (dispatch) => {
    const locations = await getLocationsFromApi();
    dispatch(setLocations(locations));
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}

export function getFilterState(stateName) {
  return async (dispatch) => {
    dispatch(filterState(stateName));
  };
}

// new action for filter by state dispatch
function filterState(stateName) {
  return {
    type: "FILTER_STATE",
    stateName,
  };
}

// FILTER BY CITY

export function getFilterCity(cityName) {
  return async (dispatch) => {
    dispatch(filterCity(cityName));
  };
}

// new action for filter by city dispatch
function filterCity(cityName) {
  return {
    type: "FILTER_CITY",
    cityName,
  };
}

// FILTER BY HIGHWAY

export function getFilterHighway(highwayName) {
  return async (dispatch) => {
    dispatch(filterHighway(highwayName));
  };
}

// new action for filter by highway dispatch
function filterHighway(highwayName) {
  return {
    type: "FILTER_HIGHWAY",
    highwayName,
  };
}


// FILTER BY ATM

export function getFilterATM(boolean) {
  return async (dispatch) => {
    dispatch(filterATM(boolean));
  };
}

// new action for filter by atm dispatch
function filterATM(boolean) {
  return {
    type: "FILTER_ATM",
    boolean,
  };
}

// FILTER BY WIFI

export function getFilterWifi(boolean) {
  return async (dispatch) => {
    dispatch(filterWifi(boolean));
  };
}

// new action for filter by wifi dispatch
function filterWifi(boolean) {
  return {
    type: "FILTER_WIFI",
    boolean,
  };
}

// FILTER BY OILCHANGE

export function getFilterOilChange() {
  return async (dispatch) => {
    dispatch(filterOilChange());
  };
}

// new action for filter by OILCHANGE dispatch
function filterOilChange() {
  return {
    type: "FILTER_OILCHANGE",
  };
}
