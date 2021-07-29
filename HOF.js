/*Higher Order Functions From Scratch (forEach, filter, find, findIndex)
Submit Assignment*/

let arrayOfPeople = [{
                    firstName: "Jane",
                    lastName: "Doe",
                    birthDate: "Jan 5, 1925",
                    gender: "female"
                    },
                    {
                    firstName: "Chaz",
                    lastName: "Dominguez",
                    birthDate: "April 10, 1995",
                    gender: "male"
                    },
                    {
                    firstName: "Paul",
                    lastName: "Jeffries",
                    birthDate: "Dec 17, 1934",
                    gender: "male"
                    },
                    {
                    firstName: "Mary",
                    lastName: "Harris",
                    birthDate: "August 2, 1984",
                    gender: "female"
                    }
                
                ];
// Create a forEach method to print each of the first names in arrayOfPeople.
let personName = arrayOfPeople.forEach((arrayOfPeople) => {
    console.log(arrayOfPeople.firstName);
});
// Create a filter method to find each of the males in the array.
let males = arrayOfPeople.filter((arrayOfPeople) =>{
    return arrayOfPeople.gender == "male";
});
console.log(males);
// Create a find method to see who has a birthdate on Jan 5, 1925.
let janBirth = arrayOfPeople.find((arrayOfPeople) =>{
    return arrayOfPeople.birthDate == "Jan 5, 1925";
});
console.log(janBirth);  
// Create a findIndex method to find the index of the person named "Chaz"
let uniqueName = arrayOfPeople.findIndex((arrayOfPeople) =>{
    return arrayOfPeople.firstName == "Chaz";
});
console.log(uniqueName);