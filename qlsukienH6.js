function isValidDate(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1000 ||
    year > 9999
  ) {
    return false;
  }

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function main() {
  console.log(isValidDate("29-02-2024")); // true
  console.log(isValidDate("31-04-2023")); // false
  console.log(isValidDate("15-12-2022")); // true
  console.log(isValidDate("32-01-2024")); // false
  console.log(isValidDate("15-13-2024")); // false
  console.log(isValidDate("15-12-999")); // false
}

main();
