import { useEffect, useState } from "react"

function Forecast(props){

    const forecastData = props.value
     
    const [forecastJSX, setForecastJSX] = useState('')

    let dayArray = []
    function getForecastJSX(){
        let jsx = forecastData.map((day)=>{
        let dayObj = {
            date: null,
            temperature: null
        }
        let unix_timestamp = day.dt
        let date = new Date(unix_timestamp * 1000)
        dayObj.date = date
        dayArray.push(dayObj)
        console.log(dayArray)
        }
    )
}   

    useEffect(function(){
        getForecastJSX()
    },[])

    return(
        <div>
            Forecast
            <div>
                {forecastJSX}
            </div>
        </div>
    )
}

export default Forecast