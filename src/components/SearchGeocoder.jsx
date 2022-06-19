import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import icon from "../constants.js"




const SearchGeocoder = () => {
  const [loc, updLoc] = useState();
  const [search, updSearch] = useState();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    if (search)
      geocoder.geocode(search, (results) => {
        //console.log(results);
        var r = results[0];
        if (r) {
          const { lat, lng } = r?.center;
          updLoc({ lat, lng });
          //console.log(r);
        }
      });
  }, [search]);
  const map = useMap();

  useEffect(() => {

    const geocoder = L.Control.Geocoder.nominatim();
    if (typeof URLSearchParams !== "undefined" && window.location.search) {
      // parse /?geocoder=nominatim from URL
      const params = new URLSearchParams(window.location.search);
      console.log("params", params);
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
      geocoder,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);

  return null;
}

export default SearchGeocoder;
