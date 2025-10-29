import { describe, it, expect } from 'vitest';
import { BinarySearchTree } from '../src/ds/BinarySearchTree.js';

describe('BinarySearchTree', () => {
  it('inserts, finds, deletes', () => {
    const bst = new BinarySearchTree();
    [5,3,7,2,4,6,8].forEach(v => bst.insert(v));
    expect(bst.find(4)).toBe(true);
    expect(bst.find(10)).toBe(false);
    expect(bst.inorder()).toEqual([2,3,4,5,6,7,8]);
    bst.delete(7);
    expect(bst.inorder()).toEqual([2,3,4,5,6,8]);
  });
});
