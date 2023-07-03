function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let nextSq;
  if (String(Math.sqrt(sq)).includes(".")) {
    return -1;
  } else {
    let a = Math.sqrt(sq);
    let next = a + 1;
    nextSq = next * next;
  }
  return nextSq;
}
