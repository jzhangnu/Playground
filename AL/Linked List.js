/* ==========876. Middle of the Linked List==========*/
let l876 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
}

l876 = {
    val: 1,
    next: null
}

var middleNode = function(head) {
    let arr = [], len;
    while(head) {
        arr.push(head);
        head = head.next;
    }

    len = arr.length;    
    if (len === 1) return arr[0]

    if (len%2) {
        return arr[Math.floor(len/2)]
    } else {
        return arr[len/2]
    }
};

let l2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
}

let l3 = {
    val: 2,
    next: {
        val: 3,
        next: null
    }
}

function reverseLL() {
    var res = {}
    
    function reverse(node, parent) {
        var prev = null;
        while (head) {
            var next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}

function mergeTwoList(l1, l2) {
    if(l1==null) return l2;
    if(l2==null) return l1;
    var res = new ListNode(0);
    var cur = res;

    while (l2 || l1){
        if (l1 === null) {
            curr.next = l2;
            l2 = l2.next;
        }
        else if(l2 === null) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            if (l1.val > l2.val){
                cur.next = l2;
                l2 = l2.next;
            } else {
                cur.next = l1;
                l1 = l1.next;
            }
        }
        cur = cur.next
    }
    return res.next
}

let dd1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
}

let dd2 = {
    val: 2,
    next: {
        val: 3,
        next: null
    }
}

var deleteDuplicates = function(head) {
    var current = head;
    while(current){
        if(current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

var hasCycle = function(head) {
    if(head === null) return false;
    var walker = head;
    var runner = head;
    while(runner.next!==null && runner.next.next!==null) {
        walker = walker.next;
        runner = runner.next.next;
        if(walker===runner) return true;
    }
    return false;
};


let re = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: {
                val: 1,
                next: {
                    val: 1,
                    next: {
                        val: 1,
                        next: null
                    }
                }
            }
        }
    }
}

var removeElements = function(head, val) {
    var node = new ListNode(0);

    var prev =node;
    node.next = head;

    while(head != null){
        if(head.val != val){
            prev = head;
            head = head.next;
        } else {
            prev.next = head.next;
            head = head.next;           
        }

    }

    return node.next;
};
// removeElements(re, 1)

var isPalindrome = function(head) {
    // push in array then use array ways
};

var getIntersectionNode = function(headA, headB) {
    var la = len(headA), lb = len(headB);
    
    while(la > lb){
        headA = headA.next;
        la--;
    }
    while(lb > la){
        headB = headB.next;
        lb--;
    }
    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA

    function len (head){
        var le = 0;
        while(head){
            head = head.next;
            le++
        }
        return le
    }
};

