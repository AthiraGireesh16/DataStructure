// const arr = [1,2,3,4];
// arr.push(5)
// arr.unshift(0)
// arr.pop()
// arr.shift()
// console.log(arr);
// for (const item of arr){
//     console.log(item);
// }



//filter
/*
let array = [2,1,3,2,-3,-2,-5]
let positive = (array.filter(number=>number>0)).length
console.log(positive);
*/


//map
/*
let array = [2,1,3,2,-3,-2,-5]
let squares = array.map(number=>number*number)
console.log(squares);
*/

//reduce
/*
let array =[2,1,3,2,-3,-2,-5]
let sum = array.reduce((acc,curr)=>acc+curr)
console.log(sum);
*/

//concat
/*
let array1 = [2,1,3,2,-3,-2,-5]
let array2 = [4,6,7,5,8,9]

let result = array1.concat(array2)
console.log(result.sort());
*/

//slice

// const number = [1,2,3,4,5];
// const slicedArr = number.slice(1)
// console.log(slicedArr); 


//splice

// const number = [1,2,3,4,5]
// const splice = number.splice(1,4)
// console.log(splice);





//Question 1: Minimum element in an Array
/*
function minimum(arr){
   let min =arr[0]
    for(i=0;i<arr.length;i++){
    
        if(arr[i]<min){
            min = arr[i]
            
        }
    }
    return min;
    
}

let array = [6,5,4,3,0,7]
console.log(minimum(array));
*/



//question 2: check the array is sorted in ascending order
/*
let array = [5,6,7,8,9]

function checkSort(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            return true;
        }else{
            return false;
        }
    }
}
console.log(checkSort(array));
*/

//Question 3: Merge two arrays
/*
function merge(arr1,arr2){
    return arr1.concat(arr2)
}

let array1 = [9, 2, 3];
let array2 = [4, 5, 6];
console.log(merge(array1,array2).sort());
*/