import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `It is ${Math.round(response.data.main.temp)}°C in ${response.data.name}.`
    );
  }

  let apiKey = "c0579156688656753a8395372ffe7755";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
