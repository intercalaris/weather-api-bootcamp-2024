import {apiKey} from "./apiKey.js";
// document.querySelector('button').addEventListener('click', getPicOfDay)
// function getPicOfDay(){
//     const userInput = document.querySelector('input').value
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
//     const url = 'https://api.nasa.gov/'

//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//             console.log(data.drinks[0].strDrink)
//             console.log(data.drinks[0].strDrinkThumb)
//             console.log(data.drinks[0].strInstructions)

//             document.querySelector('h2').innerText = data.drinks[0].strDrink
//             document.querySelector('img').src = data.drinks[0].strDrinkThumb
//             document.querySelector('h3').innerText = data.drinks[0].strInstructions
//         })
//         .catch(err => {
//         console.log(`error ${err}`)
//     });
// }
//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getTemperature)
// https://www.weatherbit.io/api/weather-current

function getTemperature(){
    const city = document.querySelector('#city').value
    const state = document.querySelector('#state').value
    const country = document.querySelector('#country').value
    fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}&state=${state}&country=${country}&units=I`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.data[0].temp)
            document.querySelector('#temperature').innerText = `${data.data[0].temp} °F`
        })
        .catch(err => {
        console.log(`error ${err}`)
    });
}
