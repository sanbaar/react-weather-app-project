import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Barcelona" />
    </div>
  );
}
