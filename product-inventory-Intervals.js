let monitorInventory = (productId, callback, interval) => {
  let stockLevel = 50;

  let intervalTime = setInterval(() => {
    let currentDate = new Date();

    let calculateStock = Math.floor(Math.random() * 5) + 1;
    let changeStock = Math.random() > 0.5 ? 1 : -1;
    stockLevel += calculateStock * changeStock;

    callback(
      `${productId} at ${currentDate.toLocaleString()}; Stock Level is ${stockLevel}`
    );
  }, interval);

  setTimeout(() => {
    clearInterval(intervalTime);
    console.log(`monitoring finished for ${productId}`);
  }, 30000);
};

monitorInventory("PROD123", (stock) => console.log(stock), 5000);
