import { format, max, min } from "date-fns"
const { ru } = require("date-fns/locale")

async function loadTour() {
    const response = await fetch(
        "https://www.bit-by-bit.ru/api/student-projects/tours"
    )
    const data = await response.json()
    return data
}

function renderTours(tours) {
    document.getElementById("moretour").innerHTML = ""
    tours.forEach((tour) => {
        let check
        if (tour.city && tour.city.length > 0) {
            check = tour.city + "," + tour.country
        } else {
            check = tour.country
        }

        const startDate = format(new Date(tour.startTime), "dd MMMM yyyy", {
            locale: ru
        })

        const endDate = format(new Date(tour.endTime), "dd MMMM yyyy", {
            locale: ru
        })

        document.getElementById("moretour").innerHTML += `
           <div class="max-w-4xl mx-auto ">
             <div class="shadow-lg  rounded-md bg-slate-100 flex flex-wrap grid grid-cols-2"> 
                <img class="rounded-l-md" src="${tour.image}"  />
                <div class="flex flex-col justify-between mt-5 mb-5">
                    <div>
                      <p class="text-slate-700 text-xl font-bold ml-5 ">${tour.hotelName}</p>
                        <div class="flex flex-wrap text-slate-500 text-xl ml-5 ">
                           <p>${check}</p>
                        </div>
                    </div>
                <div class="flex flex-wrap justify-between text-slate-500 mr-2 mt-8 ">
                <p class="text-slate-700 text-xl font-bold ml-5"> ${tour.price} руб</p>
                    <p class="rounded-md bg-orange-500 p-1 text-slate-100"> ${tour.rating}</p>
                </div>
                <div class="text-slate-600 ml-5 mt-9">
                   <p >${startDate} - ${endDate}</p>
                </div>
                <div class="flex flex-wrap justify-end mr-2">
                <button onclick="like()" id="noneLike"
                        class="w-14 ml-5 font-medium text-slate-600 py-3 px-4  hover:text-amber-600 hover:scale-150 transition-all duration-300 ease-linear"
                    >
                        <svg id="noLike"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                        <button class="text-slate-600 font-medium border border-solid py-3 px-4 rounded-md bg-gradient-to-r from-slate-100 to-slate-200 hover:text-amber-600 transition-all duration-300 ease-linear">Забронировать</button>

                    </button></div>
                    
                </div>
               
            </div>
            `
    })
}



// фильтр по стране
function filterCountry(tours, country) {
    if (country) {
        const filterTours = tours.filter((tour) => {
            return tour.country === country
        })
        renderTours(filterTours)
    } else {
        renderTours(tours)
    }
}

// сортировка по цене

function sortPriceMin(tours) {
    tours.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price)
    })
    renderTours(tours)
}
function sortPricemMax(tours) {
    tours.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

    renderTours(tours)
}

// // фильтр по рейтингу
// function filterRaiting (tours,rating){

//     if (rating>=8){

//        const filterTours = tours.filter((tour)=>{
//             return tour.rating===rating
//         })
//         renderTours(filterTours)
//     } else {
//         renderTours(tours)
//     }
// }

async function init() {
    const tours = await loadTour()
    renderTours(tours)
    //  страны
    document
        .getElementById("Tailand")
        .addEventListener("click", () => filterCountry(tours, "Тайланд"))
    document
        .getElementById("Egypt")
        .addEventListener("click", () => filterCountry(tours, "Египет"))
    document
        .getElementById("Cyprus")
        .addEventListener("click", () => filterCountry(tours, "Кипр"))
    document
        .getElementById("Maldives")
        .addEventListener("click", () => filterCountry(tours, "Мальдивы"))
    document
        .getElementById("Indonesia")
        .addEventListener("click", () => filterCountry(tours, "Индонезия"))
    document
        .getElementById("Mexico")
        .addEventListener("click", () => filterCountry(tours, "Мексика"))
    document
        .getElementById("Tanzania")
        .addEventListener("click", () => filterCountry(tours, "Танзания"))
    document
        .getElementById("all")
        .addEventListener("click", () => filterCountry(tours))

    // цена
    document
        .getElementById("price-min")
        .addEventListener("click", () => sortPriceMin(tours, "По убыванию"))
    document
        .getElementById("price-max")
        .addEventListener("click", () => sortPricemMax(tours, "По возрастанию"))

    // рейтинг
    document
        .getElementById("rating-1")
        .addEventListener("click", () => filterRaiting(tours, "7 и выше"))
    document
        .getElementById("rating-2")
        .addEventListener("click", () => filterRaiting(tours, "8 и выше"))
    document
        .getElementById("rating-3")
        .addEventListener("click", () => filterRaiting(tours, "9 и выше"))
    document
        .getElementById("rating-all")
        .addEventListener("click", () => filterRaiting(tours))
}
init()

//кнопка добавления списка туров
let tourInfo = document.getElementById("more")

const btnmore = document.getElementById("addTour")
btnmore.addEventListener("click", add)

function add() {
    tourInfo.style.display = "flex"
    renderTours(tours)
}

//кнопка вверх
const btnUp = {
    el: document.querySelector(".btn-up"),
    addEventListener() {
        document.querySelector(".btn-up").onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }
}
btnUp.addEventListener()

//закрытие списка туров
const btnClose = document.getElementById("btn-close")
btnClose.addEventListener("click", close)

function close() {
    tourInfo.style.display = "none"
}

//Меню страна

const dropdownBtn = document.getElementById("dropdownButton")
const dropdownMenu = document.getElementById("dropdownMenu")
const toggleArrow = document.getElementById("arrow")

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show")
    toggleArrow.classList.toggle("arrow")
}

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation()
    toggleDropdown()
})

document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown()
    }
})

// Меню  цена
const dropdownСheckboxBtn = document.getElementById("dropdownRadioButton")
const dropdownСheckboxMenu = document.getElementById("dropdownRadio")
const togglePrice = document.getElementById("price")

const toggleDropdownСheckbox = function () {
    dropdownСheckboxMenu.classList.toggle("show")
    togglePrice.classList.toggle("price")
}

dropdownСheckboxBtn.addEventListener("click", function (x) {
    x.stopPropagation()
    toggleDropdownСheckbox()
})

document.documentElement.addEventListener("click", function () {
    if (dropdownСheckboxMenu.classList.contains("show")) {
    }
})

// Меню  рейтинг
const dropdownRatingBtn = document.getElementById("dropdownRatingButton")
const dropdownRatingMenu = document.getElementById("dropdownRatingbox")
const toggleArrowRating = document.getElementById("arrowRating")

const toggleDropdownRating = function () {
    dropdownRatingMenu.classList.toggle("show")
    toggleArrowRating.classList.toggle("arrowRating")
}

dropdownRatingBtn.addEventListener("click", function (y) {
    y.stopPropagation()
    toggleDropdownRating()
})

document.documentElement.addEventListener("click", function () {
    if (dropdownRatingMenu.classList.contains("show")) {
    }
})
