# algorithms-ts

> TypeScript implementations of classic data structures and algorithms with unit tests, docs, and a tiny benchmark harness.

## Quick start
```bash
pnpm i
pnpm test
pnpm bench
```

## Layout
- `src/ds` – Data structures (BST, MinHeap, UnionFind ...)
- `src/algos` – Algorithms (binary search variants, Dijkstra, KMP ...)
- `tests/` – Vitest unit tests
- `src/bench/run.ts` – Small benchmark harness using Node `perf_hooks`

## Scripts
- `pnpm test` – run unit tests
- `pnpm bench` – run benchmarks
- `pnpm build` – compile to `dist/`

## License
MIT
