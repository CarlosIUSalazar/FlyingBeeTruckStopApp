import { connect } from "react-redux";
import FilterState from "../components/FilterState";
import {
  getFilterState,
  getFilterCity,
  getFilterHighway,
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
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterState);
