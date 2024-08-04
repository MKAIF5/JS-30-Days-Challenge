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
console.log(logLength("bbbbbbbbbb"));

// Activity 3 : Container With Most Water

// Task 3 : Solve the “Container With Most Water” problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer
// represents the height of a line drawn at each point. Find two lines that together
// with the x-axis form a container, such that the container holds the most water.Log 
// the maximum amount of water for a few test cases.*/
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// Activity 4 : 3Sum

// Task 4 : Solve the "3Sum” problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the
// array which give the sum of zero.Log the triplets for a few test cases, including
// edge cases.
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 8, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([]));

// Activity 5 : Group Anagrams

// Task 5 : Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together. Log the
// grouped anagrams for a few test cases.

const groupAnagrams = function(strs) {
   
  const map  = new Map();
  for (const str of strs) {
      const sortedArgument = str.split("").sort().join("");

      if(!map.has(sortedArgument)){
        map.set(sortedArgument , [])
      }
     
      map.get(sortedArgument).push(str)
  }
  
  return Array.from(map.values())
};

console.log(groupAnagrams(["eat" , "tab" , "bat"]));

// Tasks Completed