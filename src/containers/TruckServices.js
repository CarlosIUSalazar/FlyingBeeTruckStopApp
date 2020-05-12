import { connect } from "react-redux";
import TrackServices from "../components/TruckServices";
import {
  getFilterState,
  getFilterCity,
  getFilterHighway,
  getFilterOilChange
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
    getFilterOilChange: () => {
      const res = getFilterOilChange();
      dispatch(res);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackServices);
