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
   const previousTypedNumber = typeNumberField.value;
   if(isNaN(number)){
    // console.log(number);
    if(number === 'C'){
           typeNumberField.value = '';
    }
    else if(number === '<'){
        // console.log(previousTypedNumber);
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typeNumberField.value = remainingDigits;

    }
   }
   else{
   
    
    const newTypedNumber = previousTypedNumber + number;
    typeNumberField.value = newTypedNumber;
   }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    // console.log('verify pin clicked')
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('type-number');
    const typedNumber = typedNumberField.value;

    if(typedNumber == currentPin){
        console.log('correct pin');
    }
    else{
        console.log('incorrect pin');
    }
})