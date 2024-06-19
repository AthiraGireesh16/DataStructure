class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node

        }
        this.size++

    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index){
        if(index<0 || index > this.size){
            console.log("enter a valid index");
        }
        if(index === 0){
            this.prepend(value);
        }
        else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++)
                {
                    prev = prev.next
                }
                node.next = prev.next
                prev.next = node
                this.size++
        }
    }

    firstRemove(){
        let curr = this.head
        this.head = curr.next
        curr.next = null
     }

   
    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr  = this.head
            let listvalues ='';
            while(curr){
                listvalues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listvalues);
        }
    }
}

const list = new LinkedList()
console.log("List empty",list.isEmpty());
list.print();
list.prepend(10)
list.prepend(20)
list.print();
list.append(50)
list.append(70)
list.print()
list.insert(23,3)
list.print();
console.log("remove first");
list.firstRemove();
list.print()