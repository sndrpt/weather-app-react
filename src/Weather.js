// import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // function handleResponse(response) {
  //   alert(
  //     `It is ${Math.round(response.data.main.temp)}°C in ${response.data.name}.`
  //   );
  // }

  // let apiKey = "c0579156688656753a8395372ffe7755";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  // axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <div className="row information">
        <div className="col">
          <ul>
            <li className="city" id="displayed-city">
              {props.city}
            </li>
            <li className="temperature-info">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                id="icon"
                alt="icon"
              />
              <span id="temp">{props.temperature}</span>
              <span className="units">
                <a className="active temp-celsius" id="celsius" href="#">
                  °C
                </a>
                |
                <a className="temp-fahrenheit" id="fahrenheit" href="#">
                  °F
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col detail">
          <ul>
            <li className="detail-info-today" id="detail-today">
              {props.day}
            </li>
            <li>
              Humidity: <span id="humidity">{props.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.wind}</span>m/s
            </li>
            <li className="description" id="description">
              {props.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
