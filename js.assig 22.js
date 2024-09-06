function addnumber(a,b) {
    var sum=0;
    for(let i=a ;i<=b ;i++){
        sum += i;
    }
    return sum;
    
}
console.log(addnumber(1,4))
console.log(addnumber(1,13))
//asignment..2
//num ..1
//a
function findWantedWord(crowd) {
    // Use the filter method to keep only lowercase letters
    let wantedWord = [...crowd].filter(char => char === char.toLowerCase()).join('');
    
    return wantedWord;
  }
  
  // Example usage
  var crowd = "HJIJKfikMLNOPQreRSTWX";
  console.log(findWantedWord(crowd)); // Output: "flkstuvyz"

//b
  function findWanteedWord(deep) {
    // Use the filter method to keep only uppercase letters
    let wanteedWord = [...deep].filter(char => char === char.toUpperCase()).join('');
    
    return wanteedWord;
  }
  
  // Example usage
  var deep = "abcdFRghONTlmqrENuvDyz";
  console.log(findWanteedWord(deep)); // Output: "EFIJKNOPSTWX"
  //num..2


  function printNumbersDivisibleBy3(low, high) {
    for (let i = low; i <= high; i++) {
      if (i % 3 === 0) {
        console.log(i + " div3");
      } else {
        console.log(i);
      }
    }
  }
  
  printNumbersDivisibleBy3(10, 20);

  //num...3

  function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz();

  //num..4

  function isEvens(number) {
    // Convert the number to a string to check each digit
    let digits = number.toString();
    
    for (let i = 0; i < digits.length; i++) {
      // Convert the character back to a number and check if it's even
      if (parseInt(digits[i]) % 2 !== 0) {
        console.log(0);
        return; // Exit the function if any digit is odd
      }
    }
    
    // If the loop completes, all digits are even
    console.log(1);
  }
  
  // Example usage
  isEvens(2426); 
  isEvens(3224); 
  
  
  
  
  