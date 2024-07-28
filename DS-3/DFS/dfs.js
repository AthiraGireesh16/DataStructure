class Graph{
    constructor(){
        this.adjacencyList ={}
    }

    addVerex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    dfs(start){
        const stack=[start]
        const visited = new Set()
        visited.add(start)

        while(stack.length >0){
            const vertex = stack.pop()
            console.log(vertex);
            this.adjacencyList[vertex].forEach(neighbor=>{
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    stack.push(neighbor)
                }
            })
        }
    }
}



const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log("DFS starting from A:");
graph.dfs('A');