function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;

    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}



function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // console.log(pin);
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
   const number = event.target.innerText;
   const typeNumberField = document.getElementById('type-number');
   if(isNaN(number)){
    // console.log(number);
    if(number === 'C'){
           typeNumberField.value = '';
    }
   }
   else{
   
    const previousTypedNumber = typeNumberField.value;
    const newTypedNumber = previousTypedNumber + number;
    typeNumberField.value = newTypedNumber;
   }
})