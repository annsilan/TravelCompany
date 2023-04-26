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
      
        <div class=" mx-auto bg-slate-200 my-20 box-content p-5  rounded-md">
            <div class="flex  justify-end p-1">
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
        <div class="max-w-lg mx-auto grid grid-cols-2 > 
            <div class="shadow-lg  rounded-md bg-slate-100 flex flex-wrap grid grid-cols-2"> 
                <img class="rounded-md" src="${tour.image}"  />
                <div class="flex flex-col justify-between  mb-5">
                    <div>
                       <p class="text-slate-700 text-s font-bold ml-3 ">${tour.hotelName}</p>
                        <div class="flex flex-wrap text-slate-500 text-s ml-3 ">
                          <p>${check}</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-between text-slate-500 mr-1 mt-6 ">
                       <p class="text-slate-700 text-s font-bold ml-3"> ${tour.price} руб</p>
                       <div class="text-slate-600 ml-3 mt-5">
                          <p class="text-s ">${startDate} - ${endDate}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" flex flex-col px-2  ">
                <form class="flex flex-col text-s">
                    <label for="Name" class="text-xs">
                        Имя и фамилия<span class="text-red-500">*</span>
                    </label>
                    <input id="Name" type="text" name="Name" class="rounded-md border" />
                    <label for="phone" class="text-xs pt-2" >
                        Телефон для связи<span class="text-red-500">*</span>
                    </label>
                    <input id="phone" type="text" name="phone" class="rounded-md border"/>
                    <label for="email" class="text-xs pt-2">
                        Электронная почта<span class="text-red-500">*</span>
                    </label>
                    <input id="email" type="text" name="email" class="rounded-md border"/>
                    <label for="comment" class="text-xs pt-2">
                        Комментарий
                    </label>
                    <textarea name="comment" class="h-16 rounded-md border"></textarea>
                    <div class="flex justify-center mb-10 ">
                        <button id="btn-send" class=" ml-15 my-7 font-medium text-slate-600 border border-solid py-3 px-4 rounded-md bg-slate-100 hover:text-amber-600 "  >Отправить запрос</button>
                    </div>
                </form>
            </div>
        </div>
        <div id="errorWindow" class="hidden mx-auto bg-slate-200 my-60 box-content  rounded-md">
           <p class="text-center p-10  text-orange-700 font-medium text-lg" >Для бронирования тура необходимо заполнить все обязательные поля.</p>
           <div class="flex justify-center">
           <button id="btn-backBokingWindow" class="flex justify-center ml-15 my-7 font-medium text-slate-600 border border-solid py-3 px-4 rounded-md bg-slate-100 hover:text-amber-600 "  >Назад</button>
           </div>
        </div>
        <div id="windowOk" class="hidden mx-auto bg-slate-200 my-60 box-content  rounded-md">
            <p class="text-center p-10  text-orange-700 font-medium text-lg" >Ваша заявка успешно отправлена.</p>
            <div class="flex justify-center">
            <button id="btn-windowOkClose" class="flex justify-center ml-15 my-7 font-medium text-slate-600 border border-solid py-3 px-4 rounded-md bg-slate-100 hover:text-amber-600 ">Закрыть</button>
        </div>
     </div>
    `
    // Кнопка закрытия бронирования
    const btnCloseModal = document.getElementById("btn-closeModal")
    btnCloseModal.addEventListener("click", closeModal)

    // Кнопка назад
    const btnBack = document.getElementById("btn-backBokingWindow")
    btnBack.addEventListener("click", backModal)

    // Кнопка успешного бронирования
    const btnOk = document.getElementById("btn-windowOkClose")
    btnOk.addEventListener("click", windowOkClose)

    // let btnsend = document.getElementById(`btn-send`)
    // btnsend.addEventListener("click", sendBooking)

    document.getElementById("btn-send").addEventListener("click", () => sendBooking)
    console.log(btnsend)
     
   
}

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
    // renderTours(tour)
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

// Функция закрытия модального окна
function closeModal() {
    document.getElementById(`booking`).style.display = "none"
}

// Функция назад
function backModal() {
    document.getElementById(`errorWindow`).style.display = "none"
    document.getElementById(`booking`).style.display = "flex"
}

// Функция закрытия успешного бронирования
function windowOkClose() {
    document.getElementById(`windowOk`).style.display = "none"
}

function openWindowOk() {
    let windowOk = document.getElementById("windowOk")
    let bookingModal = document.getElementById("booking")
    bookingModal.style.display = "none"
    windowOk.style.display = "flex"
}
function errorW() {
    let errorWind =  document.getElementById("errorWindow")
    let bookingModal = document.getElementById("booking")
    bookingModal.style.display = "none"
    errorWind.style.display = "flex"
}
async function sendBooking() {
  let Name = document.getElementById("Name").value
  let phone = document.getElementById("phone").value
  let email = document.getElementById("email").value
  let comment = document.getElementById("comment").value
    if (Name && phone && email) {
        
        document.getElementById("error").style.display = "none"
     
        const params = {
            Name: Name,
            phone: phone,
            email: email,
            comment: comment
        }
        let url = `https://www.bit-by-bit.ru/api/student-projects/tours/${id}`
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(params)
        })
        let data = await response.json()
        console.log(data)

        openWindowOk()
        document
            .getElementById(`btn-windowOkClose`)
            .addEventListener("click", windowOkClose)
    } else {
        errorW() 
        document
        .getElementById(`btn-backBokingWindow`)
        .addEventListener("click", backModal)
    }

   
}
sendBooking()
