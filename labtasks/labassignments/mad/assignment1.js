//Arrays_methods
let names = [
  "Momina",
  "Bibi",
  "Haseeb",
  "Naseem",
  "Sana",
  "Nadeem",
  "Faiza",
  "Ali",
];
// push function to add element in array
names.push("Zuleikha");
console.log(names);
// pop function to remove last element of the array
names.pop();
console.log(names);
// shift function to remove first element of an array
names.shift();
console.log(names);
// unshift function is used to add one or more element at start of the array
names.unshift("Wajeeha", "Ammar ");
console.log(names);
//concat function is used to join 2 arrays
let numbers = [1, 2, 3, 4, 5];
let new_array = names.concat(numbers);
console.log(new_array);
// slice function is used to fetch  the portion of an array
let slice_array = names.slice(3, 5);
console.log(slice_array);
//foreach loop is  specially used to fetch elements from array
names.forEach((element) => {
  console.log(element);
});
//map function is used to take element from array one by one and apply some operation on it,then update the array with new elements
let updated_array = names.map(function (element) {
  return element + " hello";
});
console.log(updated_array);

// filter function is used to fetch element from array then passes through some test ,if it passes the test then  it moves to the new array
let num = [52, 85, 11,87,43, 67, 18];
let filtered_array = num.filter(function (element) {
  return element % 2 != 0;
});
console.log(filtered_array);

//splice function is used to replace element from array
names.splice(0, 6, "Sara", "Bibi");
console.log(names);

//include function is used to check specific value present in array or not
console.log(names.includes("Ali"));
// reduce function is used to executes a reducer function on each element of the array
let number = [51, 62, 13, 54, 95];
let res = number.reduce(function (c, currentValue) {
  return c + currentValue;
}, 0);
console.log(res);

// reduce function is used to executes a reducer function on each element of the array,by 4 value
let res2= number.reduce(function (e, currentValue) {
  return e + currentValue;
}, -6);
console.log(res2);

// negative index
console.log(names[names.length - 1]);



//Strings_methods

let str="  Momina Bibi ";
let str2="is Momina Bibi"
//charAt function is used to check value at specific index
console.log(str.charAt(3))
// charCodeAt function is used to give the code value of specific index value
console.log(str.charCodeAt(5))
//concat function is used to join different string
console.log(str.concat(" is Momina Bibi"))
console.log(str.concat(" ",str2))
//includes function is used to check specific value present in string or not
console.log(str.includes("hello"))
//check string end with specific  value or not
console.log(str.endsWith("Bibi"))
//fetch the index of specific value
console.log(str.indexOf("Bibi"))
//it give the last index of give value
console.log(str.lastIndexOf("i"))
//it repeat the string with given number.here 4 time string repeated
console.log(str.repeat(4))
//it replace Dark value with Black in given str string
console.log(str.replace("Momina","Black"))
//it check at which index given value present 
console.log(str.search("Bibi"))
//it give the portion of string from given index to last index
console.log(str.slice(4))
//it convert the given  string into array
console.log(str.split())
//it check's  whether the string start with given value or not
console.log(str.startsWith("Bibi"))
//it give the portion of string from range index,here 5,6 index value fetch
console.log(str.substring(4,7))
//convert into lowercase string
console.log(str.toLowerCase())
//convert into uppercase string
console.log(str.toUpperCase())
//it removes all spaces from start and end of the string
console.log(str.trim())
//it returns the primitive value of the specified object.
console.log(str.valueOf())
//it  returns a string representation of a string
console.log(str.toString())