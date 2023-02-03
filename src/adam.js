/*let id = 0
let toureMore = [
    {
        country: "Шри-Ланка",
        city: "Элла",
        hotelName: "",
        image: "/src/Foto.adam's peac.jpg",
        price: "150$",
        startTime: "02:15",
        endTime: "07:00",
        text: "Путешествие начинается со сбора группы на площади ж/д станции Элла в 02:15.На комфортабельном автобусе подъезжаем к подножию горы,далее Вас ожидает пеший подъем на высоту 2243м.Гора получила известность благодаря красивым пейзажам, закатам и рассветам, которые открываются с ее вершины. Миллионы туристов ежегодно поднимаются сюда, чтобы насладиться невероятными красотами по пути и на самом пике.Всего нужно пройти 5000 ступенек. В начале дороги встречаются площадки, где есть возможность передохнуть, перекусить и утолить жажду.На вершине горы помимо смотровой площадки также находится небольшое плато. Место паломничества представителей разных конфессий. На плато можно различить отпечаток ступни, что оставил Шива, Иисус или духовный учитель ланкийцев Будда – каждая религия приписывает след божества себе.На вершине мы встречаем рассвет,делаем невероятные фото и видео и спускаемся к подножию,где Вас будет ждать завтрак.После завтрака мы доставим Вас снова в Эллу. "
    }
]

let tourInfo = document.getElementById("more1")

const btnmore1 = document.getElementById("btn-more1")
btnmore1.addEventListener("click", mor1)

function mor1() {
    tourInfo.style.display = "flex"
    mymore()
}

const myback = document.getElementById("back")
myback.addEventListener("click", close)

function close() {
    tourInfo.style.display = "none"
    mymore()
}

function mymore() {
    tourInfo.innerHTML = ""
    let tour = toureMore[id]
    tourInfo.innerHTML += `
    <div class=" rounded-xl bg-slate-100 p-3 text-center ">
        <p class="text-slate-700 text-xl font-bold">${tour.country}</p>
            <div class="flex flex-wrap justify-center items-center text-slate-500 p-2.5 mt-2 ">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mx-1.5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
        </svg>
               <p>${tour.city}</p>
               <span aria-hidden="true" class="mx-1.5"
                                >&middot;</span
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
               <p>${tour.price}</p>
               <span aria-hidden="true" class="mx-1.5"
                                >&middot;</span
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 mx-1.5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
               <p>${tour.startTime}</p>
               <span aria-hidden="true" class="mx-1.5"
                                >&middot;</span
                            >
               <p>${tour.endTime}</p>
            </div>
        <p>${tour.text}</p>
        <div class="flex flex-wrap justify-around mt-5">
        <button
            class="ml-2 font-medium text-slate-600 border border-solid border-orange-500 py-3 px-8 rounded-md hover:bg-orange-500 hover:text-gray-100 transition-all duration-500 ease-linear"
        >
            Купить
        </button>
        <button
            id="back"
            class="ml-2 font-medium text-slate-600 border border-solid border-orange-500 py-3 px-8 rounded-md hover:bg-orange-500 hover:text-gray-100 transition-all duration-500 ease-linear"
        >
            Назад
        </button>
    </div>
    
    `
}
mymore()*/
