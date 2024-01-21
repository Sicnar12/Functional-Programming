// Exercise 1
function alphabeticalOrder(arr) {
    // Only change code below this line
  
   
    return arr.sort(function(a,b){
      return a === b ? 0 : a > b ? 1 : -1;
    })
   
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  // Exercise 2
  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);
// Exercise 3
function splitify(str) {
    // Only change code below this line
  
  return str.split(/\W/);
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");
  // Exercise 4
  function sentensify(str) {
    // Only change code below this line
  
  
  return str.split(/\W/).join(" ");
  
   return sentensify("May-the-force-be-with-you");
  }
  //Exercise 5
  var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle);

// Exercise 6
function checkPositive(arr) {
    // Add your code below this line
  
    return arr.every(val => val > 0);
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  //Exercise 7
  function checkPositive(arr) {
    // Only change code below this line
  return arr.some(val => val > 0)
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

  // Exercise 8
  function add(x,y,z) {
    // Only change code below this line
  return function(y){
  return function (z){
  return x+y+z;
  };
  };
    // Only change code above this line
  }
  
  add(10)(20)(30);




