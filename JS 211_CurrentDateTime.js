// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
//This displays the date.  
  let currentDate = new Date()
  let date = currentDate.getDate();
   return "Today is" + date +"."
//This displays the time.
  let hour = currentDate.getHours()
  let minute = currentDate.getMinutes()
//This displays AM/PM.
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
    hour=12;
    prepand=' PM';
    } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Midnight';
    } 
    else
    { 
    hour=12;
    prepand=' AM';
    } 
    } 
  return "Current Time : "+hour + " : " + minute + " : " + prepand;

  document.getElementById("display-element").innerHTML = currentDate;
}
  
// Write a JavaScript program to convert a number to a string.
const num = 7;
console.log(num.toString())



// Write a JavaScript program to convert a string to the number.
const string ="7";
const int = parseInt(string, 10);
console.log(int)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const dataType = () =>{
    let inPut = x;
    return inPut.typeof()

  }
  

  
// Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNums = (x,y)=> {
    return x + y;
  }
  


// Write a JavaScript program that runs only when 2 things are true.
const bothTrue= (x,y) => {
    if (x && y == true){
    return true;
  }
  }



// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue= (x,y) => {
    if (x || y == true){
    return true;
  }
  }


// Write a JavaScript program that runs when both things are not true. 
const bothFalse = (x,y) => {
    if (x && y == false){
    return true;
  }
  } 

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.



