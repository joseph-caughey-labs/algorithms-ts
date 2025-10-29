import { MinHeap } from '../ds/MinHeap.js';

export type Edge = { to: number; weight: number };
export type Graph = Map<number, Edge[]>;

/**
 * Dijkstra shortest paths from source.
 * @returns distances array (length n) with Infinity for unreachable.
 */
export function dijkstra(n: number, g: Graph, src: number): number[] {
  const dist = Array(n).fill(Infinity);
  dist[src] = 0;
  const heap = new MinIndexedHeap(n);
  heap.decreaseKey(src, 0);

  while (!heap.isEmpty()) {
    const u = heap.popMinIndex();
    if (u === undefined) break;
    const du = dist[u];
    const adj = g.get(u) || [];
    for (const { to, weight } of adj) {
      const nd = du + weight;
      if (nd < dist[to]) {
        dist[to] = nd;
        heap.decreaseKey(to, nd);
      }
    }
  }
  return dist;
}

/** A tiny indexed heap for Dijkstra (min on key). */
class MinIndexedHeap {
  private heap: number[] = [];
  private pos: number[];
  private key: number[];

  constructor(n: number) {
    this.pos = Array(n).fill(-1);
    this.key = Array(n).fill(Infinity);
  }

  isEmpty() { return this.heap.length === 0; }

  popMinIndex(): number | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const last = this.heap.pop()!;
    this.pos[min] = -1;
    if (this.heap.length) {
      this.heap[0] = last;
      this.pos[last] = 0;
      this.siftDown(0);
    }
    return min;
  }

  decreaseKey(i: number, k: number) {
    if (k >= this.key[i]) { this.key[i] = k; return; }
    this.key[i] = k;
    if (this.pos[i] === -1) {
      this.heap.push(i);
      this.pos[i] = this.heap.length - 1;
      this.siftUp(this.pos[i]);
    } else {
      this.siftUp(this.pos[i]);
    }
  }

  private less(a: number, b: number) {
    return this.key[a] < this.key[b];
  }

  private siftUp(i: number) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.less(this.heap[p], this.heap[i])) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      this.pos[this.heap[p]] = p;
      this.pos[this.heap[i]] = i;
      i = p;
    }
  }

  private siftDown(i: number) {
    const n = this.heap.length;
    while (true) {
      let best = i;
      const l = i * 2 + 1, r = i * 2 + 2;
      if (l < n && this.less(this.heap[l], this.heap[best])) best = l;
      if (r < n && this.less(this.heap[r], this.heap[best])) best = r;
      if (best === i) break;
      [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
      this.pos[this.heap[i]] = i;
      this.pos[this.heap[best]] = best;
      i = best;
    }
  }
}
