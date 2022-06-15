import L from "leaflet";

const icon = L.icon({
  iconSize: [69, 69],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
});

// value = latLng
// for in loop - loop though objs in aray
// first & last obj need to be located - array[0] & [array.length -1]
// [{"lat":123.23,"lng":2133.123}, {"lat":124.23,"lng"2134.123}, {"lat"125.23, "lng":2135.123}]
// '[{"lat":49.28874224291087,"lng":-123.13999707669295},{"lat":49.289918626933684,"lng":-123.12858035055694},{"lat":49.28633336899398,"lng":-123.12197066700452},{"lat":49.279946482470656,"lng":-123.12145562672772},{"lat":49.27837764695631,"lng":-123.12840867046468},{"lat":49.28011456903012,"lng":-123.13587675447846},{"lat":49.28370027915806,"lng":-123.13870947600093},{"lat":49.28739776965591,"lng":-123.13922451627774}]'
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
