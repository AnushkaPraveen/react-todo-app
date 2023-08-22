import Home from "./component/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Home />
      {/* toast message container  */}
      <ToastContainer />
    </div>
  );
}

export default App;
