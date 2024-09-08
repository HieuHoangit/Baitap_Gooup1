const obj = {
  name: "Jane",
  age: null,
  email: "jane@example.com",
  phone: undefined,
  address: "456 Second St",
};

function removeNullUndefined(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );
}

const cleanedObj = removeNullUndefined(obj);
export { cleanedObj };
