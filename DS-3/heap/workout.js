// // //Question 1 : Build Max Heap and Extract Maximum

// // class MaxHeap {
// //     constructor(){
// //         this.heap =[]
// //     }
// //     isEmpty(){
// //         return this.heap.length===0
// //     }
// //     buildHeap(arr){
// //         this.heap = arr;
// //         for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
// //             this.heapifyDown(i)
// //         }
// //     }
// //     heapifyDown(index){
// //         let leftChildIndex = 2*index+1
// //         let rightChildIndex = 2*index+2
// //         let largest = index
// //         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex]> this.heap[largest]){
// //             largest = leftChildIndex
// //         }
// //         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
// //             largest = rightChildIndex
// //         }
// //         if(largest !== index){
// //             [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]]
// //             this.heapifyDown(largest)
// //         }
// //     }
// //     heapifyUp(index){
// //         let parentIndex = Math.floor((index-1)/2)
// //         while(index >0 && this.heap[index] > this.heap[parentIndex]){
// //             [this.heap[index],this.heap[parentIndex]] =[this.heap[parentIndex],]
// //         }
// //     }

// //     extractMax(){
// //         if(this.isEmpty()){
// //             return null;
// //         }
// //         if(this.heap.length === 1){
// //             return this.heap.pop()
// //         }
// //         const root = this.heap[0]
// //         this.heap[0] = this.heap.pop()
// //         this.heapifyDown(0)
// //         return root
// //     }
// // }

// // const maxHeap = new MaxHeap()
// // maxHeap.buildHeap([3, 1, 6, 5, 2, 4])
// // console.log("Max Heap:", maxHeap.heap);

// // console.log("Extracted max:", maxHeap.extractMax());
// // console.log("Heap after extraction:", maxHeap.heap);


// //Question 2:  Kth Largest Element

// class MaxHeap{
//     constructor(){
//         this.heap = [];
//     }

//     isEmpty(){
//         return this.heap.length === 0;
//     }

//     buildHeap(arr){
//         this.heap = arr;
//         for(let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--){
//             this.heapifyDown(i);
//         }
//     }

//     heapifyDown(index){
//         let leftChildIndex = 2 * index + 1;
//         let rightChildIndex = 2 * index + 2;
//         let largest = index;

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
//             largest = leftChildIndex;
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
//             largest = rightChildIndex;
//         }
//         if(largest !== index){
//             [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//             this.heapifyDown(largest);
//         }
//     }

//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index){
//         let parentIndex = Math.floor((index - 1) / 2);
//         while(index > 0 && this.heap[index] > this.heap[parentIndex]){
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }
//     }

//     extractMax(){
//         if(this.isEmpty()){
//             return null;
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop();
//         }
//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }

//     kthLargestElement(arr, k){
//         this.buildHeap(arr);
//         for(let i = 0; i < k - 1; i++){
//             this.extractMax();
//         }
//         return this.extractMax();
//     }
// }

// const maxHeap = new MaxHeap();
// const arr = [3, 1, 6, 5, 2, 4];
// const k = 3;
// console.log(`${k}rd largest element:`, maxHeap.kthLargestElement(arr, k));



//Question 3: Heap Sort

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    isEmpty(){
        return this.heap.length === 0;
    }

    buildHeap(arr){
        this.heap = arr;
        for(let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    heapifyDown(index){
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let largest = index;

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
            largest = leftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex;
        }
        if(largest !== index){
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index){
        let parentIndex = Math.floor((index - 1) / 2);
        while(index > 0 && this.heap[index] > this.heap[parentIndex]){
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extractMax(){
        if(this.isEmpty()){
            return null;
        }
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapSort(arr){
        this.buildHeap(arr);
        const sortedArray = [];
        while(!this.isEmpty()){
            sortedArray.push(this.extractMax());
        }
        return sortedArray.reverse();
    }
}

const maxHeap = new MaxHeap();
const arr = [3, 1, 6, 5, 2, 4];
console.log("Sorted array:", maxHeap.heapSort(arr));
