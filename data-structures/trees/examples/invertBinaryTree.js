function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node3 = new TreeNode(3);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2, node1, node3);
const node6 = new TreeNode(6);
const node9 = new TreeNode(9);
const node7 = new TreeNode(7, node6, node9);
const root = new TreeNode(4, node2, node7);

console.log(invertTree(root));

/*
       4
     /   
    2     7
   / \   / \
  1   3 6   9

        4
      /  \
    7     2
   / \   / \
  9   6 3   1

*/

const testCase2Node2 = new TreeNode(1);
const testCase2Node3 = new TreeNode(3);
const testCase2Node1 = new TreeNode(2, testCase2Node2, testCase2Node3);

console.log(invertTree(testCase2Node1));

function invertTree(root) {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.right) {
      queue.push(current.right);
    }
    if (current.left) {
      queue.push(current.left);
    }

    swap(current);
  }

  return root;
}

function swap(current) {
  let temp = current.left;
  current.left = current.right;
  current.right = temp;
}
