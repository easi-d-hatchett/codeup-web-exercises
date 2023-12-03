
mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-84.386330, 33.7488 ], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

const lat = 33.7488;
const lon = -84.387;

// added "zoom control" to the map
map.addControl(new mapboxgl.NavigationControl());

// Event Listener for  "select zoom" option
document.getElementById('zoom-level').addEventListener('change', function (event) {
    const zoomLevel = parseFloat(event.target.value);
    map.setZoom(zoomLevel);
});




fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  .then(res => res.json())
 .then(data => {
       console.log(data);
 });



