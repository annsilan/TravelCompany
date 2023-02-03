/*let index = 0
let toureMore3 = [
    {
        country: "Шри-Ланка",
        city: "Канди",
        hotelName: "",
        image: "/src/Foto.sigiria.jpg",
        price: "200$",
        startTime: "06:30",
        endTime: "13:30",
        text: "Встречаемся на ж/д станции Канди.Далее на комфортабельных автобусах отправляемся в Сигирию.Там Вас ожидает прогулка по дворцовым садам с бассейнами и фонтанами, которые функционируют с 12 века без электричества и считаются инженерным чудом.А затем поднимемся на 1200 ступенек вверх.Подъем условно состоит из 3-х частей: сначала зал с фресками, следом – зеркальный зал, после чего — само восхождение вверх на вершину у львиных лап. И во время восхождения, и на пике открывается впечатляющий вид на горы и джунгли. Помимо красоты старинной архитектуры, уникальных настенных рисунков и тропической растительности, туристов впечатляют экзотические животные, повсеместно встречающиеся на пути – дикие обезьяны, пчелы, попугаи, разноцветные птицы, вараны, бурундуки и большие белки.После спуска у подножия горы Вас будет ожидать обед в живописном месте и далее обратная дорога в Канди."
    }
]

let tourInfo3 = document.getElementById("more3")

const btnmore3 = document.getElementById("btn-more3")
btnmore3.addEventListener("click", mor3)

function mor3() {
    tourInfo3.style.display = "flex"
    mymore3()
}

function mymore3() {
    tourInfo3.innerHTML = ""
    let tour3 = toureMore3[index]
    tourInfo3.innerHTML += `
    <div class=" rounded-xl bg-slate-100 p-3 text-center ">
        <p class="text-slate-700 text-xl font-bold">${tour3.country}</p>
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
               <p>${tour3.city}</p>
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
               <p>${tour3.price}</p>
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
               <p>${tour3.startTime}</p>
               <span aria-hidden="true" class="mx-1.5"
                                >&middot;</span
                            >
               <p>${tour3.endTime}</p>
            </div>
        <p>${tour3.text}</p>
        <div class="flex flex-wrap justify-around mt-5">
        <button
                            
                            class="ml-2 font-medium text-slate-600 border border-solid border-orange-500 py-3 px-8 rounded-md hover:bg-orange-500 hover:text-gray-100 transition-all duration-500 ease-linear"
                        >
                            Купить
                        </button>
                        <button
                            
                        class="ml-2 font-medium text-slate-600 border border-solid border-orange-500 py-3 px-8 rounded-md hover:bg-orange-500 hover:text-gray-100 transition-all duration-500 ease-linear"
                    >
                        Назад
                    </button>   
        </div>             
    </div>
    
    `
}
mymore3()*/
