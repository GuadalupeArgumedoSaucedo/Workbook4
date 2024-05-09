function parsePartCode(partCode) {
    // Splitting the part code into supplierCode, productNumber, and size
    const [supplierCode, rest] = partCode.split(':');
    const [productNumber, size] = rest.split('-');

    // Creating an object with parsed values
    const parsedPart = {
        supplierCode: supplierCode.trim(),
        productNumber: productNumber.trim(),
        size: size.trim()
    };

    return parsedPart;
}

// Example usage
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
            " Product Number: " + part1.productNumber +
            " Size: " + part1.size);