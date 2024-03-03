function Counter(arr){
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) +1;
        return acc;
    })
}

function findMode(arr){
    let freqCounter = Counter(arr);
    let count = 0;
    let mostFrequent;
    for(let key in freqCounter){
        if(freqCounter[key]> count){
            mostFrequent=key;
            count = freqCounter[key];
        }
    }
}

function convert(numsAsStrings){
    let result = [];
    for (let i=0; i<numsAsStrings.length; i++){
        let valNumber = Number(numsAsStrings[i]);
        if(Number.isNaN(valToNumber)){
            return new Error("This isn't a valid number");
        }
        result.push(valToNumber);
    }
    return result;
}


function findMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function(acc, cur){
        return acc + cur;
    }) /nums.length
}

function findMedian(nums){
    nums.sort((a,b) =>a-b);
    let middleIndex = Math.floor(nums.length/2);
    let median;

    if(nums.length % 2 ===0){
        median = (nums[middleIndex] + nums[middleIndex -1])/2;
    }else{
        median = nums[middleIndex];
    }
    return median;
}


module.exports = {
    convert,
    findMean,
    findMode,
    findMedian,
    Counter
};