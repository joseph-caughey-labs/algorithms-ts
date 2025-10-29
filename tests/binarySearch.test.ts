import { describe, it, expect } from 'vitest';
import { binarySearch, lowerBound, upperBound } from '../src/algos/binarySearch.js';

describe('binary search variants', () => {
  const arr = [1,2,2,2,5,9];

  it('binarySearch exact', () => {
    expect(binarySearch(arr, 2)).toBe(1); // any index of 2 is acceptable; this impl returns 1
    expect(binarySearch(arr, 7)).toBe(-1);
  });

  it('lowerBound', () => {
    expect(lowerBound(arr, 2)).toBe(1);
    expect(lowerBound(arr, 3)).toBe(4);
    expect(lowerBound(arr, 10)).toBe(6);
  });

  it('upperBound', () => {
    expect(upperBound(arr, 2)).toBe(4);
    expect(upperBound(arr, 3)).toBe(4);
    expect(upperBound(arr, 9)).toBe(6);
  });
});
