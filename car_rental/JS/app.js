import Car from "../components/Car.js";

const buses = [
    {
        id: 0,
        imgURL: "../35 seats/blue.jpg",
        name: "Bus",
        payment: "day/20$",
        seats: 35
    },
    {
        id: 1,
        imgURL: "../35 seats/blue.jpg",
        name: "Bus",
        payment: "day/20$",
        seats: 35
    },
    {
        id: 2,
        imgURL: "../35 seats/bg.jpg",
        name: "Bus",
        payment: "day/30$",
        seats: 40
    }
    ,
    {
        id: 3,
        imgURL: "../35 seats/bg.jpg",
        name: "Bus",
        payment: "day/30$",
        seats: 40
    },
    {
        id: 0,
        imgURL: "../35 seats/red.jpg",
        name: "Bus",
        payment: "day/40$",
        seats: 45
    },
    {
        id: 1,
        imgURL: "../35 seats/red.jpg",
        name: "Bus",
        payment: "day/40$",
        seats: 45
    },
    {
        id: 2,
        imgURL: "../35 seats/blue.jpg",
        name: "Bus",
        payment: "day/20$",
        seats: 35
    }
    ,
    {
        id: 3,
        imgURL: "../35 seats/blue.jpg",
        name: "Bus",
        payment: "day/20$",
        seats: 35
    },
    {
        id: 3,
        imgURL: "../35 seats/bg.jpg",
        name: "Bus",
        payment: "day/30$",
        seats: 40
    }
    ,
    {
        id: 3,
        imgURL: "../35 seats/bg.jpg",
        name: "Bus",
        payment: "day/30$",
        seats: 40
    }
    ,
    {
        id: 3,
        imgURL: "../35 seats/red.jpg",
        name: "Bus",
        payment: "day/40$",
        seats: 45
    },
    {
        id: 10,
        imgURL: "../35 seats/red.jpg",
        name: "Bus",
        payment: "day/40$",
        seats: 45,
    }
]

const buses_display = document.getElementById("buses");
const search = document.getElementById("search");

buses.forEach(bus => {
    buses_display.appendChild(Car(bus));
})

search.addEventListener("input", (e) => {
    e.preventDefault();
    let searched_list = buses.filter(bus =>
        bus.seats === Number(search.value))

    while( buses_display.hasChildNodes() ){
        buses_display.removeChild(buses_display.firstChild);
    }

    if( searched_list.length === 0){
        buses.forEach(bus => {
            buses_display.appendChild(Car(bus));
        })
    }else{
        searched_list.forEach( item  => {
            buses_display.appendChild(Car(item));
        })
    }
})
