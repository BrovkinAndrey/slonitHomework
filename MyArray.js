function mySlice(arr, start = 0, end = arr.length) {
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  const newArray = [];
  for (let i = start; i < end; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

function myIndexOf(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if(arr[i] === item) return i;
  }
  return -1;
}

function myIncludes(arr, item, from = 0) {
  if(Number.isNaN(item)) {
    for (let i = from; i < arr.length; i++) {
      if(Number.isNaN(arr[i])) return true;
    }
  } else {
    for (let i = from; i < arr.length; i++) {
      if(arr[i] === item) return true;
    }
  }
  
  return false;
}

export { mySlice, myIndexOf, myIncludes };
