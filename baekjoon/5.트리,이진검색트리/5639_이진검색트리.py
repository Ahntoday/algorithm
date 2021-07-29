from sys import stdin
from sys import setrecursionlimit
setrecursionlimit(10000)


class Node():
    root = None
    left = None
    right = None

    def __init__(self, root):
        self.root = root


class BinarySearchTree:
    def __init__(self):
        self.node = None
        self.postOrderList = []

    def insert(self, data):
        if (self.node == None):
            self.node = Node(data)
        else:
            self.__addNode(self.node, data)

    def __addNode(self, node, data):
        if (data <= node.root):
            if (node.left == None):
                node.left = Node(data)
            else:
                self.__addNode(node.left, data)
        else:
            if (node.right == None):
                node.right = Node(data)
            else:
                self.__addNode(node.right, data)

    def postOrder(self):
        if (self.node == None):
            return False
        self.__postOrder(self.node)
        return self.postOrderList

    def __postOrder(self, node):  # L - R - P
        if (node == None):
            return False
        self.__postOrder(node.left)
        self.__postOrder(node.right)
        self.postOrderList.append(node.root)


tree = BinarySearchTree()
while(True):
    try:
        tree.insert(int(input()))
    except:
        break

answer = tree.postOrder()
for i in answer:
    print(i)
