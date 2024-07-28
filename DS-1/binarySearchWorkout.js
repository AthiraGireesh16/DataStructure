//Question 1 :  find the index of a specific value
/*
function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }

    }
    return false
}

let array = [3, 6, 8, 12, 14, 18, 25, 30]
console.log("The element in the index");
console.log(binarySearch(array,25));
*/


//Question: 2 First occurence in repeated elements
/*
function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;
    let result =-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===target){
            result = mid;
            right = mid-1;
        }else if(arr[mid]<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return result;
}

let array = [2, 4, 4, 4, 6,7, 8];
let target = 4;
console.log("The first occurence of the index is:");
console.log(binarySearch(array,target));
*/
    
//The square root 
/*
function floorSqrt(n){
    if(n<0){
        console.log("Enter valid number");
    }
    if(n === 0 || n===1){
        return n;
    }
    let left =1;
    let right = n;
    let result =0;


    while(left <= right){
        const mid = Math.floor((left + right)/2)
        if(mid*mid === n){
            return  mid;
        }
        if(mid*mid<n){
            left = mid+1;
            result = mid;
        }else{
            right = mid -1;
        }
    }
    return result;
}

const n=10;

console.log(floorSqrt(n));
*/