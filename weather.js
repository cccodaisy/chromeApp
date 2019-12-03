const weather = document.querySelector(".js-weather");
const API_KEY = "9555a04d333fa612ff685127a22f88c0";
const COORDS = 'coords'; 

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    ).then(function(response){ //API 로딩이 완료한 뒤에(then) 해당 링크의 json 가져와라
        return response.json();
    }).then(function(json){ // 위의 API의 json을 가져온 뒤에(then) 아래 코드를 실행하라
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃  ${place} `;
        let iconcode = json.weather[0].icon;
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        const wicon = document.querySelector("#wicon");
        wicon.setAttribute('src', iconurl);        
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        // = latitude : latitude, longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();