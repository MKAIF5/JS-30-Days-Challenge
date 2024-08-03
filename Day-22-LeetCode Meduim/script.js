// Challenge Started

// Activity 1: Add Two Numbers

/// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative
// integer. The digits are stored in reverse order, and each node contains a single 
// digit. Add the two numbers and return the sum as a linked list, Create a few test 
// cases with linked lists 
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sum = addTwoNumbers(l1, l2);
printLinkedList(sum);

// Activity 2 : Longest Substring Without Repeating Characters

// Task 2 : Solve the Longest Substring Without Repeating Characters problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring
// without repeating characters. Log the length for a few test cases, including edge
// cases.

function logLength(s) {
  let n = s.length;
  let maxLength = 0;
  let start = 0;
  let charMap = new Map()
  for (let i = 0; i < n; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(charMap.get(s[i], + 1, start))
    }
    charMap.set(s[i], i)
    start = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}
console.log(logLength("andbasfb"));
console.log(logLength(" "));