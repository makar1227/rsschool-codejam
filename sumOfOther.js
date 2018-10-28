function sumOfOther(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = sum - arr[i];
    }
    return result;
}