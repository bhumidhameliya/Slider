const currentDate = document.querySelector(".current-date");
const dayTag = document.querySelector(".days");
const nextPrevButton = document.querySelectorAll("header span");
const doublenextPrevButton = document.querySelectorAll("header div");

let date = new Date();
var formattedDate = date.toDateString();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let selectD = "";


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

console.log(date, currYear, currMonth);
const renderCalander = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive prev" data-date="${months[currMonth - 1]} ${lastDateOfLastMonth - i + 1} ${currYear}" onclick="selectDate(this)">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active now selected" : "";
        liTag += `<li class="${isToday}" data-date="${months[currMonth]} ${i} ${currYear}"  onclick="selectDate(this)">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive next"  data-date="${months[currMonth + 1]} ${i - lastDayOfMonth + 1} ${currYear}" onclick="selectDate(this)">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    dayTag.innerHTML = liTag;
    document.getElementById("date").textContent = 'Current selected date is : ' + formattedDate;

    let selectE = "";
    if (selectD) {
        const selectedDate = document.querySelector(".selected");
        if (!selectedDate) {
            selectE = document.querySelector(`[data-date="${selectD}"]`);
            selectE.classList.add("selected");
            selectDate(selectE);
        }
    } 

}

function selectDate(element) {
    selectD = element.getAttribute("data-date");

    const selectedDate = document.querySelector(".selected");
    if (selectedDate) {
        selectedDate.classList.remove("selected");
    }
    element.classList.add("selected");
    
    const isActive = !element.classList.contains("inactive");
    const isPrev = element.classList.contains("prev");
    const isNext = element.classList.contains("next");


    if (!isActive) {
        const selectedMonth = months.indexOf(element.getAttribute("data-date").split(" ")[0]);
        const selectedYear = parseInt(element.getAttribute("data-date").split(" ")[2]);
        if (isPrev) {
            currMonth = selectedMonth;
            if (currMonth < 0) {
                currMonth = 11;
                currYear = selectedYear - 1;
            } else {
                currYear = selectedYear;
            }
        } else if (isNext) {
            currMonth = selectedMonth;
            if (currMonth > 11) {
                currMonth = 0;
                currYear = selectedYear + 1;
            } else {
                currYear = selectedYear;
            }
        }
        renderCalander();
    } else {
        document.getElementById("date").textContent = 'Current selected date is : ' + new Date(element.getAttribute("data-date")).toDateString();
    }
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