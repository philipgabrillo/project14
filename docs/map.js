const map = L.map('map').setView(
    [27.773056, // latitude
    -82.639999], // longitude
    13  // zoom
);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([27.751, -82.639999]).addTo(map);
var circle = L.circle([27.773056, -82.639999], {radius: 1000}).addTo(map);

// Define coordinates for the polygon (you need to provide them)
var latlong = [
    [27.7991534,-82.6407864],
    [27.7998574,-82.6706215],
    [27.773056, -82.639999]
];

var polygon = L.polygon(latlong, {
    color: 'orange',
    fillOpacity: 0.8,
    weight: 6
}).addTo(map);

var popup = L.popup()
    .setLatLng([27.773056, -82.639999])
    .setContent("Test pop.")
    .openOn(map);
    
marker.bindPopup("Test pop.").openPopup();
circle.bindPopup("<b>Testing!</b>I am a circle.");
polygon.bindPopup("Testing a polygon.");

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}


map.on('click', onMapClick);

