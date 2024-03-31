let x = 4;
let y = 4;

// Function defined using the function keyword
var sum = function sum(x, y) {
    return x + y;
}

console.log(sum(x,y)); 

// Arrow function
const sum2 = (x, y) => {
    return x + y;
}

console.log(sum2(x,y)); 

//arrow function with single parameter

const sum3 = x => {
    return x;
}

console.log(sum3(x,y)); 

//arow function with single return statement

// let sum4 = () => {
//     name:"summyia";
// };



// rest parameters operator , elements combine into array

function rest_parameter(...parameters){
console.log(parameters);
}
rest_parameter(1,2,3,4,5)
rest_parameter(1,2,3,4,5,1,2,3,4,5,1,2,3,4,5)

//spread operator  , arrays spread into elements

let arr1=[1,2,3,4,5,1,2,3,4,5]
let arr2=["a","b","c","d","e"]
let arr3=[...arr1,...arr2]
console.log(arr3);      //show elements in array form
console.log(...arr3); // show all individual elements

//Destructing Arrays

let alpha=["a","b","c","d","e"];
const [m,r,t,u,e]=alpha;
console.log(r)

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add);

  // destructing object

  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  myVehicle(vehicleOne);
  // old way
function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
  }
  //new way
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  }
  console.log(myVehicle);


 //functions
  let arr = [1,2,3,4,5,6,7,8,9,10];
  //map
  arr.map(squarer)
  function squarer(x){
    return x**2;
  }
  let result=arr.map(squarer)
  console.log(result);

  //
  class Student{
    constructor (name,reg){
        this.name= name;
        this.reg = reg;

    }
    get getName(){
        return this.name;
    }
    set setName(n){
        this.name=n;
    }
  
  /**display Student */
  display(){
    console.log("my name is"+this.name)
  }}
  class CSStudent extends Student{
    constructor (name,reg,fypTitle){
       /* this.name= name;
        this.reg = reg;*/
        super(name,reg);
        this.fypTitle = fypTitle;
  }
}

let std1 = new Student ("Ali", 23);
std1.getName;
//std1.setName("abc")
std1.setName = "abc";
let csstd = new CSStudent("amir", 30, "ABC")
csstd.display();
std1.display();