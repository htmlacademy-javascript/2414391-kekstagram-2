/*
Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
А
*/

function checkLength(str, maxLength) {
  if ((typeof str !== 'string')) {
    return false;
  }
  if (typeof maxLength !== 'number' || maxLength < 0) {
    return false;
  }

  return str.length <= maxLength;
}

/* Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево */


//v1

function isPalindromeV1(str) {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return false;
  }
  let newStr = str.toString().replaceAll(" ", "").toLowerCase();

  return newStr === newStr.split("").reverse().join("");
}

//v2

function isPalindromeV2(str) {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return false;
  }
  let newStr = str.toString().replaceAll(" ", "").toLowerCase();
  let result = '';

  for (let i = newStr.length - 1; i >= 0; i--) {
    result += newStr[i];
  }

  return result === newStr;
}

/* Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
Предусмотрите случай, когда вместо строки приходит число. Возвращать функция по-прежнему должна только целые положительные числа*/

function getNumbersFromString(str) {
  let result = '';

  if (typeof str !== 'string') {
    str = str.toString();
  }
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i]))) {
      result += str[i];
    }
  }

  return result.length !== 0 ? parseInt(result) : NaN;
}
