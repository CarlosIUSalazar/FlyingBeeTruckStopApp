const defaultState = {
  locations: [],
  filteredByState: [],
  filteredByStateByCity: [],
  filteredByStateByHighway: [],
  filteredByATM: [],
  filteredByWifi: [],
  filteredByOilChange: [],
  filteredByOilChange: []
};

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return { ...state, locations: action.locations };

    case "FILTER_STATE":
      return {
        ...state,
        filteredByState: state.locations.filter(
          (e) => e.state === action.stateName
        ),
      };

    case "FILTER_CITY":
      return {
        ...state,
        filteredByStateByCity: state.filteredByState.filter(
          (e) => e.city === action.cityName
        ),
      };

    case "FILTER_HIGHWAY":
      return {
        ...state,
        filteredByStateByHighway: state.filteredByState.filter(
          (e) => e.highway === action.highwayName
        ),
      };
    case "FILTER_OILCHANGE":

      console.log("oilCChangeeee", state.locations.oilChange);

      return {
        ...state,
        filteredByOilChange: state.locations.filter((e) => {
          console.log(e.oilChange);
          return e.oilChange === true;
        }),
      };

    case "FILTER_ATM":
      console.log("inside FILTER_ATM reducer", state.locations[0].atm);
      return {
        ...state,
        filteredByATM: state.locations.filter((e) => {
          console.log("inside FILTER_ATM reducer e ", e);
          return e.atm === true;
        }),
      };

    case "FILTER_WIFI":
      console.log("inside FILTER_WIFI reducer", state.locations[0].wifi);
      return {
        ...state,
        filteredByWifi: state.locations.filter((e) => {
          console.log("inside FILTER_WIFI reducer e ", e);
          return e.wifi === true;
        }),
      };

    default:
      return state;
  }
};

export default photos;
