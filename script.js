var searchText = document.querySelector("#search-box");
var searchBtn = document.querySelector("#searchButton");
var searchedCities = document.querySelector("#searchedCities");
var city = document.querySelector("#search-city");
var iconEL = document.querySelector("#icon");
var tempEL = document.querySelector("#tempEl");
var windEl = document.querySelector("#wind");
var humidEl = document.querySelector("#humidity");
var getForecast = document.querySelector("#get-forecast");
var forecastEl = document.querySelector("#forecasting");
var searchedCityEL = document.querySelector("#location-search");
var searchEl = document.querySelector("#search");

function setTime() {
    let today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentTime").text(today);

    function updateTime() {
        today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        $("#currentTime").text(today);
    }
    setInterval(updateTime, 1000);
}
setTime();

function whatsTheWeather(city) {
    var apiKey = "26d18b24e744af5b39443da096b25939";
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + city + "&appid=" + apiKey;
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            getWeather(response);
        });

    function getWeather(response) {
        var cityName = response.city.name;
        var getTemp = response.list[0].main.temp;
        var getWind = response.list[0].wind.speed;
        var getHumid = response.list[0].main.humidity;
        city.textContent = cityName;
        tempEL.textContent = getTemp + "°F";
        windEl.textContent = getWind + " mph";
        humidEl.textContent = getHumid + "%";
    }