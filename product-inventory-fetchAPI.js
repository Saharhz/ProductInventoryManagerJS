fetch("https://fakestoreapi.com/products/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let { category, price } = data;
    console.log(category, price);
  })
  .catch((error) => {
    console.log(error.message);
  });
