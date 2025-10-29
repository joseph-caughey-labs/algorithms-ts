import { describe, it, expect } from 'vitest';
import { dijkstra, type Graph } from '../src/algos/dijkstra.js';

describe('dijkstra', () => {
  it('computes shortest paths', () => {
    const g: Graph = new Map();
    // 0 ->1 (2), 0->2 (5), 1->2 (1), 1->3 (3), 2->3 (1)
    g.set(0, [{to:1, weight:2}, {to:2, weight:5}]);
    g.set(1, [{to:2, weight:1}, {to:3, weight:3}]);
    g.set(2, [{to:3, weight:1}]);
    g.set(3, []);
    const dist = dijkstra(4, g, 0);
    expect(dist).toEqual([0,2,3,4]);
  });
});
