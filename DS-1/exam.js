//Reverse an array

// function reverse(arr){
//     return arr.reverse();
// }

// let array = [1,2,3,4,5]
// console.log(reverse(array));


//Find the maximum element in array

// function max(arr){
//     return Math.max(...arr);
// }

// let array = [1,2,3,4,5] 
// console.log(max(array));

// function max(array){
//     let temp =0;
//     for(i=0;i<array.length-1;i++){
//         if(array[i]<array[i+1]){
//             temp = array[i+1];
//         }
//     }
//     return temp;
// }


// let arr = [12,32,32,34,21]
// console.log(max(arr));

//Remove duplicates from sorted array

// function dup(arr){
//     for(i=0;i<arr.length-1;i++)
//         {
//             for(j=i+1;j<arr.length;j++){
//                 if(arr[i]===arr[j]){
//                    arr.splice(j,1)
//                 }
//             }
//         }
//         return arr;
// }

// let array = [1, 1, 2, 2, 3, 4, 4];
// console.log(dup(array));

//Two sum

// function twoSum(arr,target){
//     let result =[];
//     for(i=0;i<arr.length-1;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 result.push(i,j)
//             }
//         }
//     }
//     console.log(result);
// }

// let array = [2, 11, 7, 15];
// let target = 9
// twoSum(array,target);


//Sum of digits

// function sumofdigits(num){
//    return num.toString().split('').map(x=>parseInt(x)).reduce((acc,curr)=>acc+curr)
// }

// let n = 12345
// console.log(sumofdigits(n));

//

