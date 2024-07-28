/*Recursion is a process in which a function calls itself as a subroutine. 
This allows the function to be repeated several times, since it calls itself during its execution.*/

//The question which print the output 2 3 2 4 2 3 2 5 2 3 2 4 2 3 2 undefined
// function Number(number){
//    if(number<=1){
//     return 1
//    }else{
//     Number(number-1)
//     console.log(number);
//     Number(number-1)
//    }
    
// }

// let num =5

// console.log(Number(num));







// Question 2 : Factorial using recursion
/*
function factorial(n){
   if(n<=1) return 1;
   return n* factorial(n-1);
}

console.log(factorial(5))
*/








//Question 3: Fibonacci Series

// function fibonacci(n){
//    if(n<=1) return n;
//    return fibonacci(n-1)+fibonacci(n-2);
// }

// console.log(fibonacci(5));






//Question 4: Sum of array elements

// function sumArray(array){
//    if(array.length==0) return 0;
//    return array[0]+sumArray(array.slice(1));
// }

// console.log(sumArray([1,2,3,4,5]));



//Question 5: Power Calculation

// function power(x,n){
//    if(n===0) return 1;
//    return x*power(x,n-1)
// }
// console.log(power(2,3));


//Question 5 : Reverse a string

// function reverseString(str){
//    if(str==="") return "";
//    return reverseString(str.substr(1))+str[0];
// }
// console.log(reverseString("Athira"));




//Question 6: Palindrome

// function palindrome(number){
//    const str = number.toString();
//    function reverseString(str){
//       if(str==="") return ""
//         return reverseString(str.substr(1))+str[0]
      
//    }
//   const reverse = reverseString(str)
//   return reverse === str
// }

// console.log(palindrome(121));






//Question 7 : Greatest common Divisor

// function gcd(a,b){
//    if(b===0) return a;
//    return gcd(b, a%b)
// }

// console.log(gcd(48,18));






//question 8: Flatten a nested array 

// function flatten(array){
//    let result = []
//    for(let i=0;i<array.length;i++){
//       if(Array.isArray(array[i])){
//          result = result.concat(flatten(array[i]))
//       }else{
//          result.push(array[i])
//       }
//    }
//    return result;
// }


// console.log(flatten([1,[2,[3,4],5],6]));

