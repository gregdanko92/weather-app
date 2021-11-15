import {useState, useEffect} from 'react'
function TodayWeather(props){

    
    const convertUnixDate = (timestamp) =>{
        let converted = new Date(timestamp * 1000).toLocaleString()
        return converted
        
    }

    const getDate = (timestamp) =>{
        let date = convertUnixDate(timestamp).slice(0,10)
        return date
    }
    const getTime = (timestamp)=>{
        let time = convertUnixDate(timestamp).slice(11, 20)
        return time
    }

    const convertTemp = () => {
        let temp = props.value.temp
        temp = temp - 273.15
        temp = Math.floor(temp)
        return temp
    }

   
    
    return(
        <div>
            <h2>Today's Weather</h2>
                <p>
                    Clouds: {props.value.clouds}
                </p>
                <p>
                    Date: {getDate(props.value.dt)}    
                </p>
                <p>
                    Temp: {convertTemp()} Celsius
                </p>
                <p>
                    Sunrise: {getTime(props.value.sunrise)}
                </p>
                <p>
                    Sunset: {getTime(props.value.sunset)}
                </p>
        </div>
    )
}

export default TodayWeather