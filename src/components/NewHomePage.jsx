import {useState, useEffect} from 'react'

function NewHomePage(){
    const [apiData, setApiData] = useState({})

    const lat = 37.7749
    const long = 122.4194
    const apiKey = 'b408c9789e7b2ba5f12320742adff18b'
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`

    function fetchData() {
        fetch(url)
            .then((response)=>response.json())
            .then(json => {
                setApiData({apiData: json})  
                //set data present here for a boolean value, this was for the useeffect to get a renrender when the 
            })
            //dotThen here for setting current data
            .catch((err)=>{console.log(err)})
            return apiData
        }
    
        useEffect(function(){
            fetchData()
        }, [])


    return(
        <div>
            New Home page
        </div>
    )
}

export default NewHomePage