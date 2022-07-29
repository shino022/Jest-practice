function analyzeArray(arr) {
  if(arr.length === 0) {
    return{
      average: 0,
      min,
      max,
      length: 0
    }
  }
  let average;
  let min = arr[0];
  let max = arr[0];
  let length = arr.length;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = min > arr[i] ? arr[i] : min;
    max = max < arr[i] ? arr[i] : max;
  }
  average = sum/length;
  return {average, min, max, length};
}


export default analyzeArray;
