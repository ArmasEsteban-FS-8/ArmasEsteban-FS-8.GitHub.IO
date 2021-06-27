// // added some small code to JS file but was confused on what should we create for our projects?
// // the code im adding is just to ask the user for how many surfboards they want to order
//
// // ask user name
// let name = prompt("What is your name?");
// // validate name
// while(name == "")
// {
//     name = prompt("What is your name? Please type again");
// }
// // log to console
// console.log(name);
// // ask user for name
// let age = Number(prompt("What is your age?"));
// // validate number and white space
// while( isNaN(age) || age == "")
// {
//     age = Number(prompt("What is your age? Please type again"));
// }
// // log to console
// console.log(age);
// // ask for how many surfboards they want
// let numberOfBoards = Number(prompt("How many surfboards do you want to purchase?"));
// // validate the number
// while( isNaN(age) || age == "")
// {
//      numberOfBoards = Number(prompt("How many surfboards do you want to purchase? Please type in valid numbers."));
// }
// console.log(numberOfBoards);
//
// if(numberOfBoards > 1 ){
//     alert("You have ordered more then 1 surfboard!!");
// }
// else if(numberOfBoards > 10){
//     alert("You have ordered to many surfboards! Max is 10. ");
// }

// Below Will be the Javascript Application
let mainHeading = document.getElementsByTagName('h1');
console.log(mainHeading);
let heading2 = document.getElementsByTagName('h2');
console.log(heading2);
let heading3 = document.getElementsByTagName('h3');
console.log(heading3);

let mainTitle = document.querySelector('h1');
mainTitle.style.fontSize = '100px';
mainTitle.style.fontFamily = 'Comic Sans MS';
mainTitle.innerHTML = 'SURFS UP!'


let mainParagraph = document.querySelector("p");
mainParagraph.innerHTML = "Surfboards have been around for ages and we are excited to produce and manufacture " +
    "for our customers who are interested in learning the art of riding the waves of the Ocean. " +
    "Modern surfboards are made of polyurethane or polystyrene foam covered with layers of fiberglass cloth, " +
    "and polyester or epoxy resin. The result is a light and strong surfboard that is buoyant and maneuverable";
mainParagraph.style.fontSize = "26px";
mainParagraph.style.fontFamily = 'Comic Sans MS';

let headingDescription = document.querySelector('h3');
headingDescription.style.fontFamily = 'Comic Sans MS';

let surfBoardName = document.querySelector('h4');
surfBoardName.style.fontFamily = 'Comic Sans MS';

let browseTitle = document.getElementById('heading2');
browseTitle.innerHTML = 'Below are Surfboards to Browse and add to your Cart.';
browseTitle.style.fontFamily = 'Comic Sans MS';

// functionality, users can submit how many boards they would like to purchase for each board.
let added = document.getElementById('addButton').onclick = boardQuantity;

function boardQuantity(){
    let board1 = document.getElementById('quantity1').value;
    let board2 = document.getElementById('quantity2').value;
    let board3 = document.getElementById('quantity3').value;
    let board4 = document.getElementById('quantity4').value;
    let board5 = document.getElementById('quantity5').value;

    let number = 0;
    number = Number(board1) + Number(board2) + Number(board3) + Number(board4) + Number(board5);
    document.getElementById('addedCArt').innerHTML = "You added " +  number + " surf boards to your cart";




}





