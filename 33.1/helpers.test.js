const {
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");

  describe("#findMean", function(){
    it("find the mean", function(){
        expect(findMean([2,4,6,2])).toEqual(3.5)
    })
  })

  describe("#findMedian", function(){
    it("find the median", function(){
        expect(findMedian([2,4,6])).toEqual(4)
    })
  })

  describe("#findMode", function(){
    it("find the mode", function(){
        expect(findMode([2,4,6,2])).toEqual(2)
    })
  })