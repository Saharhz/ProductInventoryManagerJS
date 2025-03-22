let validateProductSKU = (sku) => {
  let skuregex = /^[A-Z]{3}-\d{6}$/;

  if (skuregex.test(sku)) {
    return "true";
  } else {
    return "false";
  }
};

let test = "ABC-123456";

console.log(validateProductSKU(test));

test = "123-ABCDEF";

console.log(validateProductSKU(test));
