import L from "leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
});

export default icon;

/*--------------------------------------------------------------------------
// START, DRAW AND FINISH MARKER ICONS:
// if the marker is the first in the LatLong state array then it is a start marker icon
// if it is th elast i the array it is the finish marker
// else it is a draw marker
// https://leafletjs.com/examples/custom-icons/
//

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: "leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

const greenIcon = new LeafIcon({ iconUrl: "leaf-green.png" })
 const redIcon = new LeafIcon({ iconUrl: "leaf-red.png" })
  const orangeIcon = new LeafIcon({ iconUrl: "leaf-orange.png" })
*/
