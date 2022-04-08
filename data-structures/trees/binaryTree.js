export class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

// root of the binary tree.
let root = null;

/* following is the tree after above statement
 
          1
        /   \
      null  null     
*/

// create root
root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

/* 2 and 3 become left and right children of 1

           1
        /     \
      2        3
    /   \     /  \
  null null null null  

*/

root.left.left = new Node(4);

/* 4 becomes left child of 2

                1
            /       \
           2          3
         /   \       /  \
        4    null  null  null
       /   \
      null null
*/
