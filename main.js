// added some small code to JS file but was confused on what should we create for our projects?
// the code im addig is just to ask the user for how many surfboards they want to order

// ask user name
let name = prompt("What is your name?");
// validate name
while(name == "")
{
    name = prompt("What is your name? Please type again");
}
// log to console
console.log(name);
// ask user for name
let age = Number(prompt("What is your age?"));
// validate number and white space
while( isNaN(age) || age == "")
{
    age = Number(prompt("What is your age? Please type again"));
}
// log to console
console.log(age);
// ask for how many surfboards they want
let numberOfBoards = Number(prompt("How many surfboards do you want to purchase?"));
// validate the number
while( isNaN(age) || age == "")
{
     numberOfBoards = Number(prompt("How many surfboards do you want to purchase? Please type in valid numbers."));
}
console.log(numberOfBoards);

if(numberOfBoards > 1 ){
    alert("You have orderd more then 1 surfboard!!");
}
else if(numberOfBoards > 10){
    alert("You have ordered to many surfboards! Max is 10. ");
}
