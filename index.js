const btnEmployees = document.querySelector('#employees');
const btnReports = document.querySelector('#reports');
const btnCalendar = document.querySelector('#calendar');
const btnConfig = document.querySelector('#config');
const btnDarkMode = document.querySelector('#dark-mode');
const containerEmployees = document.querySelector('.container');
const containerAux = document.querySelector('.container-aux');
const containerReports = document.querySelector('.container-reports');
const containerCalendar = document.querySelector('.container-calendar');
const containerConfig = document.querySelector('.container-config');

import {
    darkMode,
    showEmployees
} from './functions.js';

btnEmployees.addEventListener('click', () => {
    containerAux.classList.add('hide');
    if (document.querySelector('.container').childNodes.length === 0) {
        showEmployees();
    }
    btnEmployees.classList.add('active');
    btnReports.classList.remove('active');
    btnCalendar.classList.remove('active');
    btnConfig.classList.remove('active');
    containerEmployees.classList.remove('hide');
    containerReports.classList.add('hide');
    containerCalendar.classList.add('hide');
    containerConfig.classList.add('hide');
});

btnReports.addEventListener('click', () => {
    containerAux.classList.add('hide');
    if (document.querySelector('.container').childNodes.length !== 0) {
        containerEmployees.classList.add('hide');
    }
    btnReports.classList.add('active');
    btnEmployees.classList.remove('active');
    btnCalendar.classList.remove('active');
    btnConfig.classList.remove('active');
    containerReports.classList.remove('hide');
    containerCalendar.classList.add('hide');
    containerConfig.classList.add('hide');
})

btnCalendar.addEventListener('click', () => {
    containerAux.classList.add('hide');
    if (document.querySelector('.container').childNodes.length !== 0) {
        containerEmployees.classList.add('hide');
    }
    btnCalendar.classList.add('active');
    btnEmployees.classList.remove('active');
    btnReports.classList.remove('active');
    btnConfig.classList.remove('active');
    containerReports.classList.add('hide');
    containerConfig.classList.add('hide');
    containerCalendar.classList.remove('hide');
})

btnConfig.addEventListener('click', () => {
    containerAux.classList.add('hide');
    if (document.querySelector('.container').childNodes.length !== 0) {
        containerEmployees.classList.add('hide');
    }
    btnConfig.classList.add('active');
    btnEmployees.classList.remove('active');
    btnReports.classList.remove('active');
    btnCalendar.classList.remove('active');
    containerReports.classList.add('hide');
    containerCalendar.classList.add('hide');
    containerConfig.classList.remove('hide');
})

btnDarkMode.addEventListener('click', darkMode);