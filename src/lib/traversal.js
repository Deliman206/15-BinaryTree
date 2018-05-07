'use strict';

let solution = '';
let solution1 = '';
let solution2 = '';
// Use recurive logic
// preOrder order
// Root-Left-Right
const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  solution += `${rootNode.value}, `;
  preOrderTraversal(rootNode.left); 
  preOrderTraversal(rootNode.right);
 
  return solution;
};
// postOrder order
// Left-Right-Root
const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  solution1 += `${rootNode.value}, `;

  return solution1;  
};
// inOrder order
// Left-Root-Right
const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  solution2 += `${rootNode.value}, `;
  inOrderTraversal(rootNode.right);
  
  return solution2;  
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
