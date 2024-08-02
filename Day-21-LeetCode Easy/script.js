// Challenge Started

// Activity 1 : Two Sum

// Task 1 : Solve the "Two Sum" problem on LeetCode
// 1 : Write a function that takes array of number and a target number, return the
// indices of the two numbers that add up to the target
// log the indices for a few test cases
const takeArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === target) {
            return [left, right]
        }
        else if (sum < target) {
            left++
        }
        else {
            right--
        }
    }
    return []
}

console.log(takeArray([4, 6, 47, 45], 9));

// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode. 
// Write a function that takes an integer and returns it with its digit reversed. Handle
// edge cases like negative numbers and numbers ending in zero. Log the reversed
// integers for a few test cases.
const takeInteger = (integer) => {
    let reverseConverted = parseInt(integer.toString().split("").reverse().join(""), 10);

    if (integer < 0) {
        return reverseConverted * -1
    }
    return reverseConverted
}

console.log(takeInteger("-327"));

// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on leetCode. 
// Write a function that takes an integer and returns true if it is a palindrome, and
// false otherwise. Log the result for a few test cases, including edge cases like 
// negative numbers.
const takePlandrome = (x) => {
    if (x < 0) {
        return false
    }
    let num = x;
    let zeroNum = 0;
    while (num > 0) {
        let define = num % 10;
        zeroNum = zeroNum * 10 + define;
        num = Math.floor(num / 10)
    }
    if (zeroNum === x) {
        return true
    }
    return false
}
console.log(takePlandrome(1246541));

// Activity 4: Merge Two Sorted Lists

// Task 4 : Solve the "Merge Two Sorted Lists" problems on LeetCode.
// Write a function that takes two sorted linked lists and return a new sorted list by 
// merging them.  Create a few test cases with linked lists and log the merged list.
function mergeTwoLists(list1, list2) {
    let curr = new ListNode(); // Create a new node to act as a current pointer
    let dummy = curr; // Initialize a dummy node to start the merged list

    // Traverse both lists while neither is null
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1; // Attach the node from list1 to the merged list
            list1 = list1.next; // Move to the next node in list1
        } else {
            curr.next = list2; // Attach the node from list2 to the merged list
            list2 = list2.next; // Move to the next node in list2
        }
        curr = curr.next; // Move the current pointer to the last node in the merged list
    }

    // If list1 is not exhausted, attach the remaining nodes from list1
    if (list1) {
        curr.next = list1;
    }
    // If list2 is not exhausted, attach the remaining nodes from list2
    if (list2) {
        curr.next = list2;
    }

    return dummy.next; // Return the merged list, skipping the dummy node
}


// Definition for singly-linked list node.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Create linked list instances for testing
const list1 = new ListNode(2);
list1.next = new ListNode(3);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(5);
list2.next.next = new ListNode(6);

// Merge the lists and log the result
const mergedList = mergeTwoLists(list1, list2);

// Helper function to print the linked list in a readable format
function printList(head) {
    let result = []; // Initialize an array to store the list values
    while (head !== null) { // Traverse the linked list
        result.push(head.val); // Append the current node's value to the result array
        head = head.next; // Move to the next node
    }
    console.log(result.join(" -> ")); // Print the list values in a readable format
}

printList(mergedList); // Output the merged list in a readable format


// Activity 5: Valid Parentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function to take a string containing just the characters '(',')','{','}','[' 
// and ']', and determines if the input string is valid.  A string is valid if open
// brackets and closed in the correct order. Log the result for a few test cases.
let isValid = function (s) {
    // Initialize an empty array called stack to keep track of opening brackets
    const stack = [];

    // Loop through each character in the string 's'
    for (let i = 0; i < s.length; i++) {
        // Get the current character
        const char = s[i];

        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
            // If the character is a closing bracket
        } else if (char === ')' || char === ']' || char === '}') {
            // If the stack is empty, there is no matching opening bracket
            if (isEmpty(stack)) {
                return false;
            }
            // Pop the top element from the stack
            const top = stack.pop();
            // Check if the popped element matches the current closing bracket
            if ((char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
        }
    }
    // After processing all characters, check if the stack is empty
    return isEmpty(stack);
}

// Helper function to check if the stack is empty
function isEmpty(stack) {
    return stack.length === 0;
}
console.log(isValid("()[]{}"));

// Tasks Completed