
let tours = [{
        id: "",
        country: "",
        city: "",
        hotelName: "",
        image: "",
        price: "",
        startTime: "",
        endTime: "",
        text: ""
    } 

]



async function myTour() {
    const response = await fetch(
        "https://www.bit-by-bit.ru/api/student-projects/tours"
    )
    const tours = await response.json()

    console.log(tours)

    tours.forEach((tour) => {
        document.getElementById("moretour").innerHTML += `
        <div class="max-w-4xl mx-auto">
            <div class="shadow-lg py-3 px-4 rounded-md bg-slate-100 "> 
                <p class="text-center text-slate-700 text-xl font-bold">${tour.city}</p>
                <p class="text-center text-slate-700 text-xl font-bold ">${tour.country}</p>
                
                <p class="text-slate-500 text-center mt-5">${tour.hotelName}</p>
                <div class="flex flex-wrap justify-center text-slate-500 ">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                    <p> ${tour.rating}</p>
                </div>
                <img src="${tour.image}" class="mt-5" />
                <p class="text-slate-700 text-xl font-bold mt-5"> ${tour.price}</p>
                <div>
                    <p>${tour.startTime}</p>
                    <p> ${tour.endTime}</p>
                </div>
                
            </div>
        
        </div>`
    })
}
myTour()
