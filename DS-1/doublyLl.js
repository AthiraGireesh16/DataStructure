class Node{
    constructor(value){
        this.value = value
        this.prev=null
        this.next = null
    }
}
class DoublyList{
    constructor(){
        this.head = null
        this.tail=null
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
            return
        }
        else{
            this.head.prev=node
            node.next = this.head
            this.head = node
        }

    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head=this.tail=node
            return
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail=node
        }
    }

    deleteBy(index){
        if(index<0 || !this.head){
            return null
        }
        let curr = this.head
        for(let i=0;i<index-1;i++){
            curr = curr.next

        }
        let removeNode = curr.next
        curr.next = removeNode.next
        removeNode.next.prev = curr

        return removeNode.value
    }
    
    // deleteValue(value){
    //     if(!this.head){
    //         return null;
    //     }else{
    //         let curr = this.head
    //         while(curr && curr.value !== value){
    //             curr = curr.next
    //             console.log(curr);
    //         }

    //     }

    // }

    print(){
        let curr = this.head
        let listValue=''
        while(curr){
            listValue += `${curr.value} `
            curr = curr.next

        }
        console.log(listValue);
    }
}


const list = new DoublyList();
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();
list.append(45)
list.print();
list.deleteBy(2)
list.print();
list.deleteValue(10)
