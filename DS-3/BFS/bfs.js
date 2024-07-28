class Graph{
    constructor(){
        this.adjacencyList ={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] =[]
        }
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    bfs(start){
        const queue = [start]
        const visited = new Set()
        visited.add(start)

        while(queue.length>0){
            const vertex = queue.shift()
            console.log(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            });
        }
    }
}

const graph = new Graph();
graph.addVertex('A'); // Add vertex A
graph.addVertex('B'); // Add vertex B
graph.addVertex('C'); // Add vertex C
graph.addVertex('D'); // Add vertex D
graph.addVertex('E'); // Add vertex E
graph.addEdge('A', 'B'); // Add edge A-B
graph.addEdge('A', 'C'); // Add edge A-C
graph.addEdge('B', 'D'); // Add edge B-D
graph.addEdge('C', 'E'); // Add edge C-E

console.log("BFS starting from A:");
graph.bfs('A'); 