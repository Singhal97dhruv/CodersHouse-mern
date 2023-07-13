import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Navigation from './components/shared/Navigation/Navigation';
function App() {
  return (

    <Router>

    <Navigation/>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />


    </Routes>

    </Router>


  );
}

export default App;
