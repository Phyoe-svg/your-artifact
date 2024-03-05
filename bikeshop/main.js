import Cart from "./Cart.js";
import datas from "./datas.js";
import Slide_show from "./slide_show.js";

const news_bike = document.getElementById("news-bikes");
const hot_bikes = document.getElementById("hot-bikes");

datas.news.forEach( data => {
    news_bike.appendChild(Cart(data));
})

datas.hot_deal.forEach( data => {
    hot_bikes.appendChild(Cart(data));
})

