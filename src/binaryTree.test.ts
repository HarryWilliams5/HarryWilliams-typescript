import BinaryTree from 'comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree';
import traverseInOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traverseInOrder'
import traversePreOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePreOrder'
import traversePostOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePostOrder'


test(`BinaryTree`, () => {
    const myTree = new BinaryTree<number>((a, b) => a - b);

    myTree.add(7)
    myTree.add(4)
    myTree.add(90)
    myTree.add(924)
    myTree.add(1240)
    myTree.add(5)
    myTree.add(6000)

})

test('Binary Tree - Traverse In Order', () => {

    const myTree = new BinaryTree<number>((a, b) => a - b);
    myTree.add(7)
    myTree.add(4)
    myTree.add(90)
    myTree.add(924)
    myTree.add(1240)
    myTree.add(5)
    myTree.add(6000)

})

test('Binary Tree - Traverse Pre Order', () => {

    const myTree = new BinaryTree<number>((a, b) => a - b);
    myTree.add(7)
    myTree.add(4)
    myTree.add(90)
    myTree.add(2)
    myTree.add(45)
    myTree.add(5)
    myTree.add(3000)



    const postOrderResults: number[] = [];
    traversePostOrder(myTree, x => postOrderResults.push(x));
    expect(postOrderResults).toEqual([2, 5, 4, 45, 3000, 90, 7])
})
