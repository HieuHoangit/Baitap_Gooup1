const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};

const address = {
  street: "123 Main St",
  city: "Hometown",
  zipCode: "12345",
};

const result = {
  ...user,
  address: { ...address },
};

export { result };
