function parsePartcode(code)
{
    let parts = code.split(":");
    let partCode1 = parts[0];
    let partCode2 = parts[1].split("-")[0];
    let partCode3 = parts[1].split("-")[1];
    
    const product = {
        supplierCode: partCode1, 
        productNumber: partCode2, 
        size: partCode3 
    };
    return product
};


let shoes = "abs:92348-xl";
let displayProduct = parsePartcode(shoes);
console.log(`Supplier Code: ${displayProduct.supplierCode} Supplier Code: ${displayProduct.supplierCode} Supplier Code: ${displayProduct.supplierCode}`)