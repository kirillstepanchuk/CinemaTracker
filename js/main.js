"use strict";

const HALL = {
    PLACE_VIP: {
        cost: 1000,
        className: "place--vip",
    },
    PLACE_HIGH_COST: {
        cost: 750,
        className: "place--high-price",
    },
    PLACE_MEDIUM_COST: {
        cost: 500,
        className: "place--medium-price",
    },
    PLACE_LOW_COST: {
        cost: 250,
        className: "place--low-price",
    },
}

const bookedTicketCount = document.querySelector(".booked-ticket-count");
const bookedTicketCost = document.querySelector(".booked-ticket-cost");
const placeUnits = document.querySelectorAll(".place");

const addTicketCost = (evt) => {
    if (evt.target.classList.contains("place--vip") && evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent + +HALL.PLACE_VIP.cost
    } else if (evt.target.classList.contains("place--vip") && !evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent - +HALL.PLACE_VIP.cost
    } else if (evt.target.classList.contains("place--high-price") && evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent + +HALL.PLACE_HIGH_COST.cost
    } else if (evt.target.classList.contains("place--high-price") && !evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent - +HALL.PLACE_HIGH_COST.cost
    } else if (evt.target.classList.contains("place--medium-price") && evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent + +HALL.PLACE_MEDIUM_COST.cost
    } else if (evt.target.classList.contains("place--medium-price") && !evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent - +HALL.PLACE_MEDIUM_COST.cost
    } else if (evt.target.classList.contains("place--low-price") && evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent + +HALL.PLACE_LOW_COST.cost
    } else if (evt.target.classList.contains("place--low-price") && !evt.target.classList.contains("place--booked")) {
        bookedTicketCost.textContent = +bookedTicketCost.textContent - +HALL.PLACE_LOW_COST.cost
    }
}

const changePlaceConditionOnBooked = (evt) => {
    if (!evt.target.classList.contains("place--booked")) {
        evt.target.classList.add("place--booked");
        bookedTicketCount.textContent++;
        
    } else {
       evt.target.classList.remove("place--booked");
       bookedTicketCount.textContent--;
    }
}

for (let placeUnit of placeUnits) {
    placeUnit.addEventListener("click", changePlaceConditionOnBooked);
}

for (let placeUnit of placeUnits) {
    placeUnit.addEventListener("click", addTicketCost);
}
