// Removes dots and dashes from the string and
// returns another string with only the first 9 numbers in it
function cleanCpf(cpfWithDotsAndDashes) {
  let cpfOnlyNumbers = cpfWithDotsAndDashes
    .replaceAll('.', '')
    .replace('-', '');
  let cpfOnlyNumbersAndNineDigits = cpfOnlyNumbers.substr(0, 9);
  return cpfOnlyNumbersAndNineDigits;
}

// Multiplies and sum all the digits in the CPF
// returns the sum
function multiplicateAndSumCpfDigits(cpf) {
  let sum = 0;
  // Multiplication from 10/11 to 2, left to right in CPF digits then sum
  for (let i = 0; i < cpf.length; i++) {
    sum += parseInt(cpf[i]) * (cpf.length - i + 1);
  }
  return sum;
}

// Divides the sum of the previous multiplication by 11
// and gets the remainder, then compares it to define the digit
function divideAndDefineDigit(sum) {
  let remainder = sum % 11;
  let digit;
  if (remainder < 2) {
    digit = 0;
  } else if (remainder >= 2) {
    digit = 11 - remainder;
  }
  return digit;
}

// Given a CPF, gets the 9 first numbers, calculates the sum for those 9,
// then finds the first digit. With the first digit and the previous 9,
// calculates the sum for those 10 and finds the second digit.
// Returns the CPF with both digits in it
function resolveCpfDigits(cpf) {
  const cpfOnlyNumbers = cleanCpf(cpf);
  const sumOfCpfWithLength9 = multiplicateAndSumCpfDigits(cpfOnlyNumbers);
  const firstDigit = divideAndDefineDigit(sumOfCpfWithLength9);
  const cpfOnlyNumbersAndFirstDigit = cpfOnlyNumbers + String(firstDigit);
  const sumOfCpfWithLength10 = multiplicateAndSumCpfDigits(
    cpfOnlyNumbersAndFirstDigit
  );
  const secondDigit = divideAndDefineDigit(sumOfCpfWithLength10);
  const cpfWithBothDigits = cpfOnlyNumbersAndFirstDigit + String(secondDigit);
  return cpfWithBothDigits;
}

// With the CPF given by the user and the CPF calculated by the algorithm above,
// compares them and checks if they match. If they don't, it should throw the 422 response.
function compareCpf(cpfGivenByUser, cpfCalculated) {
  const cpfOnlyNumbersFromUser = cpfGivenByUser
    .replaceAll('.', '')
    .replace('-', '');
  if (cpfOnlyNumbersFromUser !== cpfCalculated) {
    console.log('CPF invalid');
  } else {
    console.log('true');
  }
}
