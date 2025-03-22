let restockProduct = (productId) => {
  return new Promise((resolve, reject) => {
    let restocking = Math.random();

    setTimeout(() => {
      if (restocking > 0.5) {
        resolve(`Product with the ID ${productId} restocked successfully!`);
      } else {
        reject(`Failed to restock product with the ID ${productId}...`);
      }
    }, 5000);
  });
};

let restocksuccess = (message) => {
  console.log(message);
};

let restockfailure = (err) => {
  console.error(err);
};

restockProduct("PROD123").then(restocksuccess).catch(restockfailure);

(async () => {
  try {
    const message = await restockProduct("PROD123");
    console.log(message);
  } catch (err) {
    console.log(err);
  }
})();
