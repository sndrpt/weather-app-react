import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <h4>Have a look at the weather in your city.</h4>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
