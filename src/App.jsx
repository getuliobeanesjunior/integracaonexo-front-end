import DashboardPage from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <DashboardPage/>
      <ToastContainer />
    </div>
  )
}

export default App
