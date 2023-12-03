
mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-84.386330, 33.7488 ], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
geocode("Hall annex 55 Trinity Avenue SW Atlanta, GA 30303", MB_KEY).then(coords => {
    const marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
});
const lat = 33.7488;
 const lon = -84.387;
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  .then(res => res.json())
 .then(data => {
       console.log(data);fetch(`https://api.openweathermap.org/data/2.5/weather?` +
         `lat=33.473120&lon=-84.200960` + `&appid=${WEATHER_API_KEY}`)
         .then( data => data.json())
         .then( data=> {
             console.log(data.list[0].main.temp)
             for(let i = 0; i < data.list.length; i += 8) {
                 const div =document.querySelector('#weather-info')
                 const p = document.createElement('p')
                 p.innerHTML = data.list[i].main.temp;
                 div.appendChild(p)
                 console.log(data.list[i].main.temp)
             }
         })
 });
