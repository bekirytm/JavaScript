alert("Hello..");
	
const number1 = Math.floor(Math.random() * 10 +1);
const number2 = Math.floor(Math.random() * 10 +1);

var firstNumber = number1.toString();
var lastNumber = number2.toString();

const twoValues = (firstNumber + " + " + lastNumber + " = " + " ? ");

const deger = prompt(twoValues);


if(deger == number1+number2){
    console.log("True");
}
else{
    alert(" Answer is Wrong. Closing Page :(")
    window.close();
}


function yenile(){
    if(confirm("Are you sure ?")){
        window.location.reload();
        }
    }
