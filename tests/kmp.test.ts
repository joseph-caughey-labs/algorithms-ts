import { describe, it, expect } from 'vitest';
import { kmpSearch, buildLps } from '../src/algos/kmp.js';

describe('kmp', () => {
  it('builds lps', () => {
    expect(buildLps('ababaca')).toEqual([0,0,1,2,3,0,1]);
  });
  it('finds substring', () => {
    expect(kmpSearch('hello needle world', 'needle')).toBe(6);
    expect(kmpSearch('aaaaa', 'b')).toBe(-1);
  });
});
