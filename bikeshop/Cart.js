import Slide_show from "./slide_show.js";

const Cart = ( data )=>{
    const item = document.createElement("div");
    const image = document.createElement("div");
    const img = document.createElement("img");
    const price = document.createElement("div");
    // 
    item.addEventListener("click", ()=>{
        localStorage.setItem("item", JSON.stringify(data));
        const show_details = document.getElementById("show-details");
        show_details.style.display = "flex";
        Slide_show(data);
    })
    // className
    item.className = "item";
    image.className = "image";
    price.className = "price";

    // insert data
    img.src = "/photos/" + data.imgURL[0];
    price.innerText = `${data.price_rate} MMKS`;
    // append to parent
    image.appendChild(img);
    item.appendChild(image);
    item.appendChild(price);

    return item;
}

export default Cart;