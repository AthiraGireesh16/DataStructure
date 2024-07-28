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
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value,index){
        
        if(index<0 || index > this.size){
            console.log("Enter a valid index");
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next=node
            this.size++
        }
    }
    removeFrom(index){
        if(index<0||index>this.size){
            console.log("Enter valid index");
        }
        let removeNode
        if(index===0){
            removeNode = this.head.value
            this.head = this.head.next
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head = this.head.next
        }
        else{
            let prev = this.head
            while(prev.next.value!==value&&prev.next){
                prev = prev.next
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null

        }
    }


    print(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let listValues  = ' '
            let curr = this.head
            while(curr){
                listValues +=`${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList()
list.append(80)
list.prepend(10)
list.append(70)
list.prepend(20)
list.print()
list.insert(3,2)
list.print()
//list.removeFrom(3)
list.removeValue(3)
list.print()