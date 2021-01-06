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
    activeBtnCalendar,
    activeBtnConfig,
    activeBtnEmployee,
    activeBtnReports,
    darkMode,
    hideOthers,
    showEmployees
} from './functions.js';

btnEmployees.addEventListener('click', () => {
    if (document.querySelector('.container').childNodes.length === 0) {
        showEmployees();
    }
    activeBtnEmployee();
    hideOthers();
    containerEmployees.classList.remove('hide');
});

btnReports.addEventListener('click', () => {
    activeBtnReports();
    hideOthers();
    containerReports.classList.remove('hide');
})

btnCalendar.addEventListener('click', () => {
    activeBtnCalendar();
    hideOthers();
    containerCalendar.classList.remove('hide');  
})

btnConfig.addEventListener('click', () => {
    activeBtnConfig();
    hideOthers();
    containerConfig.classList.remove('hide');
})

btnDarkMode.addEventListener('click', darkMode);