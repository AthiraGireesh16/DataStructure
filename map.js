const map = new Map([['a',1],['b',2]])//a & b are the keys and 1& 2 are the values.
map.set('c',3)
console.log(map.has('a'));
map.delete('c')
console.log(map.size)
map.clear()
for(const [key,value] of map){
    console.log(`${key}:${value}`);
}