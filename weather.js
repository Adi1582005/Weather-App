const weatherIcon = document.querySelector(".weather-icon");
const cityName = document.querySelectorAll(".city");
const temp = document.querySelector(".temp");
const status = document.querySelector(".status");
const wind = document.querySelector(".footer h3:nth-child(1)");
const humidity = document.querySelector(".footer h3:nth-child(2)");

// API KEY
const apiKey = "e88591bc90d04345b0364930261703";

async function getWeather(city) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // update UI
        cityName.forEach(el => el.innerText = data.location.name);
        temp.innerText = data.current.temp_c + "°C";
        status.innerText = data.current.condition.text;

const condition = data.current.condition.text.toLowerCase();

if (condition.includes("cloud")) {
    weatherIcon.src = "./images/cloudy App img.png";
}
else if (condition.includes("rain")) {
    weatherIcon.src = "./images/rain App img.png";
}
else if (condition.includes("clear") || condition.includes("sunny")) {
    weatherIcon.src = "./images/Clear App img.png";
}
else if (condition.includes("snow")) {
    weatherIcon.src = "./images/snow App img.png";
}
else if (condition.includes("mist") || condition.includes("fog")) {
    weatherIcon.src = "./images/mist App img.png";
}
else {
    weatherIcon.src = "./images/default.png";
}

        wind.innerHTML = `<img src="./images/wind new App.png" height="60" width="60"> ${data.current.wind_kph} km/h`;
        humidity.innerHTML = `<img src="./images/humidity new App.png" height="60" width="60"> ${data.current.humidity}%`;

    } catch (error) {
        alert("City not found!");
    }
}

// click event
search.addEventListener("click", () => {
    if (input.value !== "") {
        getWeather(input.value);
    }
});
