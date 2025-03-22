let processOrder = (orderId, callback, delay) => {
  let date = new Date();
  console.log(`payment confirmed for ${orderId} at ${date.toLocaleString()}`);

  setTimeout(() => {
    let shippedTime = new Date();
    callback(`${orderId} shipped at ${shippedTime.toLocaleString()}`);
  }, delay);
};

processOrder(
  "ORDER123",
  (message) => {
    console.log(`${message}`);
    setTimeout(() => {
      console.log(`Final Confirmation: ${message}`);
    }, 2000);
  },
  3000
);
