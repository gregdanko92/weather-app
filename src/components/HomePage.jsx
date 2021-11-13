import TodayWeather from './TodayWeather'
import Forecast from './Forecast'
import {useState, useEffect} from 'react'

function HomePage(){

    const [apiData, setApiData] = useState({})
    const [dataPresent, setDataPresent] = useState(false)
    const [currentWeather, setCurrentWeather] = useState({})
    const [forecastData, setForecastData] = useState([])
    const lat = 37.7749
    const long = 122.4194
    const apiKey = 'b408c9789e7b2ba5f12320742adff18b'
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`
   
const getForecastData = () => {
    setForecastData(apiData.apiData.daily)
    console.log(forecastData)
}

const getCurrentData = () => {
    if (dataPresent === true){
        setCurrentWeather(apiData.apiData.current)
        getForecastData()
        console.log(currentWeather)
    }
}




function fetchData() {
    fetch(url)
        .then((response)=>response.json())
        .then(json => {
            setApiData({apiData: json})  
            setDataPresent(true)
        })
        .then(getCurrentData)
        
        
        .catch((err)=>{console.log(err)})
        return apiData
    }



    useEffect(function(){
        fetchData()
        
    }, [dataPresent])

    

    return(
        <div>
            <TodayWeather value={currentWeather}/>
            <br />
            <Forecast/>

        </div>
    )

}
export default HomePage
