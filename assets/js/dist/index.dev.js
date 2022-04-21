"use strict";

var btnReset = document.querySelector('#button-reset');
var btnConvert = document.querySelector('#button-convert');
btnReset.addEventListener('click', reset);
btnConvert.addEventListener('click', convert);

function reset() {
  clearValue(getUserName());
  getUserName().focus();
  getResultInputs().forEach(function (item) {
    return setDisabled(item);
  });
}

function convert() {
  var userName = getUserName().value;
  var convertedName = userName.split(" ").filter(function (item) {
    return item !== '';
  }).map(function (item) {
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
  });
  printResult(convertedName);
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