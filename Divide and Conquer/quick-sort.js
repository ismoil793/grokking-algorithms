function qsort(arr) {
    if(arr.length < 2) {
        return arr
    }
    // const randomIndex = Math.round(Math.random() * (arr.length - 1))
    // const pivot = arr[randomIndex]
    const pivot = arr[0]
    const less = []
    const greater = []

    // for(let i = 0; i < arr.length; i++) {
    for(let i = 1; i < arr.length; i++) {
        // if(i !== randomIndex) 
        arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i])
        
    }
    return qsort(less).concat(pivot, qsort(greater))
}

// O(n * logn)

console.log(qsort([7,-1,5,8,91,-100, 0, 1, 1, 8, 77]))