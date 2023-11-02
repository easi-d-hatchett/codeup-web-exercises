(function(){
    "use strict";



    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    const planetsString = 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'; const planetsArray = planetsString.split(', ');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    const planetString = 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune';
    const planetArray = planetsString.split(', '); const planetsStringWithTags = planetsArray.join('');

    const String = 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'; const Array = planetsString.split(', '); const planetList = planetsArray.map(planet => `
${planet}
`).join(''); const unorderedListString = `
${planetList}
`; console.log(unorderedListString);

})();
