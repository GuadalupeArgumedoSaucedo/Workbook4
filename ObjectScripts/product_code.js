function parsePartCode(partCode) {
    const [supplierCode, productNumber, size] = partCode.split(/:|-/).map(str => str.trim());

    return { supplierCode, productNumber, size };
}

const partCode1 = "XYZ:1234-L";
const part1 = parsePartCode(partCode1);
console.log(`Supplier: ${part1.supplierCode} Product Number: ${part1.productNumber} Size: ${part1.size}`);
