
// Question 2:  remove edges and vertex from the graph


class Graph{
    constructor(){
        this.adjacencyList ={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] =[]
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v!== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>v !== vertex1)
    }
    
    removeVertex(vertex){
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)         
        }
        delete this.adjacencyList[vertex]
    }
   
    display(){
        console.log(this.adjacencyList);
    }
}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.display();

graph.removeEdge('A', 'B');
graph.display();

graph.removeVertex('C');
graph.display();









