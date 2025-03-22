const capitalize = (value) => {
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
};
const reverseString = (value) => {
  const arr = value.split("");
  const reversed = arr.reverse();
  return reversed.join("");
};
const calculator = {
  add: (num1, num2) => num1 + num2,
  minus: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
};

const caesarCipher = (value, num) => {
  let result = "";
  for (let i = 0; i < value.length; i++) {
    if (
      value.charCodeAt(i) < 65 ||
      (value.charCodeAt(i) > 90 && value.charCodeAt(i) < 97) ||
      value.charCodeAt(i) > 122
    ) {
      result += value.charAt(i);
      continue;
    }
    let shi = value.charCodeAt(i) + num;
    if (shi > 122) shi -= 26;
    result += String.fromCharCode(shi);
  }
  return result;
};

const analyzeArray = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = min[i];
    average += arr[i];
  }
  average = average / arr.length;
  return { length: arr.length, min: min, max: max, average: average };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
