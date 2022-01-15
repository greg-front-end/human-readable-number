module.exports = function toReadable (number) {
  // Create array of word numbers
  const ones = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  // Convert number to string and add zero values
  let numberToString = ('000' + number).slice(-3).match(/^(\d{1})(\d{2})$/);
  let result = '';

  // If number equal 0 return word 'zero'
  if (number === 0) {
    return 'zero'
  }
  
  if (!numberToString) return; 
  // If numberToString not equal zero, to assign result the words from array
  result += (numberToString[1] !== '0') ? (ones[Number(numberToString[1])] || tens[numberToString[1][0]] + ' ' + ones[numberToString[1][0]]) + 'hundred ' : '';
  result += (numberToString[2] !== '0') ? (ones[Number(numberToString[2])] || tens[numberToString[2][0]] + ' ' + ones[numberToString[2][1]]) : '';
  return result.trim()
}
