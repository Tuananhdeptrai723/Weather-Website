var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");




async function changeWeatherUI() {
    let vitri = search.input;
    let trimViTri = vitri.trim();
    // d78fd1588e1b7c0c2813576ba183a667

    let apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${trimViTri}&appid=d78fd1588e1b7c0c2813576ba183a667`

    var data = await fetch(apiURl).then(res => res.json())

    if (data.cod == 200) {
        // console.log(data);
        content.classList.remove("hide");
        city.innerText = data.name;
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + "m";
        wind.innerText = data.wind.speed + "m/s";
        sun.innerText = data.main.humidity + "%";
        value.innerText = Math.ceil(data.main.temp - 273.15)
        shortDesc.innerText = data.weather[0].main ? data.weather[0].main : "No cloud";
        time.innerText = new Date().toLocaleString("vi")
    } else {
        content.classList.add("hide");
    }
}




search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeWeatherUI("da lat");
    }

    console.log(e);

});
