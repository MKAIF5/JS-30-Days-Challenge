let getInput = document.getElementById("inp");
let city = document.getElementById("city");
let temperature = document.getElementById("temp");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");
let main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (getInput.value != "") {
    searchWeather();
  }
  
});
const ID = "9505fd1df737e20152fbd78cdb289b6a";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + ID;




const searchWeather = async () => {
  
  
  
  try {    
      fetch(await URL + "&q=" + getInput.value)
      .then((responsive) => responsive.json())
      .then((data) => {
        console.log(data);
        if (data.cod == 200) {
          city.querySelector("figcaption").innerHTML = data.name;
          city.querySelector("img").src =
          "https://flagsapi.com/" + data.sys.country + "/shiny/32.png";
        
          temperature.querySelector("img").src =
            "http:openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png";
          temperature.querySelector("figcaption span").innerText = data.main.temp;
          description.innerHTML = data.weather[0].description;
          clouds.innerHTML = data.clouds.all;
          humidity.innerText = data.main.humidity;
          pressure.innerText = data.main.pressure;
        } else {
          setTimeout(() => {
            swal({
              title: "OOPS!",
              text: "Please Enter A Valid City Name",
              icon: "error"
            });
          }, 10);
        }
    
        getInput.value = " ";

      });
  } catch (error) {
    console.log("error you are valid city name");
  }
};

// Task Completed