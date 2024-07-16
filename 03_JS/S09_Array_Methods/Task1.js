var data = {
  id: 5000,
  name: "Krishna",
  address: {
    city: "Lucknow",
    country: {
      state1: ["Bhopal", "gwa", "Indore", "Jabal"],
      state2: "TS",
      state3: "AP",
      state4: "MH",
    },
  },
};
data.adress.country.state1[2];

// Access the Value of State4 Property and print value in the Terminal
console.log(data.address.country.state4);

console.log(data.name);
console.log(data.addresss.city);

//update
data.address.city = "Kanpur";

// Task is to change the value of state Property to MP
