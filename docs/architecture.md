# Architecture

- Library code in `src/` with TSDoc comments and no side effects.
- Tests in `tests/` use Vitest.
- Benchmarks in `src/bench/run.ts` use Node `perf_hooks` and print to stdout.
- Everything is exported via `src/index.ts`.
