// reference https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
class LinkedList {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}


LinkedList.prototype.insertAtBeginning = function (data) {
    // A newNode object is created with property data and next = null
    let newNode = new Node(data);
    // The pointer next is assigned head pointer so that both pointers now point at the same node.
    newNode.next = this.head;
    // As we are inserting at the beginning the head pointer needs to now point at the newNode. 

    this.head = newNode;
    return this.head;
}

LinkedList.prototype.insertAtEnd = function (data) {
    // A newNode object is created with property data and next=null

    let newNode = new Node(data);
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
    if (!this.head) {
        this.head = newNode;
        return this.head;
    }
    // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
    let tail = this.head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}

// A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.
LinkedList.prototype.getAt = function (index) {
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}
// The insertAt() function contains the steps to insert a node at a given index.
LinkedList.prototype.insertAt = function (data, index) {
    // if the list is empty i.e. head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // if new node needs to be inserted at the front of the list i.e. before the head. 
    if (index === 0) {
        this.head = new Node(data, this.head);
        return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head
}

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
    return this.head;
}

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return null;
    }
    // if only one node in the list
    if (!this.head.next) {
        this.head = null;
        return;
    }
    let previous = this.head;
    let tail = this.head.next;

    while (tail.next !== null) {
        previous = tail;
        tail = tail.next;
    }

    previous.next = null;
    return this.head;
}

LinkedList.prototype.deleteAt = function (index) {
    // when list is empty i.e. head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
        return;
    }

    previous.next = previous.next.next;
    return this.head
}

LinkedList.prototype.deleteList = function () {
    this.head = null;
}