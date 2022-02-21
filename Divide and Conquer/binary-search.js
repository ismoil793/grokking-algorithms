function findIndex(arr, search) {
    let start = 0
    let end = arr.length - 1

    while(end >= start) {
        const mid = Math.floor((start + end) / 2)
        if(arr[mid] === search) {
            return mid
        }
        else if(arr[mid] > search) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return - 1
}

console.log(findIndex([1,2,3,4,5,6,7,8,9], 5))