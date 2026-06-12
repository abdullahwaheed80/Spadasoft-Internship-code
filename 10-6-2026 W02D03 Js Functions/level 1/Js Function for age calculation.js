function findAge(){
    let age = document.getElementById("birthDate").value;
    
    let y = 2026;
    let result = y - parseInt(age);

    document.getElementById("ageResult").textContent = "Your age is: " + result;

}