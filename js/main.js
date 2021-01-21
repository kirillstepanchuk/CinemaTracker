"use strict";

const bookedTicketCount = document.querySelector(".booked-ticket-count");
const bookedTicketCost = document.querySelector(".booked-ticket-cost");
const placeUnits = document.querySelectorAll(".place");
const placeUnitsVip = document.querySelectorAll(".place--vip");

const changeTicketCost = (evt) => {
    if (!evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent += evt.target.dataset.cost; 
        console.log('evt.target.cost: ', evt.target.dataset.cost);
    } else {
        bookedTicketCost.textContent -= evt.target.dataset.cost; 
    }
}



// placeUnitsVip.forEach((item) => {
//     item = {
//         cost: 1000,
//     }
// })

const changePlaceConditionOnBooked = (evt) => {
    if (!evt.target.classList.contains("place--booked")) {
        evt.target.classList.add("place--booked");
        bookedTicketCount.textContent++;
        
    } else {
       evt.target.classList.remove("place--booked");
       bookedTicketCount.textContent--;
    }
}

for (let placeUnit of placeUnitsVip) {
    placeUnit.addEventListener("click", changeTicketCost);
}

for (let placeUnit of placeUnits) {
    placeUnit.addEventListener("click", changePlaceConditionOnBooked);
}
