import Home from "./component/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "./component/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Home />
        {/* toast message container  */}
        <ToastContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
