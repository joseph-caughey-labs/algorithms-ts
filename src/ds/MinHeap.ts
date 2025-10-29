/**
 * Binary min-heap for numbers with O(log n) push/pop and O(1) peek.
 */
export class MinHeap {
  private a: number[] = [];

  size(): number { return this.a.length; }
  isEmpty(): boolean { return this.a.length === 0; }

  peek(): number | undefined { return this.a[0]; }

  push(x: number): void {
    this.a.push(x);
    this._siftUp(this.a.length - 1);
  }

  pop(): number | undefined {
    if (this.a.length === 0) return undefined;
    const top = this.a[0];
    const last = this.a.pop()!;
    if (this.a.length) {
      this.a[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  private _siftUp(i: number) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.a[p] <= this.a[i]) break;
      [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
      i = p;
    }
  }

  private _siftDown(i: number) {
    const n = this.a.length;
    while (true) {
      let smallest = i;
      const l = i * 2 + 1, r = i * 2 + 2;
      if (l < n && this.a[l] < this.a[smallest]) smallest = l;
      if (r < n && this.a[r] < this.a[smallest]) smallest = r;
      if (smallest === i) break;
      [this.a[i], this.a[smallest]] = [this.a[smallest], this.a[i]];
      i = smallest;
    }
  }
}
