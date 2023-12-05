
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
            map.flyTo({ center: coordinates, zoom: 13 });
        })
        .catch(error => {
            console.error('Error geocoding location:', error);
        });
}

// Fetch weather data from OpenWeatherMap API
const lat = 33.7488;
const lon = -84.387;
const weatherapikey= WEATHER_API_KEY




function updateWeatherForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            // Update the UI with weather information
            updateWeatherUI(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// function to update the UI with weather information
function updateWeatherUI(weatherData) {
    const weatherInfoElement = document.getElementById('weatherInfo');

    // Clears existing content
    weatherInfoElement.innerHTML = '';

    // Extract relevant information from the weatherData object
    for (let i = 0; i < 40; i+= 8) {
        const date = new Date(weatherData.list[i].dt * 1000); // Convert timestamp to date
        const day = date.toLocaleDateString('en-US', {weekday: 'long'});
        const temperature = weatherData.list[i].main.temp;
        const description = weatherData.list[i].weather[0].description;

        // Create a new element for each day's weather information
        const dayWeatherElement = document.createElement('div');
        dayWeatherElement.innerHTML = `<strong>${day}:</strong> Temperature: ${temperature} °F, Description: ${description}`;


        // Append the element to the weatherInfoElement
        weatherInfoElement.appendChild(dayWeatherElement);
    }

}
// Event listener for clicking on the map to drop a pin
map.on('click', function (e) {
    const coordinates = e.lngLat;
    // Drop a pin on the map
    dropPin(coordinates);
    // Update the weather forecast for the clicked location
    updateWeatherForecast(coordinates.lat, coordinates.lng);
});

// Function to drop a pin on the map
function dropPin(coordinates) {
    const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
}



