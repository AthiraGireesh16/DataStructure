
// Quetion 1:Replace each alphabet with another Alphabet at the n-th position


function replaceAlphabet(str,n){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result=''
    for(let i=0;i<str.length;i++){
        const char = str[i].toLowerCase();
        const index = alphabet.indexOf(char);
        if(index!== -1){
            result += alphabet[(index+n)%26]
        }else{
            result += str[i]
        }
    }
    return result;
}


// const input = 'Athira'
// const shift = 2
console.log(replaceAlphabet('z"z',2));

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>

//Question 2 : Reverse Each word in a String
/*
function reverse(str){
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
}

console.log(reverse('Hello World'));
*/



//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>

//Question 3: Count the occurence of Each Character
/*
function charCount(str){
    let string = str.toLowerCase()
    let count={};
    for(let char of string){
        if(count[char]){
            count[char]++
        }else{
            count[char]=1;
        }
    }
    return count;
}
console.log(charCount('HelloHi'));
*/

//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>

//Question 4: check the given strings are anagram or not?
// /
// function anagram(str1,str2){
//     function cleanandsort(str){
//         return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
//     }
    
//     const sortString1= cleanandsort(str1);
//     const sortString2= cleanandsort(str2);

//     return sortString1===sortString2;
// }

// console.log(anagram('listeen','silent'));
