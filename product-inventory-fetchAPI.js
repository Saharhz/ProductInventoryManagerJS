fetch("https://fakestoreapi.com/products/1")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    const totalProducts = products.length;
    const totalPrice = products.reduce((sum, product) => sum + products.price);
    const averagePrice = totalPrice / totalProducts;
    const expensive = products.sort((max, product) => {
      return product.price > max.price ? product : max;
    });
    const cheapest = products.sort((min, product) => {
      return product.price > min.price ? product : min;
    });

    console.log(`Total number of Products: ${totalProducts}`);
    console.log(`Average price: ${averagePrice}`);
    console.log(`Most expensive: ${expensive}`);
    console.log(`the cheapest: ${cheapest}`);
  })
  .then((data) => {
    let { category, price } = data;
    console.log(category, price);
  })
  .catch((error) => {
    console.log(error.message);
  });
