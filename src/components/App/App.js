import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from '../Products/Products';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/"><Products /></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
