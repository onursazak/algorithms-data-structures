// Time complexity : O(n)
// Space complexity : O(n)

import { rootNodeNumber } from "../ExampleBinaryTree.js";

// recursively
const treeSum = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};
console.log(treeSum(rootNodeNumber));

// iteratively
const treeSumBreadthFirst = (root) => {
  if (root === null) return 0;

  let totalSum = 0;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return totalSum;
};

console.log(treeSumBreadthFirst(rootNodeNumber));
