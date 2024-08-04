// Challenge Started

// Activity 1 :  Median of Two Sorted Arrays

// Task 1: Solve the Median of Two Sorted Arrays problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of
// the two sorted arrays, Log the median for a few test cases, including edge cases.
let findMedianSortedArrays = function(nums1, nums2) {
    // Concatenate the two arrays into a single array `arr`
    let arr = nums1.concat(nums2);
    // Sort the combined array in ascending order
    arr.sort((a, b) => (a - b));

    // Get the length of the combined and sorted array
    let n = arr.length;
    
    // Check if the length of the array is even
    if (n % 2 === 0) {
        // If even, calculate the median as the average of the two middle numbers
        return ((arr[n / 2] + arr[n / 2 - 1]) / 2);
    } else {
        // If odd, the median is the middle number
        return arr[Math.floor(n / 2)];
    }
};
console.log(findMedianSortedArrays([1,3], [2]));