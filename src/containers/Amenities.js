import { connect } from "react-redux";
import Amenities from "../components/Amenities";
import {
  getFilterState,
  getFilterCity,
  getFilterHighway,
  getFilterATM,
  getFilterWifi,
} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getFilterState: (stateName) => {
      const res = getFilterState(stateName);
      dispatch(res);
    },
    getFilterCity: (cityName) => {
      const res = getFilterCity(cityName);
      dispatch(res);
    },
    getFilterHighway: (highwayName) => {
      const res = getFilterHighway(highwayName);
      dispatch(res);
    },
    getFilterATM: (boolean) => {
      const res = getFilterATM(boolean);
      dispatch(res);
    },
    getFilterWifi: (boolean) => {
      const res = getFilterWifi(boolean);
      dispatch(res);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);
