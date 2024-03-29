
    mapboxgl.accessToken = MB_KEY;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-84.386330, 33.7488 ], // starting position [lng, lat]
    zoom: 8, // starting zoom
});



map.addControl(new mapboxgl.NavigationControl());
geocode("Hall annex 55 Trinity Avenue SW Atlanta, GA 30303", MB_KEY).then(coords => {
    const marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);

    const favfoodPopup = new mapboxgl.Popup()
        .setHTML("<p> Ray's in the City!</p>");

    marker.setPopup(favfoodPopup);
});

geocode("240 Peachtree St NW Atlanta, GA 30303", MB_KEY).then(coords =>{
    console.log(coords);
    let popup = new mapboxgl.Popup()
        .setLngLat(coords)
        .setHTML("<p>Ray's in the City!</p>")
        .addTo(map);

});
const restaurants = [
    {
        name: "Poor Calvin.s",
        location: [-84.3822003, 33.7684665 ],
        description: 'The best Asian food in the city.',
    },
    {
        name: "Nikolai's Roof",
        location: [-84.365, 33.806],
        description: 'Experience a unique culinary journey at this restaurant.',
    },
    {
        name: "This is it",
        location: [-84.365, 33.806],
        description: 'Known for its BBQ.',
    },
];
restaurants.forEach((restaurant) => {
    const popup = new mapboxgl.Popup()
        .setHTML(`<h3>${restaurant.name}</h3><p>${restaurant.description}</p>`);

    new mapboxgl.Marker()
        .setLngLat(restaurant.location)
        .setPopup(popup)
        .addTo(map);
});
