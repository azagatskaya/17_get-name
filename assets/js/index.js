"use strict";


const btnReset = document.querySelector('#button-reset');
const btnConvert = document.querySelector('#button-convert');

btnReset.addEventListener('click', reset);
btnConvert.addEventListener('click', convert);


function reset() {
	clearValue(getUserName());
	getUserName().focus();
	getResultInputs().forEach((item) => setDisabled(item));
}

function convert() {
	const userName = getUserName().value;
	console.log('UserName = ' + userName);
	let convertedName = userName.split(" ").filter((item) => {
		return item !== '';
	}).map((item => {
		return item[0].toUpperCase() + item.slice(1).toLowerCase();
	}));
	printResult(convertedName);
	console.log(convertedName);
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

function setFamilyName(arr) {
	document.querySelector('#family-name').value = arr[0];
}

function setFirstName(arr) {
	document.querySelector('#first-name').value = arr[1];
}

function setFathersName(arr) {
	document.querySelector('#fathers-name').value = arr[2];
}

function clearValue(el) {
	el.value = '';
}

function printResult(arr) {
	setFamilyName(arr);
	setFirstName(arr);
	setFathersName(arr);
	getResultInputs().forEach((item) => setEnabled(item));
}