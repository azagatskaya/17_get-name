"use strict";

var btnReset = document.querySelector('#button-reset');
var btnConvert = document.querySelector('#button-convert');
btnReset.addEventListener('click', reset);
btnConvert.addEventListener('click', convert);

function reset() {
  clearValue(getUserName());
  getUserName().focus();
  setDisabledAll();
}

function convert() {
  if (getResultInputs() !== []) {
    setDisabledAll();
  }

  var userName = getUserName().value;
  var userNameRegExp = /[a-zа-я]/i;

  if (userNameRegExp.test(userName)) {
    var convertedName = userName.split(" ").filter(function (item) {
      return item !== '';
    }).map(function (item) {
      return item[0].toUpperCase() + item.slice(1).toLowerCase();
    });
    return convertedName.length === 3 ? printResult(convertedName) : alert("\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u043E\u0434\u0430 \u0434\u0430\u043D\u043D\u044B\u0445. \n\t\t\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0424\u0430\u043C\u0438\u043B\u0438\u044E, \u0418\u043C\u044F \u0438 \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E");
  } else {
    alert("Вы не ввели данные.");
  }
}

function getUserName() {
  return document.querySelector('.form-control');
}

function getResultInputs() {
  return document.querySelectorAll('.result__input');
}

function setEnabled(el) {
  el.removeAttribute('disabled');
}

function setDisabledAll() {
  getResultInputs().forEach(function (item) {
    return setDisabled(item);
  });
}

function setDisabled(el) {
  el.disabled = true;
  el.value = '';
}

function setName(selector, value) {
  document.querySelector(selector).value = value;
}

function clearValue(el) {
  el.value = '';
}

function printResult(arr) {
  setName('#family-name', arr[0]);
  setName('#first-name', arr[1]);
  setName('#fathers-name', arr[2]);
  getResultInputs().forEach(function (item) {
    return setEnabled(item);
  });
}