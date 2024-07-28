class LinkedList{
    constructor(value){
        this.value = value
        this.next = null
    }
}
function insert(head,values){
    let curr = head;
    for(let i=0;i<values.length;i++){
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next = new LinkedList(values[i])
    }
    return head;

}

function removeDuplicates(head){
    if(head === null || head.next === null){
        return head;
    }

    const result = new Set();
    let curr = head;
    let prev = null;

    while(curr !== null){
        if(result.has(curr.value)){
            prev.next = curr.next
        }else{
            result.add(curr.value)
            prev = curr
        }
        curr = curr.next
    }
    return head;
}


function print(head){
    let curr = head
    const resultArr = []
    while(curr!==null){
        resultArr.push(curr.value);
        curr = curr.next;
    }
    console.log(resultArr.join(" "));
}

let list = new LinkedList(1)
list = insert(list,[2,3,1,4,2,6,5])

console.log("original");
print(list)

let withoutDuplicate = removeDuplicates(list)

console.log("list after removing duplicates");

print(withoutDuplicate)