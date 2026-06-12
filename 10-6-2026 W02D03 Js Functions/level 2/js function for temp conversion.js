function convertTemperature() {
    let celsius = document.getElementById("celsius").value;
    
    let f = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = "Temperature in Fahrenheit: " + f;
}