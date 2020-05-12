/* eslint-disable prettier/prettier */
const fs = require("fs");
const db = require("../server/knex.js");
require("dotenv").config();

exports.seed = async function(knex) {
  try {
    const ultimateTable = JSON.parse(fs.readFileSync("./data/locations.json"));
    for (const location of ultimateTable) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const state = location.Addresses[0].State;
      const city = location.Addresses[0].City;
      const highway = location.Site.Highway;

      // // NEW COLUMNS
      // // oilChange
      let oilChange = false;
      for (let obj of location.CustomFields) {
        if (obj.CustomField.Id === 535) {
          oilChange = true;
          break;
        }
      }
      // lightMechanical
      let lightMechanical = false;
      for (let obj of location.CustomFields) {
        if (obj.CustomField.Id === 403) {
          lightMechanical = true;
          break;
        }
      }
      // tirePass
      let tirePass = false;
      for (let obj of location.CustomFields) {
        if (obj.CustomField.Id === 423) {
          tirePass = true;
          break;
        }
      }
      // truckTireCare
      let truckTireCare = false;
      for (let obj of location.CustomFields) {
        if (obj.CustomField.Id === 387) {
          truckTireCare = true;
          break;
        }
      }
      // // travelStop
      // let travelStop = false;
      // if (location.FacilitySubtype.Id === 3) {
      //   travelStop = true;
      //   break;
      // }
      // // countryStore
      // let countryStore = false;
      // if (travelStop === false) {
      //   countryStore = true;
      //   break;
      // }
      // // atm
      // let atm = false;
      // for (let obj of location.CustomFields) {
      //   if (obj.CustomField.Id === 515) {
      //     atm = true;
      //     break;
      //   }
      // }
      // // wifi
      // let wifi = false;
      // for (let obj of location.CustomFields) {
      //   if (obj.CustomField.Id === 391) {
      //     wifi = true;
      //     break;
      //   }
      // }
      //   // arbys
      //   let arbys = false;
      //   for (let obj of location.Site.Concepts) {
      //     if (obj.Concept.Id === 4) {
      //       arbys = true;
      //       break;
      //     }
      //   }

      //   // wendys
      //   let wendys = false;
      //   for (let obj of location.Site.Concepts) {
      //     if (obj.Concept.Id === 22) {
      //       wendys = true;
      //       break;
      //     }
      //   }

      // assign those results and insert into table
      const result = await db("ultimateTable6").insert({
        id,
        latitude,
        longitude,
        name,
        state,
        city,
        highway,
        oilChange,
        lightMechanical,
        tirePass,
        truckTireCare,
        // travelStop,
        // countryStore,
        // atm,
        // wifi,
        // arbys,
        // wendys,
      });
      console.log("from ultimateTable6", result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};
