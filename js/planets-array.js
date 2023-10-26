(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]; console.log("Original array:", planets); planets.unshift("The Sun");
    console.log("Modified array:", planets);


    console.log('Adding "Pluto" to the end of the planets array.');
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ]; console.log("Original array:", planets); planets.push('Pluto')
    console.log("modified array:", planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
      var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ]; console.log("Original array:", planets); planets.shift('Sun')
    console.log("modified array:", planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ]; console.log("Original array:", planets); planets.pop('Pluto')
    console.log("modified array", planets);

    planets = planets.indexOf('Earth');
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];
    var index= planets.indexOf("Earth");
    console.log("Index of Earth:", index);

    console.log("Reversing the order of the planets array.");
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ]; planets.reverse()
    console.log("reversed array:",planets);

    console.log("Sorting the planets array.");
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];planets.sort();
    console.log("sorted array:",planets);
})();
