// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(x);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(x);

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
}
console.log(max, min);
return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// challenge two

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        
        if (curTemp > max) max = temps[i];
        if (curTemp < min) min = temps[i];
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// DEBUGGING prompt was doing string until we added the number conversion to the value property
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //value: Number(prompt('Degrees celsius')),
        value: 10,
    };
    
    console.log(measurement);
    console.table(measurement);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
};
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
}
console.log(max, min);
return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

*/

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast = forecast.concat(`... ${arr[i]}C in ${i + 1} days`);
    // console.log(forecast);
  }
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
