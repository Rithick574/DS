class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();

        for (let i = 0; i < vertices; i++) {
            this.adjList.set(i, []);
        }
    }

    addEdge(vertex, neighbor) {
        this.adjList.get(vertex).push(neighbor);
        this.adjList.get(neighbor).push(vertex);
    }

    isCyclic() {
        const visited = new Set();
        for (let vertex = 0; vertex < this.vertices; vertex++) {
            if (!visited.has(vertex)) {
                if (this.isCyclicUtil(vertex, visited, -1)) {
                    return true; // Cycle detected
                }
            }
        }
        return false; // No cycle detected
    }

    isCyclicUtil(vertex, visited, parent) {
        visited.add(vertex);

        for (const neighbor of this.adjList.get(vertex)) {
            if (!visited.has(neighbor)) {
                if (this.isCyclicUtil(neighbor, visited, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                // If the neighbor is visited and not the parent, cycle detected
                return true;
            }
        }

        return false;
    }
}

// Example usage:
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);

console.log("Is the graph cyclic? ", graph.isCyclic()); // Output: true
