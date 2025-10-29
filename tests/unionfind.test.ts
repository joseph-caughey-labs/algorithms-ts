import { describe, it, expect } from 'vitest';
import { UnionFind } from '../src/ds/UnionFind.js';

describe('UnionFind', () => {
  it('unions and finds', () => {
    const uf = new UnionFind(5);
    expect(uf.count()).toBe(5);
    uf.union(0,1);
    uf.union(3,4);
    expect(uf.find(0)).toBe(uf.find(1));
    expect(uf.find(3)).toBe(uf.find(4));
    expect(uf.count()).toBe(3);
    expect(uf.find(2)).not.toBe(uf.find(0));
  });
});
