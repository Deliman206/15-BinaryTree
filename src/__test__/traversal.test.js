'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversal';

describe('testing binary tree', () => {
  test('should validate binary tree preOrder', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;

    three.left = four;
    three.right = five;

    two.left = six;

    six.right = seven;

    seven.left = eight;
    seven.right = nine;

    expect(preOrderTraversal(tree.root)).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5, ');
  });
  test('should validate binary tree postOrder', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;

    three.left = four;
    three.right = five;

    two.left = six;

    six.right = seven;

    seven.left = eight;
    seven.right = nine;

    expect(postOrderTraversal(tree.root)).toEqual('8, 9, 7, 6, 2, 4, 5, 3, 1, ');
  });
  test('should validate binary tree inOrder', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;

    three.left = four;
    three.right = five;

    two.left = six;

    six.right = seven;

    seven.left = eight;
    seven.right = nine;

    expect(inOrderTraversal(tree.root)).toEqual('6, 8, 7, 9, 2, 1, 4, 3, 5, ');
  });
});
