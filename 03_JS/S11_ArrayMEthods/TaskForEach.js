var productData = [
  {
    pName: "Iphone 15",
    price: 90000,
  },
  {
    pName: "Iphone 14",
    price: 70000,
  },
  {
    pName: "Iphone 13",
    price: 50000,
  },
  {
    pName: "Iphone 12",
    price: 40000,
  },
];

//Print the Price of All the Products in the Terminal

productData.forEach(function (element, index) {
  var value = element.price;
  console.log(value);
});
