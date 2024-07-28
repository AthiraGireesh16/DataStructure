class MinHeap{
    constructor(){
        this.heap =[]
    }

    buildHeap(arr){
        this.heap = arr
        for(let i = Math.floor(this.heap.length/2)-1;i>=0;i--)
        {
            hepifyDown(i)
        }
    }

    heapifyDown(index){
        let leftCHild = 2*index +1
        let rightChild = 2*index + 2;
        let smallest = index
        if(leftCHild < this.heap.length && this.heap[leftCHild] < this.heap[smallest]){
            smallest = leftCHild
        }
        if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]){
            smallest = rightChild
        }
        if(smallest !== index){
            [this.heap[smallest],this.heap[index]] = [this.heap[index],this.heap[smallest]]
            this.heapifyDown(index)
        }
    }


}


