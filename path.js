// Define the graph as an adjacency matrix
  function dijkstra( start, end) {

    const graph = {
        Reception: { VishalaCafe: 9, Madhurya: 8 },
        Annapurna: {  VishalaCafe: 12, Madhurya: 10 },
        VishalaCafe: { Reception: 9, Annapurna: 12, Madhurya: 5 },
        Madhurya: {Reception:8, Annapurna: 10, VishalaCafe: 5 },
      };
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();
  
    // Initialize distances and previous
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[start] = 0;
  
    // Enqueue the start vertex with distance 0
    queue.enqueue(start, 0);
  
    while (!queue.isEmpty()) {
      const { element: currentVertex, priority: currentDistance } = queue.dequeue();
  
      if (currentVertex === end) {
        // Found the shortest path to the destination
        return buildPath(previous, end);
      }
  
      if (currentDistance > distances[currentVertex]) {
        continue;
      }
  
      for (const neighbor in graph[currentVertex]) {
        const weight = graph[currentVertex][neighbor];
        const distance = currentDistance + weight;
  
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = currentVertex;
          queue.enqueue(neighbor, distance);
        }
      }
    }
  
    // No path found from start to end
    return null;
  }
  
  function buildPath(previous, end) {
    const path = [end];
    let currentVertex = end;
  
    while (previous[currentVertex] !== null) {
      currentVertex = previous[currentVertex];
      path.unshift(currentVertex);
    }
  
    return path;
  }
  
  // Priority queue implementation
  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.sort();
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    sort() {
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage
  

  
  module.exports = dijkstra;