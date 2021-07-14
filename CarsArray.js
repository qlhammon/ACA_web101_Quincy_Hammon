// 1
let cars = ["Ford", "Subaru", "BMW", "Honda"];

console.log(cars.length);
// 2
let moreCars = ["Ferrari", "Dodge", "Porsche", "Honda"];
let totalCars = cars.concat(moreCars);

console.log(totalCars);
// 3
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Honda"));
// 4
let stringOfCars = totalCars.join();
console.log(stringOfCars);
// 5
let carsFromString = stringOfCars.split(',');
console.log(carsFromString);
// 6
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// 7
carsInReverse.sort();
console.log(carsInReverse.indexOf('BMW'));
// 8
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
const reptiles = pets.slice(4,6);

console.log(reptiles);
console.log(pets);
/*The slice method does not remove any elements from the array.*/
// 9
const removedReptiles = pets.splice(4,2,'hamster');
console.log(removedReptiles);
console.log(pets);
// 10
const removedPet = pets.pop();

console.log(removedPet);
console.log(pets);
// 11
pets.push(removedPet);

console.log(pets);
// 12
pets.shift();
console.log(pets.shift());
// 13
pets.unshift('turtle');
console.log(pets);
// 14
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

function addTwo(){
  return number[] + 2;
} 
numbers.forEach(addTwo(numbers, index, array){
  console.log(numbers);
});
