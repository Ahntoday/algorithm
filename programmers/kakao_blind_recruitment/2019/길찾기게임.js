function solution(nodeinfo) {
    const preorderArr = [];
    const postorderArr = [];

    const nodes = nodeinfo.map((node, idx) => [idx + 1, node[0], node[1]])
        .sort((a, b) => b[2] - a[2]); // y축 기준으로 내림차순 정렬

    const bTree = new BinaryTree(nodes[0][0], nodes[0][1]);
    for (let i = 1; i < nodes.length; i++) {
        bTree.insert(nodes[i][0], nodes[i][1]);
    }

    preorder(bTree, preorderArr);
    postorder(bTree, postorderArr);

    return [preorderArr, postorderArr];
}

class BinaryTree {
    constructor(index, x_pos) {
        this.index = index;
        this.x_pos = x_pos;
        this.left = null;
        this.right = null;
    }

    // 입력받은 x좌표와 현재 부모노드의 x좌표를 비교하여 작거나 같은 경우 왼쪽 자식노드로,
    // 큰 경우엔 오른쪽 자식노드로 보낸다.
    insert(index, x_pos) {
        this.x_pos >= x_pos ?
            this._toLeft(index, x_pos) : this._toRight(index, x_pos);
    }

    // 이미 왼쪽자식이 있다면 다시 insert 메서드 호출
    // 그 외의 경우 해당 노드 정보가 왼쪽 노드가 됨
    _toLeft(index, x_pos) {
        this.left ?
            this.left.insert(index, x_pos) : this.left = new BinaryTree(index, x_pos);
    }

    // 이미 오른쪽자식이 있다면 다시 insert 메서드 호출
    // 그 외의 경우 해당 노드 정보가 오른쪽 노드가 됨
    _toRight(index, x_pos) {
        this.right ?
            this.right.insert(index, x_pos) : this.right = new BinaryTree(index, x_pos);
    }
}

const preorder = (bTree, arr) => {
    // 재귀적으로 호출되며 전달된 현재 이진 트리의 노드가
    // 비어있지 않을 경우 계속 탐색 (비어있다면 탈출조건이 됨)
    if (bTree !== null) {
        arr.push(bTree.index);
        preorder(bTree.left, arr);
        preorder(bTree.right, arr);
    }
}

const postorder = (bTree, arr) => {
    if (bTree !== null) {
        postorder(bTree.left, arr);
        postorder(bTree.right, arr);
        arr.push(bTree.index);
    }
}

console.log(solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]));
// [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]