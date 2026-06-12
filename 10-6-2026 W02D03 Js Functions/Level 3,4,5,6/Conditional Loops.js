//A function that tells wheather by checking temperature
function temperatureCheck(temp){
    if(temp<15){
        console.log("Cold");
    }
    else if(temp>15 && temp<30){
        console.log("Warm");
    }
    else {
        console.log("Hot");
    }
}
temperatureCheck(10);

//Level 4
/*draft let x = 1234;
function password(pass){
return function (passCheck){
    return if(passCheck == password(pass)){
        console.log("Correct password");
    }
}
}*/

function password(pass) {
  return function check(passCheck) {
    if (passCheck === pass) {
      console.log("Correct password");
    } else {
      console.log("Incorrect password");
    }
  };
}


let check = password("secret123");
check("secret123");


let sum = 0;

function login(username, password){
    for (let i = 0; i < p; i++){
            sum = sum + i;
        }
        return console.log("Logging in...");
    }
login("user", "pass");
console.log(sum);