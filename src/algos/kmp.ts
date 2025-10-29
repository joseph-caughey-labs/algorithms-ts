/**
 * Knuth-Morris-Pratt (KMP) substring search.
 * Returns the first index of pattern in text or -1.
 */
export function kmpSearch(text: string, pattern: string): number {
  if (pattern.length === 0) return 0;
  const lps = buildLps(pattern);
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++; j++;
      if (j === pattern.length) return i - j;
    } else {
      if (j !== 0) j = lps[j - 1];
      else i++;
    }
  }
  return -1;
}

export function buildLps(p: string): number[] {
  const lps = Array(p.length).fill(0);
  let len = 0, i = 1;
  while (i < p.length) {
    if (p[i] === p[len]) {
      lps[i++] = ++len;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
  }
  return lps;
}
