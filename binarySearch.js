function binarySearch(arr,target){
    let left =0;
    let right = arr.length -1
    while(left <= right){
        const mid = Math.floor((left+right)/2);
        if(arr[mid] === target){
            return mid
        }else if(arr[mid]<target){
            left = mid+1
        }else{
            right =mid-1
        }
}
return false
}

const arr = [1,2,3,4,5,6]

console.log("The index of the search value:");
console.log(binarySearch(arr,3));