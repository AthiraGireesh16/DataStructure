class Node{
    constructor(data){
        this.data =data;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }

    insert(data){
        const node = new Node(data)
        if(this.head===null){
            this.head = node
        }else{
            let curr=this.head;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = node;
        }

        
    }
    print(){
        let curr = this.head
        while(curr !== null){
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

function arrtoll(array){
    const list = new LinkedList()
    for(const value of array){
        list.insert(value)
    }
    return list;
}

let array = [1,2,3,4,5]
const list = arrtoll(array)

list.print();