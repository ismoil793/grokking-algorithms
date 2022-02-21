function quickSort(nums) {
    const len = nums.length

    if(len < 2) {
        return nums
    }

    const randomIndex = Math.round(Math.random() * (len - 1)) 
    const pivot = nums[randomIndex]
    const less = []
    const greater = []

    for(let i=0; i<len; i++) {
        if(i !== randomIndex) {
            nums[i] <= pivot ? less.push(nums[i]) : greater.push(nums[i])
        }
    }

    return quickSort(less).concat(pivot, quickSort(greater))
}

console.log(quickSort([7,-1,5,8,91,-100, 0, 1, 1, 8, 77]))