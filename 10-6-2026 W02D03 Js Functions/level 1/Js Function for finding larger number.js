function findMax(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(num1 > num2)
{
    document.getElementById("maxValue").textContent = "The maximum value is: " + num1;
}
else
{
    document.getElementById("maxValue").textContent = "The maximum value is: " + num2;
}
}