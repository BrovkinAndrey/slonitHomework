function sumNumericFields(obj) {
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;
}

function listNumericFields(obj) {
  let numericObj = {};
  let list = [];

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      numericObj[obj[key]] = key;
    }
  }

  for (const key in numericObj) {
    list.push(numericObj[key]);
  }

  return list.reverse();
}

export { sumNumericFields, listNumericFields };
