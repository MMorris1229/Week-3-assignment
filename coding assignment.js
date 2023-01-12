/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//here I used let to create my array 


/* Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!*/

console.log(ages[ages.length -1] - ages[0]);
// I used the name of the array with .length so if the length changes it will always iterate through the entire array.
// I added -1 to .length because that will always start at the last number in the array.


/*Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
*/
ages.push(5);
console.log(ages);
console.log(ages[ages.length -1]- ages [0]);
//using the name of the array and .push I added 5 to the end of my array.
//then I repeated the array name .length -1.  


/*Use a loop to iterate through the array and calculate the average age.*/
let total = 0;
let avg = 0;
for(let i = 0; i < ages.length; i++){
    total = total + ages[i];
}
avg = total/ages.length;
console.log(avg);
// I created two variables , total holds the result && avg stores the average.
// I used a for loop to iterate through the ages array.
// Then new total = old total + ages{i} which will add the value of whatever is in the i slot in the ages array.
// The average is the total divided by the number of elements in the ages array. 


/*Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// I used let to create names array.


/*Use a loop to iterate through the array and calculate the average number of letters per name.*/ 
let nameTotal= 0;
let namesAvg = 0;
for(let i = 0; i < names.length; i++){
    nameTotal = nameTotal + names[i].length;
}
namesAvg = nameTotal/names.length;
console.log(namesAvg);
//created two variables to hold values.
// used a for loop to iterate through the names array.
// The new nameTotal = old nameTotal + ages[i].length, again this will add the nameTotal to whatever is in the i slot.
// namesAvg = nameTotal divided by the length of the names array.



/*	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

let results = "";

for(let i = 0; i < names.length; i++){
    results = results + names[i] + " ";
}

console.log(results);
// created an empty variable to store everything.
// used a for loop to iterate the names array
// used stored results into previous results + names at the i index then seperated it by a space.


/*How do you access the last element of any array?*/
// arrayname[arrayname.length -1] this will take me to the end of the array no matter if a new number is added.


/*How do you access the first element of any array?*/
//arrayname[0]; every array starts at the 0 index.


/*	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:*/
let newNames = ["Merick", "Silas", "Lennox"];
let nameLengths = [];

for(let i=0; i < newNames.length; i++){
    nameLengths.push(newNames[i].length);
}

console.log(nameLengths);
// created two arrays newNames to hold the names && nameLengths to hold the length of the names.
// used a for loop to iterate through the newNames array.
// used .push to add the elements length into the nameslength array.



/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
let sum = 0;
for (let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
     
}
console.log(sum);
// created a variable to hold the sum
// used a for loop to iterate through the nameLengths array
// the sum = sum + nameLengths[i] (adds the sum into whatever is in the i index)



/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/
function wordRepeat(word, n){
    let count = 1;
    let result = "";
    while(count <= n){
        result += word;
        count++;
    }
    return result;

}
//Example
console.log (wordRepeat("Hello" , 5));
//created a function
//created two variables to hold values
//used a while loop to count until n
// result = result + word
// I incremented the count 
// Then I returned the result


 /*Write a function that takes two parameters, firstName and lastName, and returns a full name.
The full name should be the first and the last name separated by a space.*/
function fullName(firstName, lastName){
    console.log (firstName + " " + lastName);
}
//Example
fullName( "Michelle" , "Morris" );
//created Function fullNanme
//printed firstName + a space + lastName to the console.



/*Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
function numbers(num1, num2 , num3 , num4){
    console.log(num1 + num2 + num3 + num4 > 100);
        
    
}
// Example
numbers(50 , 20 , 60, 30);
// here I created a function 
// I printed the array > 100 to the console




/*Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

function avgNumbers(numbers) {
let total = 0;
   
  
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  
  return total / numbers.length;
}

// Example 
console.log(avgNumbers([15, 30, 45, 50]));
//created a function
//created a total variable
//used a for loop to iterate through the numbers array
// total = total + numbers[i] (total + whatever is in the i index)
// then I returned total divided by the numbers.length to return the average



/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/
function twoArrays(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }
    return (sum1 / arr1.length) > (sum2 / arr2.length);
  }
  //Example
  let array1 = [1, 5, 3];
  let array2 = [4, 5, 6];
  console.log(twoArrays(array1, array2));
//created a function
//created two variables
//used a for loop to run through arr1 && arr2
//returned the average by sum1 divided by arr1.length > sum2 divided by arr2.length



/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink (isHotOutside, moneyInPocket){
    console.log(isHotOutside && moneyInPocket >= 10.50)

}
//Example
willBuyDrink(false , 11.00);
//created function
//printed isHotOutside && moneyInPocket >= 10.50 to console
//even though I have enough money it isn't hot outside so the answer will be false



/*Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it.*/
function password(m){
    if(m == "pigglywiggly"){
        console.log("You May Enter");
    }else{
        console.log ("Go Home Roger!");
    }
}
password("pigglywiggly");
//This code checks the password. 
//if the password is correct the console will respond with "You May Enter". 
//if the password is incorrect it will respond with "Go Home Roger!".*/
//I created it becasue I wanted to see "Go Home Roger!" printed on the console

