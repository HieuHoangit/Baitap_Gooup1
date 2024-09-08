function printUserInfo(user) {
  const { name, age, email } = user;

  console.log(`User Info:
    Name: ${name}
    Age: ${age}
    Email: ${email}`);
}

const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

printUserInfo(user);

function logger(...messages) {
  console.log(messages.join(" | "));
}

logger("Error", "404", "Page not found");

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Fetch data successfully!");
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
