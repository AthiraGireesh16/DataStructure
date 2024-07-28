// function isPalindrome(num){

// function reverseNum(n, rev =0){
//     if(n===0){
//         return rev;
//     }
//     rev = rev*10+(n%10);
//     return reverseNum(Math.floor(n/10),rev)

// }

// const reverse = reverseNum(num);

// return num=== reverse;

// }

// console.log(isPalindrome(1211));









function isPalindrome(num){
    
    function reverseNum(n,rev =0){
        if(n===0){
            return rev;
        }
        rev = rev*10+(n%10);
        return reverseNum(Math.floor(n/10),rev)
    }

    const reverse = reverseNum(num)

    return num === reverse;



}

console.log(isPalindrome(12321));

























