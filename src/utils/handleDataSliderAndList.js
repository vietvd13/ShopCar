function paginateList(arr, size) {
  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size);

    let page = acc[idx] || (acc[idx] = []);

    page.push(val);

    return acc;
  }, [])
}

function handleDataSliderAndList(items, type = 'list') {
  if (items.length) {
    if (type === 'list') {
      return items;
    }
  
    if (type === 'slider') {
      const result = paginateList(items, 4);
  
      if (result[result.length - 1].length < 4) {
        for (let i = 0; i < (4 - result[result.length - 1].length); i++) {
          (result[result.length - 1]).push(null);
        }
      }
  
      return result;
    }
  }

  return items;
}

export {
  handleDataSliderAndList
}