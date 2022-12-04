import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card card-outside">
          <div className="card-body outside-body">
            <div className="card card-inside">
              <div className="card-body inside-body">
                <Search />
                <Weather
                  city="London"
                  day="Saturday"
                  humidity="70"
                  wind="5"
                  temperature="15"
                  description="Rainy"
                />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
