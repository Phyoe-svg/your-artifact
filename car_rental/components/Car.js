const Car = (data) => {
    const car = document.createElement("div");
    car.className = "car";
    car.id = data.id;
    car.addEventListener("click", (e)=>{
        localStorage.setItem("car_detail", JSON.stringify(data));
        window.location.href = "/HTML/BOOKING.html";
    })
    car.innerHTML = `
        <img src="${data.imgURL}" alt="${data.name}"
            width="100%">
        <h2>${data.name}</h2>
        <div class="people_icon">
            <div class="icon">
            <img class="people_icon" src="/images/people.png"
                alt="people" width="8%"></div>
                <h4>${data.seats} Seats</h4>
            <h3>${data.payment}</h3>
        </div>
        `;
    return car;
}

export default Car;