// function bubbleSort(nums) {
//     const len = nums.length

//     for(let i=0; i<len; i++) {
//         for(let j=0; j<len - i; j++) {
//             if(nums[j] > nums[j+1]) {
//                 const temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//             }
//         }
//     }
//     return nums
// }

// console.log(bubbleSort([9,8,6,4,3,1,-1,99]))



// function selectionSort(nums) {
//     const len = nums.length

//     for(let i=0; i<len; i++) {
//         let min = i
//         for(let j=i+1; j<len; j++) {
//             if(nums[min] > nums[j]) {
//                 min = j
//             }
//         }

//         if(min != i) {
//             const tmp = nums[i]
//             nums[i] = nums[min]
//             nums[min] = tmp
//         }
//     }
//     return nums
// }

// console.log(selectionSort([9,8,6,4,3,1,-1,99]))




// function quickSort(nums) {
//     if(nums.length < 2) {
//         return nums
//     }
//     const less = []
//     const more = []
//     const randomIndex = Math.round(Math.random() * (nums.length - 1))
//     const pivot = nums[randomIndex]

//     for(let i=0; i<nums.length; i++) {
//         if(i !== randomIndex)
//             nums[i] > pivot ? more.push(nums[i]) : less.push(nums[i])
//     }
//     return [...quickSort(less), pivot, ...quickSort(more)]
// }

// console.log(quickSort([9,8,6,4,3,1,-1,99]))

// O(n^2)
// O(n*logn)
// constant *n*logn = O(n*logn)
function quickSort(nums) {

    const n = nums.length // 10 [9]

    if(n < 2) {
        return nums
    }

    const less = []
    const more = []
    const randomIndex = Math.round(Math.random() * (n-1))
    const pivot = nums[randomIndex]

    for(let i=0; i<n; i++) {
        if(i != randomIndex)
            pivot > nums[i] ? less.push(nums[i]) : more.push(nums[i])
    }

    return quickSort(less).concat(pivot, quickSort(more))
}

console.log(quickSort([1,2,3,4,5,6]))


