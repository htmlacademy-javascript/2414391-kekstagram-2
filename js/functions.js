/*
Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
А
*/

function checkLength(str, maxLength) {
  if ((typeof str !== 'string')) {
    return `${str} не является строкой`
  }
  return str.length <= maxLength;
}

/* Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево */


function isPalindrome(str) {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return false;
  }
  let newStr = str.toString().replaceAll(" ", "").toLowerCase();

  return newStr === newStr.split("").reverse().join("");
}

function isPalindrome(str) {
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


