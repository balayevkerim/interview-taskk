import "./App.css";
import TargetTemperature from "./components/TargetTemperature/target-temperature";

function App() {
  return (
    <div className="App">
      <TargetTemperature
        minTemperature={0} 
        maxTemperature={24} 
        targetTemperature={4} 
      />
    </div>
  );
}

export default App;
