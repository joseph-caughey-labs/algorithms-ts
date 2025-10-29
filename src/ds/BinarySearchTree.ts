/**
 * Binary Search Tree for numbers.
 * @remarks
 * Average: insert/search/delete O(log n). Worst-case (degen): O(n).
 */
export class BinarySearchTree {
  private _root: Node | null = null;

  insert(value: number): void {
    const n = new Node(value);
    if (!this._root) {
      this._root = n;
      return;
    }
    let cur = this._root;
    while (true) {
      if (value < cur.value) {
        if (!cur.left) { cur.left = n; return; }
        cur = cur.left;
      } else if (value > cur.value) {
        if (!cur.right) { cur.right = n; return; }
        cur = cur.right;
      } else {
        return; // no duplicates
      }
    }
  }

  find(value: number): boolean {
    let cur = this._root;
    while (cur) {
      if (value === cur.value) return true;
      cur = value < cur.value ? cur.left : cur.right;
    }
    return false;
  }

  delete(value: number): void {
    this._root = this._deleteRec(this._root, value);
  }

  private _deleteRec(node: Node | null, value: number): Node | null {
    if (!node) return null;
    if (value < node.value) node.left = this._deleteRec(node.left, value);
    else if (value > node.value) node.right = this._deleteRec(node.right, value);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      // two children: promote successor
      const succ = this._min(node.right);
      node.value = succ.value;
      node.right = this._deleteRec(node.right, succ.value);
    }
    return node;
  }

  private _min(node: Node): Node {
    while (node.left) node = node.left;
    return node;
  }

  inorder(): number[] {
    const out: number[] = [];
    const dfs = (n: Node | null) => {
      if (!n) return;
      dfs(n.left);
      out.push(n.value);
      dfs(n.right);
    };
    dfs(this._root);
    return out;
  }
}

class Node {
  left: Node | null = null;
  right: Node | null = null;
  constructor(public value: number) {}
}
