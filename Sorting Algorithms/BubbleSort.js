function bubbleSort(nums) {
    const len = nums.length

    for(let i=0; i<len; i++) {
        for(let j=0; j<len - i; j++) {
            if(nums[j] > nums[j+1]) {
                const tmp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = tmp
            }
        }
    }
    return nums
}

console.log(bubbleSort([9,4,2,1,1,2,-9,0]))