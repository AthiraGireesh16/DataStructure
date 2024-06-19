const obj={
    name:"Anu",
    age:23,
    helloFunction: function(){
        console.log(this.name);
    }
}
obj.job="Teacher"
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj);
// delete obj.job
// console.log(obj);
obj.helloFunction()


//obj.keys(),obj.values(),obj.entries()