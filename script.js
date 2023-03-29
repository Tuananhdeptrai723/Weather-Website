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
var body = document.querySelector("body");





async function changeWeatherUI() {
    let vitri = search.value.trim();

    // d78fd1588e1b7c0c2813576ba183a667

    let apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${vitri}&appid=d78fd1588e1b7c0c2813576ba183a667`

    var data = await fetch(apiURl).then(res => res.json())

    if (data.cod == 200) {
        // console.log(data);
        content.classList.remove("hide");
        city.innerText = data.name;
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + "m";
        wind.innerText = data.wind.speed + "m/s";
        sun.innerText = data.main.humidity + "%";

        // var tempurater = value.innerText
        value.innerText = Math.ceil(data.main.temp - 273.15);



        shortDesc.innerText = data.weather[0].main ? data.weather[0].main : "No cloud";
        time.innerText = new Date().toLocaleString("vi");

        body.setAttribute('class', 'cold');
        if (value.innerText < 20) {
            body.setAttribute('class', 'cold');
        } else if (value.innerText > 20 && value.innerText < 25) {
            body.setAttribute('class', 'warm');
        } else if (value.innerText > 25 && value.innerText < 30) {
            body.setAttribute('class', 'cool');
        } else if (value.innerText > 30) {
            body.setAttribute('class', 'hot');
        }
    } else {
        content.classList.add("hide");
    }
}




search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeWeatherUI();
    }
});

