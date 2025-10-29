import { describe, it, expect } from 'vitest';
import { MinHeap } from '../src/ds/MinHeap.js';

describe('MinHeap', () => {
  it('push/pop/peek', () => {
    const h = new MinHeap();
    [5,1,3,2,4].forEach(v => h.push(v));
    expect(h.peek()).toBe(1);
    const out:number[] = [];
    while (!h.isEmpty()) out.push(h.pop()!);
    expect(out).toEqual([1,2,3,4,5]);
  });
});
