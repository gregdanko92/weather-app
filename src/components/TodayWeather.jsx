import {useState, useEffect} from 'react'
function TodayWeather(props){

    const [weatherData, setWeatherData] = useState(props.value)

    

    return(
        <div>
            <h2>Today's Weather</h2>
                <p>
                    Clouds: {props.value.clouds}
                </p>
                <p>
                    DT: {props.value.dt}    
                </p>
        </div>
    )
}

export default TodayWeather