import "./App.css";
import Intro from "./Intro";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ height: "50px" }}></div>
      <Intro></Intro>
    </div>
  );
}

export default App;
