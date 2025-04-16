// Using for...of loop instead of for...in
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  
  // for...of iterates over the values directly instead of indices
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
