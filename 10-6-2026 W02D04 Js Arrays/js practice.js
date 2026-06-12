let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let pass  = "";
let a;
function generateRandomNumbers() {
    for(let i = 0; i < 12 ; i++){
        a = Math.floor(Math.random() * s.length);  // +1 for 1 to 10 and *10 is for 0 to 9
        pass = pass + s[a];
    }
    return pass;
}
console.log(generateRandomNumbers());



function calculateAge(birthYear,birthMonth, birthDay) {
    console.log("Enter your birth details:");
    console.log("Birth Year:", birthYear);
    console.log("Birth Month:", birthMonth);
    console.log("Birth Day:", birthDay);
    console.log("Current Month:", new Date().getMonth() + 1);
    console.log("Current Day:", new Date().getDate());
    console.log("Current Day:", new Date().getDate());
    let Age =  new Date().getFullYear() - birthYear;
    return console.log("Age:", Age);
}
calculateAge(1990, 1, 1);

//setTimeout behavior IN var and let

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);

  }, 1000);
}
setTimeout(() =>{
    console.log("setTimeout called");

}, 1000);
