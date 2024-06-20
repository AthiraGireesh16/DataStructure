function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
const linearArray = [3,5,1,4,2];
console.log("The value found in the index:");
console.log(linearSearch(linearArray,4));