/**
 * Disjoint Set Union (Union-Find) with path compression and union by rank.
 * Amortized ~O(α(n)).
 */
export class UnionFind {
  private parent: number[];
  private rank: number[];
  private _sets: number;

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
    this._sets = n;
  }

  find(x: number): number {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(a: number, b: number): boolean {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++;
    this._sets--;
    return true;
  }

  count(): number { return this._sets; }
}
