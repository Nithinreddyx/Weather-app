/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  //HINT: Use template literals to create a url with input and an API key

  const weatherPromise = fetch(URL);
  return weatherPromise.then((response)=>{
                                            return  response.json();
                                         })
    //CODE GOES HERE
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response)=>{
    showWeatherData(response);
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerHTML = weatherData.name;
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].main;

  fahrenheit = weatherData.main.temp ; celsius = ((fahrenheit-32)*5)/9 ;
  document.getElementById('temp').innerHTML = Math.floor(celsius);

  fahrenheit1 = weatherData.main.temp_min ; celsius1 = ((fahrenheit1-32)*5)/9 ;
  document.getElementById('min-temp').innerHTML =Math.floor(celsius1);

  fahrenheit2 = weatherData.main.temp_max ; celsius2 = ((fahrenheit2-32)*5)/9 ;
  document.getElementById('max-temp').innerHTML =Math.floor(celsius2);


  
}

