// Question 1

function reverseString(str) {
    return str.split("").reverse().join("");
    }
    
    console.log(reverseString("hello"));
    // Expected output: "olleh"

// Question2 
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
    }
    
    console.log(isPalindrome("racecar"));// Expected output: true
    console.log(isPalindrome("hello")); // Expected output: false

// Question 3
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

// Question 4
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));// Expected output: [1, 2, 3, 4, 5]

//Question 5
function factorial(n) {
    if(n===0){
        return 1;
    }else {
        return n* factorial(n-1);
    }
    }
    
    console.log(factorial(5)); // Output: 120

// Question 6
function fibonacci(n) {
    let fib =[0,1];
    while(fib.length <n){
        fib.push(fib[fib.length -1] + fib[fib.length-2]);
    }
    return fib;
}
console.log(fibonacci(5)); //output: [0,1,1,2,3]

// Question 8
function secondLargest(arr) {
    arr.sort((a, b) => b - a);
return arr[1];
}
console.log(secondLargest([10, 20, 4, 45, 99])); // Expected output: 45

// Question 7
function areAnagrams(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");

}
console.log(areAnagrams("listen", "silent")); //output: true