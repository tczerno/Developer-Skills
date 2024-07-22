// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 1;

// const calcAge = birthYear => 2024 - birthYear;

// console.log(x);

// //NEXT CHAPTER

// PROBLEM 1
// Given an array of temps for one day, clalculate the temp amplitude.  Keep in mind sometimes there might be a sensor error

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [-22, -1, 0, 1856];

// 1) UNDERSTANDING THE PROBLEM
// - What is temp amplitude?!?!
//          Difference between highest and lowest temp
// - how to compute max and min temps?
// - What's a sensor error and what do we do?

// 2) Break up into sub-problems
// - How to ignore errors?
// - find max value
// - find min value
// - subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
//PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understand the problem
//  - With 2 arrays, should we implement 2 functions?
//         NO, just need to merge the 2 arrays

// 2) Break up into sub-problems
// - Merge the 2 arrays

//NEXT CHAPTER
/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  console.log(measurement);
  console.table(measurement);
  //console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

//NEXT CHAPTER - Challange

//[17, 21, 23] will print "... 17*C in 1 days ... 21*C in 2 days ... 23*C in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// MY SOLUTION
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(` ... ${arr[i]}*C in ${i + 1} days`);
  }
};

printForecast(data1);
printForecast(data2);

// JONAS SOLUTION

const printForecastJonas = function (arrJonas) {
  let str = '';
  for (let i = 0; i < arrJonas.length; i++) {
    str += ` ... ${arrJonas[i]}*C in ${i + 1} days`;
  }
  console.log('...' + str);
};
printForecastJonas(data1);
printForecastJonas(data2);
