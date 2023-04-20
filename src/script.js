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
                <button onclick="nonlike()" id="btnFavourites"
                        class=" w-14 ml-5 font-medium text-slate-600 py-3 px-4  hover:text-amber-600 hover:scale-150 transition-all duration-300 ease-linear"
                    >
                        <svg
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
                    

                    </button>
                    <button onclick="like()" id="btnLike"
                        class="hidden w-14 ml-5 font-medium text-slate-600 py-3 px-4  hover:text-amber-600 hover:scale-150 transition-all duration-300 ease-linear"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  
                    

                    </button>
                    <button id="bookTour(${tour.id})" class="text-slate-600 font-medium border border-solid py-3 px-4 rounded-md bg-gradient-to-r from-slate-100 to-slate-200 hover:text-amber-600 transition-all duration-300 ease-linear">Забронировать</button>
                    </div>
                    
                </div>
               
            </div>
            `
    })

    tours.forEach((tour) => {
        document
            .getElementById(`bookTour(${tour.id})`)
            .addEventListener("click", () => bookingTour(tour))
            
    })
  
    // tours.forEach((tour) => {
    //     const tourB = document.getElementById(`bookTour(${tour.id})`)
    //     tourB = document.addEventListener("click", () => bookingTour(tour))
    //      document.getElementById(`booking`).style.display = "flex"
       
    // })
}

// Бронирование тура
function bookingTour(tour) {
    document.getElementById(`booking`).style.display = "flex"
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

    document.getElementById("booking").innerHTML = `
    <div class="flex box-content justify-end p-2">
    <button
                            id="btn-closeModal"
                            class="text-slate-500 hover:text-amber-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-8 h-8 hover:scale-125 transition-all duration-300 ease-linear"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
    </div>
       <div class="max-w-4xl mx-auto ">
         <div class="max-w-xl mx-auto grid grid-cols-2 > 
         <div class="shadow-lg  rounded-md bg-slate-100 flex flex-wrap grid grid-cols-2"> 
            <img class="rounded-md" src="${tour.image}"  />
            <div class="flex flex-col justify-between  mb-5">
                <div>
                  <p class="text-slate-700 text-base font-bold ml-5 ">${tour.hotelName}</p>
                  <div class="flex flex-wrap text-slate-500 text-s ml-5 ">
                  <p>${check}</p>
                  </div>

                </div>
            <div class="flex flex-wrap justify-between text-slate-500 mr-1 mt-6 ">
            <p class="text-slate-700 text-base font-bold ml-5"> ${tour.price} руб</p>
                <p class="rounded-md bg-orange-500 p-1 text-slate-100"> ${tour.rating}</p>
                <div class="text-slate-600 ml-3 mt-7">
               <p >${startDate} - ${endDate}</p>
            </div>
            </div>
         </div>
           
         
           
        </div>
        <div class="w-full flex flex-col px-10 py-6">
                        <form class="flex flex-col">
                            <label for="name">
                                Имя и фамилия<span class="text-red-500">*</span>
                            </label>
                            <input id="name" type="text" name="Name" class="rounded-md border"/>
                        </form> 
                        <form class="flex flex-col pt-2">
                            <label for="phone">
                                Телефон для связи<span class="text-red-500">*</span>
                            </label>
                            <input id="phone" type="text" name="phone" class="rounded-md border"/>
                        </form> 
                        <form class="flex flex-col pt-2">
                            <label for="email">
                                Электронная почта<span class="text-red-500">*</span>
                            </label>
                            <input id="email" type="text" name="email" class="rounded-md border"/>
                        </form> 
                        <form class="flex flex-col pt-2">
                            <label for="comment">
                                Комментарий
                            </label>
                            <textarea name="comment" class="h-16 rounded-md border"></textarea>
                        </form> 

                    </div>
                    <div class="flex justify-center">
                        <form>
                            <button class="ml-5 my-7 font-medium text-slate-600 border border-solid py-3 px-4 rounded-md bg-slate-100 hover:text-amber-600 " type="submit">Отправить запрос</button>
                        </form>

                    </div>

       
        `

        const btnCloseModal = document.getElementById("btn-closeModal")
        btnCloseModal.addEventListener("click", closeModal)
}
    // // чистая форма
    // function clearform() {
    //     document.getElementById("name").value = ""
    //     document.getElementById("phone").value = ""
    //     document.getElementById("email").value = ""
    // }


async function init() {
    const tours = await loadTour()
    renderTours(tours)
    //  страны
    const countries = Array.from(
        document.getElementsByClassName("dropdown-item")
    )

    countries.forEach((countryBtn) => {
        countryBtn.addEventListener("click", () =>
            filterCountry(tours, countryBtn.dataset.country)
        )
    })

    // цена
    document
        .getElementById("price-min")
        .addEventListener("click", () => sortPriceMin(tours, "По убыванию"))
    document
        .getElementById("price-max")
        .addEventListener("click", () => sortPricemMax(tours, "По возрастанию"))

    // рейтинг
    // делаем массив
    const ratings = Array.from(document.getElementsByClassName("ratingClass"))
    // проходим по всему массиву
    ratings.forEach((ratingInput) => {
        ratingInput.addEventListener("click", (event) =>
            filterRating(tours, event.target.value)
        )
    })
}
init()



//кнопка добавления списка туров
let tourInfo = document.getElementById("more")

const btnmore = document.getElementById("add")
btnmore.addEventListener("click", add)

function add() {
    tourInfo.style.display = "flex"
    renderTours(tour)
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

// фильтр по рейтингу
function filterRating(tours, rating) {
    const filterTours = tours.filter((tour) => {
        return tour.rating >= rating
    })
    renderTours(filterTours)
}

//закрытие бронирования

function closeModal() {
    let bookingModal = document.getElementById("booking")
    bookingModal.style.display = "none"
    console.log("closeModal")
}
