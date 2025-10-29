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

## 🌟 Support

If you find this project useful, give it a ⭐ on GitHub to help others discover it!

---

## MIT License

[MIT License](./LICENSE) Copyright (c) 2025 Joseph Caughey (https://www.josephcaughey.com
)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.