class LinkedList{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function mergeSortedLists(head1,head2){
    const dummy = new LinkedList(0)
    let tail = dummy
    while(head1 !==null && head2 !== null){
        if(head1.value <= head2.value){
            tail.next = head1;
            head1 = head1.next
        }
        else{
            tail.next = head2
            head2 = head2.next
        }
        tail = tail.next
    }

    if(head1 !== null){
        tail.next = head1
    }else if(head2 !== null){
        tail.next = head2;
    }
    return dummy.next;
    }

    function print(head){
        let curr = head
        const result = [];
        while (curr != null){
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(" "));
    }


    let list1 = new LinkedList(1)
    list1.next = new LinkedList(3)
    list1.next.next = new LinkedList(4)

    let list2 = new LinkedList(2)
    list2.next = new LinkedList(5)
    list2.next.next = new LinkedList(8)

    let mergedHead = mergeSortedLists(list1,list2)

    print(mergedHead)