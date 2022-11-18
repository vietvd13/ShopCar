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

        return item.url;
    })
}

function generateSelect(arr = [], generateNewArr = false, value_key = 'id', text_key = 'name') {
    const len = arr.length;
    let idx = 0;

    const result = [];

    while (idx < len) {
        if (generateNewArr) {
            result.push({
                value: arr[idx],
                text: arr[idx],
            })
        } else {
            result.push({
                value: arr[idx][value_key],
                text: arr[idx][text_key],
            })
        }

        idx++;
    }

    return result;
}

export {
    getArrValueOfArr,
    replaceValueWithIndex,
    generateSelect
}