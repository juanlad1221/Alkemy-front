import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './Pages/login'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
