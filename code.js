function quicksort(arr) {
    if(arr.length === 0){
        return [];
    }
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length) {
        let end = stack.pop();
        let start = stack.pop();
        let pivotIndex = partition(arr, start, end);

        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }

    return arr;
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}
