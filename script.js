let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let bg=document.getElementById("back");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});



const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f85face966136b397413d97631212cf8`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
            {
                tempicon.src="./icons/thunderstorm.png";
                bg.style.backgroundImage="url('./bgicons/thunderstorm.jpg')";
               
            }
            else if(id<400 && id>300)
            {
                tempicon.src="./icons/cloud.png";
                bg.style.backgroundImage="url('./bgicons/cloud.jpg')";
            }
            else if(id<600 && id>500)
            {
                tempicon.src="./icons/rain.png";
                bg.style.backgroundImage="url('./bgicons/rain.jpg')";
            }
           else  if(id<700 && id>600)
            {
                tempicon.src="./icons/snow.png";
                bg.style.backgroundImage="url('./bgicons/snow.jpg')";
            }
            else if(id<800 && id>700)
            {
                tempicon.src="./icons/clouds.png";
                bg.style.backgroundImage="url('./bgicons/clouds.jpg')";
            }
            else if(id==800)
            {
                tempicon.src="./icons/sun-and-cloud.png"
                bg.style.backgroundImage="url('./bgicons/Sun-and-Clouds.jpg')";
            }
        }


catch(error){
    alert("City not found");

}

    
};




