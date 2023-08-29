import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      Weather App
      <Weather />
      <footer>
        <a
          href="https://github.com/sanbaar/react-weather-app-project.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Sandra B.A.
      </footer>
    </div>
  );
}
