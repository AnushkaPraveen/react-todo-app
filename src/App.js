import Home from "./component/home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { toast, ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer/>
    </div>
  );
}

export default App;
