function createSOPList(rawStr) {
    let result = rawStr.split(' ');
    result.forEach((element, index) => {
        result[index] = element.split('&');
    });
    return result;
}

function transformSOPList(SOPList, transformer) {
    SOPList.forEach((prod, i) => {
        prod.forEach((element, j) => {
            SOPList[i][j] = transformer(element);
        });
    });
}

function reduceSOPList(SOPList) {
    let result = structuredClone(SOPList);
    result.forEach((element, index) => {
        result[index] = element.reduce((partialProd, currentValue) => partialProd.filter(x => currentValue.includes(x)), []);
    });
    result = result.reduce((partialSum, currentValue) => partialSum.concat(currentValue.filter(x => !partialSum.includes(x))), []);
    return result;
}
