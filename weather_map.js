
mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-84.386330, 33.7488 ], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

// Event listener for the "Search" button
document.getElementById('searchButton').addEventListener('click', function () {
    const location = document.getElementById('search').value;
    geocodeLocation(location);
});

// added "zoom control" to the map
map.addControl(new mapboxgl.NavigationControl());

// Event Listener for  "select zoom" option
document.getElementById('zoom-level').addEventListener('change', function (event) {
    const zoomLevel = parseFloat(event.target.value);
    map.setZoom(zoomLevel);
});




function geocodeLocation(location){
// Use Mapbox Geocoding API to get the coordinates for the location
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(data => {
            const coordinates = data.features[0].geometry.coordinates;
            map.flyTo({ center: coordinates, zoom: 12 });
        })
        .catch(error => {
            console.error('Error geocoding location:', error);
        });
}

// Fetch weather data from OpenWeatherMap API
const lat = 33.7488;
const lon = -84.387;





fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        // Update the UI with weather information
        updateWeatherUI(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });

// function to update the UI with weather information
function updateWeatherUI(weatherData) {
    const weatherInfoElement = document.getElementById('weatherInfo');

    // Extract relevant information from the weatherData object
    const temperature = weatherData.list[0].main.temp;
    const description = weatherData.list[0].weather[0].description;

    // Update the content of the weatherInfoElement
    weatherInfoElement.textContent = `Current Temperature: ${temperature} °F, Description: ${description}`;
}

