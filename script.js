const apikey = "f73daa5986b63916a49f15acf3600904";
const apiurl = (city) => `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl(city));
        if (!response.ok) {
            throw new Error(`City not found!`);
        }
        const data = await response.json();
        console.log(data);

        // Update the weather details
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Unable to fetch weather data for the specified city.");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); // Ensure you're passing the correct input value
});

// Optionally, initialize with a default city
checkWeather("Dhaka");
