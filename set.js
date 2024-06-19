const set = new Set([1,2,3])
set.add(4);
set.add(2)//ignore the duplicate values
console.log(set.has(2))//to check the value is present in the set
set.delete(1)
console.log(set.size);
set.clear()
for(const item of set){
    console.log(item);
}
