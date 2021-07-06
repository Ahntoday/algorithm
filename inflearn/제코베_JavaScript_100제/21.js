// Set을 만드는 방법
var myArray = new Set('javascript'); // 문자 하나하나 들어감.
console.log(myArray);

var myArray2 = new Set();
myArray2.add(1);
myArray2.add(2);
myArray2.add(3);
myArray2.add(4);
myArray2.add(5);
myArray2.delete(3);
console.log(myArray2);
