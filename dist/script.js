const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5eb3f475aemsh69bae14434ff44ep193820jsna4a8564fade2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    const cityNameElement = document.getElementById('cityName');
    cityNameElement.innerHTML = city;

    const max_temp = document.getElementById('max_temp');
    const min_temp = document.getElementById('min_temp');
    const temp = document.getElementById('temp');
    const feels_like = document.getElementById('feels_like');
    const humidity = document.getElementById('humidity');
    const wind_degrees = document.getElementById('wind_degrees');
    const wind_speed = document.getElementById('wind_speed');

    const apiUrl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            console.log(response);
            // Update weather information elements with API response data
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
        })
        .catch(err => console.error('There was a problem with the fetch operation:', err));
};

var submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();

    var cityInput = document.getElementById('cityInput');
    var city = cityInput.value;

    getweather(city);
});

// Example call to get weather for a city (New Delhi in this case)
getweather('New Delhi'); 



