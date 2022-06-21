/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, maxLength=0) {
  if (i === words.length) return maxLength
  maxLength = Math.max(words[i].length, maxLength)
  return longest(words, i+1, maxLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, res=[]) {
  if (i > str.length) return res.join('')
  res.push(str[i])
  return everyOther(str, i+2, res)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i >= str.length-1-i) return true
  if (str[i] !== str[str.length-1-i]) return false
  return isPalindrome(str, i+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1
  if (arr[i] === val) return i
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, reverse='') {
  if (i === str.length) return reverse
  reverse += str[str.length-1-i]
  return revString(str, i+1, reverse)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strs = []) {
  for (let item in obj) {
    if (typeof obj[item] === 'object') {
      gatherStrings(obj[item], strs)
    }
    else {
      if (typeof obj[item] === 'string') {
        strs.push(obj[item])
      }
    }
  }
  return strs
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
