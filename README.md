# algorithms-ts

> ⚡️ A collection of **TypeScript implementations** for essential data structures and algorithms — written clean, tested with Vitest, and benchmarked for performance.

---

## 🚀 Overview

This repository demonstrates clear, maintainable, and production-grade implementations of classic algorithms and data structures using modern TypeScript.

It’s designed to:

* Showcase your understanding of **complexity, efficiency, and correctness**.
* Serve as a **learning reference** for developers.
* Provide a **solid foundation** for coding interviews, library design, or research.

---

## 🧩 Features

* 🧱 **Data Structures:** Binary Search Tree, Min Heap, Union-Find
* ⚙️ **Algorithms:** Binary Search (variants), Dijkstra’s Shortest Path, KMP String Search
* 🥪 **Tests:** Comprehensive unit coverage with [Vitest](https://vitest.dev/)
* 🚦 **CI/CD:** Automated GitHub Actions pipeline (lint, test, build)
* ⚡ **Benchmarks:** Lightweight harness with Node `perf_hooks`
* 🧹 **Style:** ESLint, Prettier, Husky pre-commit hooks

---

## 📦 Installation

```bash
pnpm install
```

---

## 🥪 Run Tests

```bash
pnpm test
```

---

## ⚡ Run Benchmarks

```bash
pnpm bench
```

---

## 🏧 Build

```bash
pnpm build
```

The compiled JavaScript is output to `/dist`.

---

## 🤠 Project Structure

```
algorithms-ts/
├── src/
│   ├── ds/           # Data structures
│   ├── algos/        # Algorithms
│   ├── bench/        # Performance benchmarks
│   └── index.ts      # Root export
├── tests/            # Unit tests (Vitest)
├── docs/             # Architecture & roadmap
├── .github/workflows # CI config
├── package.json
└── README.md
```

---

## 📚 Documentation

* [`docs/architecture.md`](./docs/architecture.md)
* [`docs/ROADMAP.md`](./docs/ROADMAP.md)

---

## 🧭 Roadmap Highlights

* [ ] Add LinkedList, HashMap, Trie
* [ ] Add DP algorithms (LIS, Knapsack, Edit Distance)
* [ ] Implement Segment Tree, Fenwick Tree
* [ ] Build visualization demo with WebGL

---

## 🧰 Tech Stack

TypeScript · Vitest · ESLint · Prettier · pnpm · GitHub Actions

---

## 📄 License

[MIT License](./LICENSE) © 2025 [Joey Caughey](https://www.joeycaughey.com)

---

## 🌟 Support

If you find this project useful, give it a ⭐ on GitHub to help others discover it!

---

