import { performance } from 'node:perf_hooks';
import { binarySearch, lowerBound } from '../algos/binarySearch.js';
import { kmpSearch } from '../algos/kmp.js';

function bench(name: string, fn: () => void, iters = 10_000) {
  const t0 = performance.now();
  for (let i = 0; i < iters; i++) fn();
  const t1 = performance.now();
  console.log(`${name}: ${(t1 - t0).toFixed(2)} ms for ${iters} iters`);
}

const arr = Array.from({ length: 10_000 }, (_, i) => i * 2);
bench('binarySearch hit', () => binarySearch(arr, 4200), 5_000);
bench('lowerBound miss', () => lowerBound(arr, 4201), 5_000);

const hay = 'a'.repeat(5000) + 'needle' + 'b'.repeat(5000);
bench('kmpSearch', () => kmpSearch(hay, 'needle'), 2_000);
