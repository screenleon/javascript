function objectSizeOf(obj) {
    var bytes = 0;
    function sizeOf(obj) {
        if (obj !== null && obj !== undefined) {
            switch (typeof obj) {
                case 'number':
                    bytes += 8;
                    break;
                case 'string':
                    bytes += obj.length * 2;
                    break;
                case 'boolean':
                    bytes += 4;
                    break;
                case 'object':
                    var objClass = Object.prototype.toString.call(obj).slice(8, -1);
                    if (objClass === 'Object' || objClass === 'Array') {
                        for (var key in obj) {
                            if (!obj.hasOwnProperty(key)) continue;
                            sizeOf(obj[key]);
                        }
                    } else bytes += obj.toString().length * 2;
                    break;
            }
        }
        return bytes;
    };
    return sizeOf(obj);
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    const sum = l1.val + l2.val;
    const remainder = sum % 10;
    const carry = sum < 10 ? null : { val: 1 };
    return {
        val: remainder,
        next: addTwoNumbers(
            l1.next,
            addTwoNumbers(l2.next, carry)
        )
    };
};

var addTwoNumbersListNode = function (l1, l2) {
    if (l1.val == undefined) return l2;
    else if (l2.val == undefined) return l1;

    let ret = new ListNode(0);
    let ptr = ret;
    let sum = 0, tmp = 0;

    while (l1 != null || l2 != null || sum > 0) {
        if (l1 != null) { sum += l1.val; l1 = l1.next; }
        if (l2 != null) { sum += l2.val; l2 = l2.next; }
        if (sum > 9) { tmp = 1; sum -= 10; }
        ptr.next = new ListNode(sum);
        ptr = ptr.next;
        sum = tmp;
        tmp = 0;
    }
    return ret.next;
};
const list1 = {
    'val': 2,
    'next': {
        'val': 4,
        'next': {
            'val': 3,
            'next': {}
        }
    }
}

const list2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {}
        }
    }
}

console.time('addTwoNumbers');
let test1 = addTwoNumbers(list1, list2);
console.timeEnd('addTwoNumbers');

console.time('addTwoNumbersListNode');
let test2 = addTwoNumbersListNode(list1, list2);
console.timeEnd('addTwoNumbersListNode');
console.log(objectSizeOf(test1));
console.log(objectSizeOf(test2));

