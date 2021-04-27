import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from '../Products/Products';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/"><Products /></Route>
         <Route  path="/cart"><Cart /></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
