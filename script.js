var apiKey = "1c947ec42126f5d19d5055610d137b1a"
var updatedata1 = document.getElementById("updatedata1")
var updatedata2 = document.getElementById("updatedata2")
var updatedata3 = document.getElementById("updatedata3")
async function getDataByRandomCityName1() {
    try 
    {
        let res = await fetch("https://restcountries.com/v3.1/all")
        let data = await res.json()
        console.log(data)
        const index = Math.round(Math.random() * data.length)
        console.log(index)
        const cityName = data[index].name.common
        console.log(cityName)
        const flag = data[index].flag
        console.log(flag)
        const capital = data[index].capital[0]
        console.log(capital)
        const region = data[index].region
        console.log(region)
        const countrycode = data[index].fifa
        console.log(countrycode)
        let res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        let data1 = await res1.json()
        console.log(data1)
        console.log(`${cityName}'s Maximum Temp is ${data1.main.temp.toFixed()}°C`)
        console.table(index,cityName,flag,capital,region,data1.main.temp)
        updatedata1.innerHTML =
        ` <img src="https://cdn.pixabay.com/photo/2022/05/15/23/33/weather-7199173_1280.png"
                class="card-img-top" alt="weather" />
            <div class="card-body">
                <h5 class="card-title">${cityName}</h5>
                <p class="card-text"> flag    : ${flag}</p>
                <p class="card-text"> Capital : ${capital}</p>
                <p class="card-text"> Region  : ${region}</p>
                <p class="card-text"> c-code  : ${countrycode}</p>
                <p class="card-text"> <i class="bi bi-cloud-drizzle-fill"></i> : ${data1.main.temp.toFixed()}°C</p>
            </div>`
    }
    catch (err) 
    {
        console.log("Error found", err)
    }
}
getDataByRandomCityName1()

async function getDataByRandomCityName2() {
    try 
    {
        let res = await fetch("https://restcountries.com/v3.1/all")
        let data = await res.json()
        console.log(data)
        const index = Math.round(Math.random() * data.length)
        console.log(index)
        const cityName = data[index].name.common
        console.log(cityName)
        const flag = data[index].flag
        console.log(flag)
        const capital = data[index].capital[0]
        console.log(capital)
        const region = data[index].region
        console.log(region)
        const countrycode = data[index].fifa
        console.log(countrycode)
        let res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        let data2 = await res2.json()
        console.log(data2)
        console.log(`${cityName}'s Maximum Temp is ${data2.main.temp.toFixed()}°C`)
        console.table(index,cityName,flag,capital,region,data2.main.temp)
        updatedata2.innerHTML =
        ` <img src="https://cdn.pixabay.com/photo/2022/05/15/23/33/weather-7199173_1280.png"
                class="card-img-top" alt="weather" />
            <div class="card-body">
                <h5 class="card-title">${cityName}</h5>
                <p class="card-text"> flag    : ${flag}</p>
                <p class="card-text"> Capital : ${capital}</p>
                <p class="card-text"> Region  : ${region}</p>
                <p class="card-text"> c-code  : ${countrycode}</p>
                <p class="card-text"> <i class="bi bi-cloud-drizzle-fill"></i> : ${data2.main.temp.toFixed()}°C</p>
            </div>`
    }
    catch (err) 
    {
        console.log("Error found", err)
    }
}
getDataByRandomCityName2()

async function getDataByRandomCityName3() {
    try 
    {
        let res = await fetch("https://restcountries.com/v3.1/all")
        let data = await res.json()
        console.log(data)
        const index = Math.round(Math.random() * data.length)
        console.log(index)
        const cityName = data[index].name.common
        console.log(cityName)
        const flag = data[index].flag
        console.log(flag)
        const capital = data[index].capital[0]
        console.log(capital)
        const region = data[index].region
        console.log(region)
        const countrycode = data[index].fifa
        console.log(countrycode)
        let res3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        let data3 = await res3.json()
        console.log(data3)
        console.log(`${cityName}'s Maximum Temp is ${data3.main.temp.toFixed()}°C`)
        console.table(index,cityName,flag,capital,region,data3.main.temp)
        updatedata3.innerHTML =
        ` <img src="https://cdn.pixabay.com/photo/2022/05/15/23/33/weather-7199173_1280.png"
                class="card-img-top" alt="weather" />
            <div class="card-body">
                <h5 class="card-title">${cityName}</h5>
                <p class="card-text"> flag    : ${flag}</p>
                <p class="card-text"> Capital : ${capital}</p>
                <p class="card-text"> Region  : ${region}</p>
                <p class="card-text"> c-code  : ${countrycode}</p>
                <p class="card-text"> <i class="bi bi-cloud-drizzle-fill"></i> : ${data3.main.temp.toFixed()}°C</p>
            </div>`
    }
    catch (err) 
    {
        console.log("Error found", err)
    }
}
getDataByRandomCityName3()


