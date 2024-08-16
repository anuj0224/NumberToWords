const units = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
    "Seventeen", "Eighteen", "Nineteen"
  ];
  
  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];
  
  function convertLessThanOneThousand(number) {
    let current;
  
    if (number % 100 < 20) {
      current = units[number % 100];
      number = Math.floor(number / 100);
    } else {
      current = units[number % 10];
      number = Math.floor(number / 10);
  
      current = tens[number % 10] + (current ? " " + current : "");
      number = Math.floor(number / 10);
    }
    if (number === 0) return current;
    return units[number] + " Hundred" + (current ? " and " + current : "");
  }
  
  function convert(number) {
    if (number === 0) {
      return "Zero";
    }
  
    const thousands = ["", " Thousand", " Million", " Billion"];
    let wordRepresentation = "";
    let thousandCounter = 0;
  
    while (number > 0) {
      const chunk = number % 1000;
      if (chunk !== 0) {
        const chunkInWords = convertLessThanOneThousand(chunk);
        wordRepresentation = chunkInWords + thousands[thousandCounter] + 
                             (wordRepresentation ? " " + wordRepresentation : "");
      }
      thousandCounter++;
      number = Math.floor(number / 1000);
    }
  
    return wordRepresentation.trim();
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', (input) => {
    const number = parseInt(input);
    console.log('Number in words:', convert(number));
    readline.close();
  });
  