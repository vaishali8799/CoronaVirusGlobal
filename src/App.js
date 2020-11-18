import Home from './Components/Home'
import Precaution from './Components/Precaution'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/global" >
      <Route path="/" exact component={Home}/>
      <Route path ="/dashboard" exact component={Dashboard}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path='/precautions' exact component={Precaution}></Route>
      
      
    </Router>
  );
}

export default App;
