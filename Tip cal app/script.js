/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

//  =============================================================================================

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let totalBillInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let peopleCount = document.getElementById("numberOfPeople");
let costPerPerson = document.getElementById("perPersonTotal");

// Get number of people from number of people div

let numberOfPeople = Number(peopleCount.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(totalBillInput.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = Number(tipInput.value) / 100;
  // get the total tip amount
  const totalTip = bill * tip;
  // calculate the total (tip amount + bill)
  const totalBill = bill + totalTip;
  // calculate the per person total (total divided by number of people)
  let perPersonTotal = totalBill / numberOfPeople;
  // update the perPersonTotal on DOM & show it to user
  costPerPerson.innerText = `$${perPersonTotal.toFixed(2)}`; // \to fixed is for decimal points
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  const incOfPeople = (numberOfPeople += 1);
  // update the DOM with the new number of people
  peopleCount.innerText = incOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  if (numberOfPeople <= 1) {
    throw "Hey! You cannot have to reduce less than 1 person";
    // alert("Hey! You cannot have to reduce less than 1 person");
  }
  // decrement the amount of people
  const decOfPeople = (numberOfPeople -= 1);
  // update the DOM with the new number of people
  peopleCount.innerText = decOfPeople;
  // calculate the bill based on the new number of people  -- In this we already calculated the bill so we call that function which will do the whole work
  calculateBill();
};
