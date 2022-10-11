
"use script"
    function parsePartCode(partCode) {
        let colonPosition = partCode.indexOf(":");
        console.log();
        let dashPosition = partCode.indexOf("-");

     let supplierCode = partCode.substring(0,colonPosition);

     let size= partcode.substring(dashposition)
    
     
     
     let partNumber = partCode.substring(colonPosition + 1, dashPosition);
console.log(partNumber);
    
    

    let partInformation = {
        supplierCode: supplierCode,
        productNumber: partNumber,
        size: size,
    };
    return partInformation;

}

let partCode1 = "XYZ:1234-L";
let partInformation = parsePartCode(partCode1);
console.log(partInformation);