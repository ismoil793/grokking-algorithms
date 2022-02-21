// faster than BubbleSort, because it swaps less elements

function selectionSort(nums) {
    const len = nums.length

    for(let i=0; i<len; i++) {
        let min = i
        for(let j=i+1; j<len; j++) {
            if(nums[min] > nums[j]) {
                min = j
            }
        }
        if(min != i) {
            const tmp = nums[i]
            nums[i] = nums[min]
            nums[min] = tmp
        }
    }
    return nums
}


console.log(selectionSort([9,4,2,1,1,2,-9,0]))