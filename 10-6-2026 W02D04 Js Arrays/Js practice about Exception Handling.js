/*let y = -20;
try{
    if(y <0){
        throw "Number is negative\nhello";
    }
} catch(error){
    console.log("error: ", error);
}
finally{
        console.log("Finally block executed");
    }*/

/*backticks practice
let t = `adullah
waheed`;
    console.log(t);*/

function withdrawMoney(withdrawAmount, balance) {
    try {
        if (withdrawAmount > balance) {
            throw "Insufficient funds";
        }

        balance = balance - withdrawAmount;
        console.log("Success! New balance: " + balance);
    } catch (error) {
        console.log("Error: ", error);
    }
    finally {
        console.log("Transaction completed");
    }
}
withdrawMoney(50, 200);



