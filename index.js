document.getElementById("mybutton").onclick= function(){
    const myCheckBox =document.getElementById("mylabel");
    const visaBtn=document.getElementById("visaBtn");
    const mastercard =document.getElementById("masterBtn");
    const paypal =document.getElementById("paypalBtn");
    if(myCheckBox.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("You are unsubscribed!");
    }
    if (visaBtn.checked){
        console.log("You are paying with Visa!");
    }
    else if (mastercard.checked){
        console.log("You are paying with Master!");
    }
    else if (paypal.checked){
        console.log("You are paying with Paypal!");
    }
    else{
        console.log("You must select a payment method!")
    }

}