//Question 1: Basic Array
// function heapSort(arr) {
//     for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
//         heapify(arr, arr.length, i)
//     }
//     for (let i = arr.length - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]]
//         heapify(arr, i, 0) 
//     }
//     return arr
// }
    
// function heapify(arr, n, i) {
//     let largest = i
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left
//     }
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right
//     }
//     if (largest !== i) {
//         [arr[largest], arr[i]] = [arr[i], arr[largest]]
//         heapify(arr, n, largest)
//     }
// } // O(nlogn)
// const array = [12, 11, 13, 5, 6, 7];
// console.log("Sorted array: ", heapSort(array));

//Question 2:Array with repeated elements

// function heapSort(arr){
//     for(let i=Math.floor(arr.length/2);i>=0;i--){
//         heapify(arr,arr.length,i)
//     }
//     for(let i=arr.length-1;i>=0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// function heapify(arr,n,i){
//     let largest =i
//     let left = 2*i+1
//     let right = 2*i+2
//     if(left< n && arr[left]>arr[largest]){
//         largest = left
//     }
//     if(right < n && arr[right]>arr[largest]){
//         largest = right
//     }
//     if(largest !== i){
//         [arr[largest],arr[i]] = [arr[i],arr[largest]]
//         heapify(arr,n,largest)
//     }
// }

// const array = [4, 10, 3, 5, 1, 10, 3]
// console.log("Sorted Array", heapSort(array));


//Question 3: Larger Array

// function heapSort(arr){
//     for(let i = Math.floor(arr.length/2);i>=0;i--){
//         heapify(arr,arr.length,i)
//     }
//     for(let i = arr.length-1;i>=0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }


// function heapify(arr,n,i){
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i +2
//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }
//     if(right < n && arr[right] > arr[largest]){
//         largest = right
//     }
//     if(largest !== i){
//         [arr[largest],arr[i]] = [arr[i],arr[largest]]
//         heapify(arr,n,largest)
//     }
// }
// const array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
// console.log("Sorted Array" , heapSort(array));