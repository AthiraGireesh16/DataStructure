let array = ['a','b','c','d','e'];
let char = 'd'
let left = 0;
let right = array.length-1;
while(left<=right){
    let mid = Math.floor((left +right)/2)
        if(array[mid]===char){
           console.log(mid);
           break;
        }else if(array[mid]>char){
            right = mid-1
        }else{
            left = mid+1
        } 
       }





