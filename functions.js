let users;
const containerEmployees = document.querySelector('.container');
const modal = document.querySelector('#modal-info');

const showEmployees = () => {

    const request = new Request('https://randomuser.me/api/?results=20', {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
    });
    fetch(request)
        .then(response => response.json())
        .then(data => users = data.results)
        .then(() => {
            let info;
            users.forEach(user => {
                const box = document.createElement('div');
                box.setAttribute('id', 'box');
                box.setAttribute('class', 'box');
                info = `<img src = ${user.picture.thumbnail} class="avatar">
                <div>
                <p class="name">${user.name.title}. ${user.name.first} ${user.name.last}</p>
                <p class="location">📍 ${user.location.country}</p>
                <div>`
                containerEmployees.appendChild(box);
                box.innerHTML = info;

                const showInfo = () => {
                    let userInfo = '';
                    const boxModal = document.createElement('div');
                    boxModal.setAttribute('id', 'box-modal');
                    boxModal.setAttribute('class', 'box-modal');
                    userInfo = `<div class="user">
                <span class="close" id="close">&times;</span>
                <img src = ${user.picture.large} class="avatarM">
                <p class="name-modal">${user.name.title}. ${user.name.first} ${user.name.last}</p>
                <div class="info-modal">
                <p>Gender: ${user.gender}</p>
                <p>Age: ${user.dob.age}</p>
                <p>Nationality: ${user.nat}</p>
                <p>Location: ${user.location.state}, ${user.location.country}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                </div>`
                    document.querySelector('#modal-info').appendChild(boxModal);
                    boxModal.innerHTML = userInfo;

                    const close = document.querySelector('#close');
                    close.addEventListener('click', () => {
                        modal.removeChild(boxModal);
                    });

                    window.addEventListener('click', (event) => {
                        if (event.target === document.querySelector('#box-modal')) {
                            modal.removeChild(modal.childNodes[0]);
                        }
                    });
                };

                box.addEventListener('click', () => {
                    showInfo(user);
                    modal.classList.remove('hide');
                });
            })
        })
}

const btnDarkMode = document.querySelector('#dark-mode');

const darkMode = () => {
    if (document.querySelector('body').style.backgroundColor === "") {
        btnDarkMode.classList.add('active');
        document.querySelector('body').style.backgroundColor = "rgb(53, 52, 52)";
        document.querySelector('body').style.color = "#fff";
    } else {
        btnDarkMode.classList.remove('active');
        document.querySelector('body').style.backgroundColor = "";
        document.querySelector('body').style.color = "rgb(63, 63, 63)";
    }
}

const btnEmployees = document.querySelector('#employees');
const btnReports = document.querySelector('#reports');
const btnCalendar = document.querySelector('#calendar');
const btnConfig = document.querySelector('#config');

const activeBtnEmployee = () => {
    btnEmployees.classList.add('active');
    btnReports.classList.remove('active');
    btnCalendar.classList.remove('active');
    btnConfig.classList.remove('active');
}

const activeBtnReports = () => {
    btnReports.classList.add('active');
    btnEmployees.classList.remove('active');
    btnCalendar.classList.remove('active');
    btnConfig.classList.remove('active');
}

const activeBtnCalendar = () => {
    btnCalendar.classList.add('active');
    btnEmployees.classList.remove('active');
    btnReports.classList.remove('active');
    btnConfig.classList.remove('active');
}


const activeBtnConfig = () => {
    btnConfig.classList.add('active');
    btnEmployees.classList.remove('active');
    btnReports.classList.remove('active');
    btnCalendar.classList.remove('active');
}

const containerAux = document.querySelector('.container-aux');
const containerReports = document.querySelector('.container-reports');
const containerCalendar = document.querySelector('.container-calendar');
const containerConfig = document.querySelector('.container-config');

const hideOthers = () => {
    const reportsChild = containerReports.childNodes.length;
    const calendarChild = containerCalendar.childNodes.length;
    const configChild = containerConfig.childNodes.length;
    const employeesChild = containerEmployees.childNodes.length;

    if (reportsChild != 0 || calendarChild != 0 || configChild != 0) {
        containerAux.classList.add('hide');
        containerReports.classList.add('hide');
        containerCalendar.classList.add('hide');
        containerConfig.classList.add('hide');
    }
    if (employeesChild != 0 || calendarChild != 0 || configChild != 0) {
        containerEmployees.classList.add('hide');
        containerAux.classList.add('hide');
        containerCalendar.classList.add('hide');
        containerConfig.classList.add('hide');
    }
    if (employeesChild != 0 || reportsChild != 0 || configChild != 0) {
        containerEmployees.classList.add('hide');
        containerAux.classList.add('hide');
        containerReports.classList.add('hide');
        containerConfig.classList.add('hide');
    }
    if (employeesChild != 0 || reportsChild != 0 || calendarChild != 0) {
        containerEmployees.classList.add('hide');
        containerAux.classList.add('hide');
        containerReports.classList.add('hide');
        containerCalendar.classList.add('hide');
    }
}

export {
    darkMode,
    showEmployees,
    activeBtnEmployee,
    activeBtnReports,
    activeBtnCalendar,
    activeBtnConfig, 
    hideOthers
}