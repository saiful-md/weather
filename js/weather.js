// console.log('weather')
const getWeather = () =>{
    const inputData = document.getElementById('get-city-name');
    const inputText = inputData.value;
    inputData.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=c661f6a968a34801d8b7d7827d8ef2a9&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData  = (city) => {
    console.log(city);
    const displaySection = document.getElementById('display-weather');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>${city.name}</h1>
    <h1>${city.main.temp}&deg;C</h1>
    <h1>${city.visibility}</h1>
    `;
    displaySection.innerHTML = '';

    displaySection.appendChild(div);
}

