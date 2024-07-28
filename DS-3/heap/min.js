class MinHeap{
    constructor(){
        this.heap =[]
    }
    isEmpty(){
       return this.heap.length===0
    }

    heapBuild(arr){
        this.heap= arr
        for(let i= Math.floor(this.heap.length/2)-1 ; i>=0;i--){
            this.heapifyDown(i)
        }
    }
    heapifyDown(index){
        let leftChildIndex = 2 * index +1
        let rightChildIndex = 2*index +2
        let smallest = index
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex]<this.heap[smallest]){
            smallest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]<this.heap[smallest]){
            smallest = rightChildIndex
        }
        if(smallest !== index){
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]]
            this.heapifyDown(smallest)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length -1)
    }

    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while(index >0 && this.heap[index] < this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]] =[this.heap[parentIndex],this.heap[index]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }

    remove(){
        if(this.isEmpty()){
            return null;
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
    }
}

const minHeap = new MinHeap();
  minHeap.heapBuild([4, 8, 2, 5, 1]);
  console.log("Min Heap:", minHeap.heap);
  
  minHeap.insert(3);
  console.log("Min Heap after insertion:", minHeap.heap);
  
  const minRemoved = minHeap.remove();
  console.log("Min Heap after removal:", minHeap.heap); 
