/*let i = 0
let toureMore2 = [
    {
        country: "Шри-Ланка",
        city: "Элла-Демодара",
        hotelName: "",
        image: "/src/Foto.optimize1.png",
        price: "30$",
        startTime: "10:00",
        endTime: "11:30",
        text: "Встречаемся на площади ж/д станции Элла.Далее отправляемся в пеший поход через местное хозяйство,чайные плантации и лес.Прогуляемся по действующему мосту,поможем сделать Вам потрясающие фотографии,увидем продящий по мосту поезд из Дамодары.На обратном пути заглянем в чайную лавку,где для Вас проведут небольшую чайную церемонию."
    }
]

let tourInfo2 = document.getElementById("mor2")

const btnmore2 = document.getElementById("btn-more2")
btnmore2.addEventListener("click", mor2)

function mor2() {
    tourInfo2.style.display = "flex"
    mymore2()
}

const btnback2 = document.getElementById("btn-back2")
btnback2.addEventListener("click", back)

function back() {
    tourInfo2.style.display = "none"
    mymore2()
}

function mymore2() {
    tourInfo2.innerHTML = ""
    let tour2 = toureMore2[i]
    tourInfo2.innerHTML += `
    <div class=" rounded-xl bg-slate-100 p-3 text-center ">
        <p class="text-slate-700 text-xl font-bold">${tour2.country}</p>
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
               <p>${tour2.city}</p>
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
               <p>${tour2.price}</p>
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
               <p>${tour2.startTime}</p>
               <span aria-hidden="true" class="mx-1.5"
                                >&middot;</span
                            >
               <p>${tour2.endTime}</p>
            </div>
        <p>${tour2.text}</p>
        
        
    </div>
    
    `
}
mymore2()*/
