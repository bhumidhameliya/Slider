const currentDate = document.querySelector(".current-date");
const dayTag = document.querySelector(".days");
const nextPrevButton = document.querySelectorAll("header span");
const doublenextPrevButton = document.querySelectorAll("header div");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

console.log(date, currYear, currMonth);
const renderCalander = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active now selected" : "";
        liTag += `<li class="${isToday}"  onclick="selectDate(this)">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    dayTag.innerHTML = liTag;
}

function selectDate(element) {
    const selectedDate = document.querySelector(".selected");
    if (selectedDate) {
        selectedDate.classList.remove("selected");
    }
    element.classList.add("selected");
}

renderCalander();

nextPrevButton.forEach(icon => {

    icon.addEventListener("click", () => {

        currMonth = icon.id === "left" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } 
        renderCalander();
    });

})

doublenextPrevButton.forEach(icon => {
    icon.addEventListener("click", () => {
        currYear = icon.id === "doubleLeft" ? currYear - 1 : currYear + 1;
        renderCalander();
    })
})

function currentdate() {
    date = new Date();
    currYear = date.getFullYear();
    currMonth = date.getMonth();
    renderCalander();
}