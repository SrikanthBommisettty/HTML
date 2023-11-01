const temperaturesFahrenheit = [32, 68, 86, 104, 122];
const temperaturesCelsius = temperaturesFahrenheit.map(f => Math.round((f - 32) * (5 / 9)));

console.log(temperaturesCelsius); 
