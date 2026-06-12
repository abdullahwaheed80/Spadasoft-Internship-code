function greetUser(){
    let name = document.getElementById("nameInput").value;

    document.getElementById("greeting").textContent = "Hello, " + name;
}