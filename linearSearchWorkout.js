/*
//Question 1: Find the index of a specific value

function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
}

let array = [10,23,45,70,11,15];
let targetValue = 70;

console.log("The index of the value :");
console.log(linearSearch(array,targetValue));
*/



/*
//Question 2: check if a specific string exists in the array.

function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }
}
return false;
}

let array = ["apple", "banana", "cherry", "date"];
let value ="cherry"
console.log("Does the value exist in the array?");
console.log(linearSearch(array,value));

*/


/*
//Question 3:  find the maximum value in an array of integers

function linearSearch (arr){
         let max=arr[0];
         for(i=0;i<arr.length-1;i++){
            if(arr[i]>max){
                max=arr[i]
            }
         }
         return max;
}

let array = [56, 34, 10, 77, 51, 93, 30];
console.log("The maximum value of teh array is:");
console.log(linearSearch(array));

*/