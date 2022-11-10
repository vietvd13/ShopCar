function getArrValueOfArr(arr, key = 'id') {
    const len = arr.length;
    let idx = 0;

    const result = [];

    while (idx < len) {
        result.push(arr[idx][key]);

        idx++;
    }

    return result;
}

function replaceValueWithIndex(oldArr = [], newArr = [], listIndex = []) {
    return oldArr.map((item, idx) => {
        if (listIndex.includes(idx)) {
            return newArr.shift();
        }

        return item;
    })
}

export {
    getArrValueOfArr,
    replaceValueWithIndex
}