function analyzePassword(password) {
  const specialCharacters = /[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,./]/;
  const numbers = /\d/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;

  let totalCharacters = password.length;
  let specialCharCount = (password.match(specialCharacters) || []).length;
  let numbericCharCount = (password.match(numbers) || []).length;
  let uppercaseCharCount = (password.match(uppercase) || []).length;
  let lowercaseCharCount = (password.match(lowercase) || []).length;

  return {
    totalCharacters,
    specialCharCount,
    numbericCharCount,
    uppercaseCharCount,
    lowercaseCharCount,
  };
}

function validatePassword(password, passwordPolicy) {
  const analysis = analyzePassword(password);
  const errors = [];

  if (analysis.totalCharacters < passwordPolicy.minLenght) {
    errors.push(
      `Password should be at least ${passwordPolicy.minLenght} characters long`
    );
  }

  if (analysis.totalCharacters > passwordPolicy.maxLength) {
    errors.push(
      `Password should be no more than ${passwordPolicy.maxLength} characters long`
    );
  }

  if (analysis.specialCharCount < passwordPolicy.specialCharactor) {
    errors.push(
      `Password should have at least ${passwordPolicy.specialCharactor} special character(s)`
    );
  }

  if (analysis.numbericCharCount < passwordPolicy.numbericCharactor) {
    errors.push(
      `Password should have at least ${passwordPolicy.numbericCharactor} numeric character(s)`
    );
  }

  if (analysis.lowercaseCharCount < passwordPolicy.lowercaseCharactor) {
    errors.push(
      `Password should have at least ${passwordPolicy.lowercaseCharactor} lowercase character(s)`
    );
  }

  if (analysis.uppercaseCharCount < passwordPolicy.uppercaseCharactor) {
    errors.push(
      `Password should have at least ${passwordPolicy.uppercaseCharactor} uppercase character(s)`
    );
  }

  if (errors.length > 0) {
    return {
      password: password,
      isValidPassword: false,
      message: errors.join(", "),
    };
  }

  return { password: password, isValidPassword: true };
}

function main() {
  const password1 = "Pass12@";
  const password2 =
    "Pass123@Pass123@Pass123@Pass123@Pass123@Pass123@Pass123@Pass123@1";
  const password3 = "Pass1234";
  const password4 = "Passsss@";
  const password5 = "PASS123@";
  const password6 = "pass123@";
  const password7 = "ssssssss";
  const password8 = "Pass123@";
  const passwordPolicy = {
    minLenght: 8,
    maxLength: 64,
    specialCharactor: 1,
    numbericCharactor: 1,
    lowercaseCharactor: 1,
    uppercaseCharactor: 1,
  };

  console.log(validatePassword(password1, passwordPolicy));
  console.log(validatePassword(password2, passwordPolicy));
  console.log(validatePassword(password3, passwordPolicy));
  console.log(validatePassword(password4, passwordPolicy));
  console.log(validatePassword(password5, passwordPolicy));
  console.log(validatePassword(password6, passwordPolicy));
  console.log(validatePassword(password7, passwordPolicy));
  console.log(validatePassword(password8, passwordPolicy));
}

main();
// Ví dụ sử dụng:
