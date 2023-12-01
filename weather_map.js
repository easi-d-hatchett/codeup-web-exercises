
mapboxgl.accessToken = WEATHER_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-84.386330, 33.7488 ], // starting position [lng, lat]
    zoom: 20, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
geocode("Hall annex 55 Trinity Avenue SW Atlanta, GA 30303", WEATHER_API_KEY).then(coords => {
    const marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
});