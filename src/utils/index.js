import axios from "axios";

export async function getLocationsFromApi() {
  const { data: locations } = await axios.get("/api/ultimateTable7"); // ES6 destructuring & aliasing
  const s = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
    state: l.state,
    city: l.city,
    highway: l.highway,
    atm: l.atm,
    wifi: l.wifi,
    oilChange: l.oilChange,
    lightMechanical: l.lightMechanical,
    tirePass: l.tirePass,
    truckTireCare: l.truckTireCare,
  }));
  return s;
}
