const Slide_show = (datas) => {
    const images = document.querySelector(".detail-image .images")
    const image = document.createElement("div");
    const nav_image = document.querySelector(".nav-image");
    image.className = "image";
    image.innerHTML = `<img src="./photos/${datas.imgURL[0]}" alt="" srcset="">`;
    datas.imgURL.forEach(url => {
        nav_image.innerHTML += `<div><img src="./photos/${url}" alt="" srcset=""></div>`;
    })
    const pre_images = document.querySelectorAll(".nav-image img");
    pre_images.forEach(pre_image => {
        pre_image.addEventListener("mouseover", (e) => {
            image.innerHTML = `<img src="${pre_image.src}" alt="" srcset="">`;
        })
    })
    images.appendChild(image);
    // description 
    const details = document.querySelector(".details");
    details.innerHTML = `<div class="name">
    Name - <b>${datas.name}</b>
</div>
<div class="description">
    Engine Type - ${datas.description}</div>
<div class="price">
    Price - ${datas.price_rate} MMKS
</div>`
}


export default Slide_show;