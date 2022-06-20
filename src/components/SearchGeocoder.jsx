//MAP SEARCH IMPORTS
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

//-------------------------------------------------------------------------------------------
// SEARCH GEOCODER COMPONENT:
// -uses the nominatum search engine api to find a given location and fly to it.
const SearchGeocoder = () => {
  const map = useMap();

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim();
    if (typeof URLSearchParams !== "undefined" && window.location.search) {
      const params = new URLSearchParams(window.location.search);

      const geocoderString = params.get("geocoder");

      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }

    L.Control.geocoder({
      query: "",
      placeholder: "Search here...",
      defaultMarkGeocode: false,
      position: "topright",
      geocoder,
    })
      .on("markgeocode", function (e) {
        const latlng = e.geocode.center;
        L.marker(latlng, {
          opacity: 0,
        }).addTo(map);
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []); //---possibly var map should be inside dependancy array
  return null;
};

export default SearchGeocoder;
