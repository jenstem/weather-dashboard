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

function setTime(){
    let today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentTime").text(today);

    function updateTime(){
      today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      $("#currentTime").text(today);
    }
    setInterval(updateTime, 1000);
  }
  setTime();