export function reverse(node) {
  let currentNode = node;
  let next = null;
  let prev = null;

  while (currentNode !== null) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  node = prev;
  return node;
}
