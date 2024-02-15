import React from "react";
import axios from "axios";

export default function Weather(props) {
     function handleResponse(response) {
        alert (`The weather in ${response.data.name} is ${response.data.main.temp}`);
     };
       let apiKey = "bf54175800a55e59e6c4d6461deeef12";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
       
       axios.get(apiUrl).then(handleResponse);
    return <p>hello from weather js</p>;
    
}