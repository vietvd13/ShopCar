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

function formatPrice(price) {
    if (price) {
        let locale = Intl.NumberFormat('ko-KR');

        return locale.format(price);
    }

    return '0';
}

function elementInViewport(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left,  rect.top))
        ||  el.contains(efp(rect.right, rect.top))
        ||  el.contains(efp(rect.right, rect.bottom))
        ||  el.contains(efp(rect.left,  rect.bottom))
    );
}

function handleSrollTop() {
    const APP_SHOP = document.getElementsByClassName('app-shop');

    if (APP_SHOP.length) {
        APP_SHOP[0].scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
}

export {
    getArrValueOfArr,
    replaceValueWithIndex,
    generateSelect,
    formatPrice,
    elementInViewport,
    handleSrollTop
}