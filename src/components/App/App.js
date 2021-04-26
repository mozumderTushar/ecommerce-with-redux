import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from '../Products/Products';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <Router>
       <NavBar />
       <Switch>
         <Route exact path="/"><Products /></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
