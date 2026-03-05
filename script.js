let cityinput = document.querySelector('.cityInput')
let btn = document.querySelector('.search-btn')
let temp = document.querySelector('.temperature')
let city = document.querySelector('.city-name')
let desc = document.querySelector('.weather-description')
let icon = document.querySelector('.weather-icon')
let press = document.querySelector('#pressure')
let wind = document.querySelector('#wind')
let humid = document.querySelector('#humidity')
let feels = document.querySelector('#feelsLike')

btn.addEventListener('click', () => {
    async function weather() {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=a2272af350c69a9ecb05533dce86561a`)
        let data = await res.json()
        console.log(data)
        icon.innerHTML = ``
        city.innerHTML = ``
        city.textContent = cityinput.value + "," + data.sys.country
        temp.textContent = Math.round(data.main.temp - 273.15) + "°C"
        desc.textContent = data.weather[0].description
        wind.textContent = data.wind.speed + " км/ч"
        feels.textContent = Math.round(data.main.feels_like - 273.15) + "°C"
        press.textContent = data.main.pressure + "Мб"
        humid.textContent = data.main.humidity + "%"

        if (Math.round(data.main.temp - 273.15) > 15 && data.weather[0].description.toLowerCase().includes('clouds')) {
            icon.textContent = '🌥️'
        } else if (data.weather[0].description.toLowerCase().includes('rain')) {
            icon.textContent = '🌧️'
        } else if (data.weather[0].description.toLowerCase().includes('snow')) {
            icon.textContent = '🌨️'
        } else if (data.weather[0].description.toLowerCase().includes('clear sky')) {
            icon.textContent = '☀️'
        } else if (data.weather[0].description.toLowerCase().includes('clouds' || 'cloudy' || 'cloud')) {
            icon.textContent = '☁️'
        }
    }
    weather()

})
