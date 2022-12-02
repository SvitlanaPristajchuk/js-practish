



const productName = "Repair droid";


function formatMessage(message, maxLength) {
  let result;
  const newMessage = message.slice(maxLength);
  const continie = '...'
  // Change code below this line
if (message.lenght >= maxLength) {
  result = message;
} else {
    result = newMessage;
}

return result
}
 
console.log(result)