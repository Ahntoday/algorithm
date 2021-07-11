const date = new Date();
const getTime = date.getTime();
const year = Math.floor(getTime / (60 * 60 * 24 * 365 * 1000) + 1970);

console.log(year);