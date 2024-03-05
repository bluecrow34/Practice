function product(num, idx=0){
    if (idx === nums.length) return 1;
    return num[idx] * product(nums, idx +1);
}

function longest(word, idx=0, result=0){
    if(idx ===word.length) return result;
    result = Math.max(word[idx].length, result);
    return longest(words, idx+1, result);
}

function everyOther(word, idx=0, letters=""){
    if (idx >=word.length) return letters;
    letters += word[idx];
    return everyOther(word, idx +2, letters);
}

function isPalindrome(str, idx=0){
    let leftidx = idx;
    let rightidx = str.length - idx-1;
    if(leftidx >= rightidx) return true;
    if(str[leftidx] !== str[rightidx]) return false;
    return isPalindrome(str, idx+1);
}

function findIndex(arr, val, idx=0){
    if(idx === arr.length) return -1;
    if (arr[idx] === val) return idx;
    return findIndex(arr,val, idx +1);
}

function revString(str, idx=0, newStr=""){
    if(newStr.length === str.length) return newStr;
    newStr += str[str.length -1-idx];
    return revString(str, idx+1, newStr)
}

function gatherStrings(obj){
    let stringArr=[];
    for(let key in obj){
        if(typeof obj[key] === "string") stringArr.push(obj[key]);
        if(typeof obj[key] === "object") stringArr.push(gatherStrings(obj[key]));
    }
    return stringArr;
}

function binarySearch(arr,val, left=0, right=arr.length){
    if(left>right){
        return -1;
    }
    let middle = Math.floor((right + left)/2);
    if(arr[middle]===val){
        return middle;
    }
    if(arr[middle] > val){
        return binarySearch(arr, val, left, middle -1);
    }
    return binarySearch(arr, val, middle+1, right);
}
