function capitalizeFirstChap(str) {
  return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
}

function truncate(str, maxLength = 20) {
  if (str.length <= maxLength) return str;

  const listFinalChaps = " ,.!?:;";
  const trunStr = str.slice(0, maxLength);
  
  let lastIndex = -1;
  while (!listFinalChaps.includes(trunStr.at(lastIndex))) {
    lastIndex--;
  }

  return trunStr.slice(0, lastIndex) + "…";
}


function isSubStr(str1, str2) {
  if(str1.length > str2.length) return str1.includes(str2);
  if(str1.length < str2.length) return str2.includes(str1);

  return str1 === str2;
}

export { capitalizeFirstChap, truncate, isSubStr };
