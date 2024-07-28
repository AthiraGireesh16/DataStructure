class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}


class DoublyLL{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
    }


    print(){
        let curr = this.head 
        let res = [];
        while(curr){
            res.push(curr.value)
            curr = curr.next
        }
        console.log(res.join(' <=> '));
    }

    remove(value){
        if (!this.head) return;

        let curr = this.head;
        while (curr){
            if (curr.value === value){
                if (curr === this.head){
                    this.head = curr.next;
                    if (this.head){
                        this.head.prev = null;
                    }
                } else if (curr === this.tail){
                    this.tail = curr.prev;
                    if (this.tail){
                        this.tail.next = null;
                    }
                } else {
                    curr.prev.next = curr.next;
                    if (curr.next){
                        curr.next.prev = curr.prev;
                    }
                }
                return; 
            }
            curr = curr.next;
        }
    }
}


const list = new DoublyLL()
list.append(2);
list.append(3);
list.append(4);
list.print()
list.prepend(6)
list.prepend(8)
list.print();
list.remove(3)
list.print();