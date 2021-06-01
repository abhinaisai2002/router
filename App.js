import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import DashBoard from './DashBoard';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './Home';
// import EachNumber from './EachNumber';
function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>    
                <Route exact path='/' component={Home}  />
                <Route  path='/about' component={About}  />
                <Route  exact path='/contact' component={Contact}  />
                <Route  path='/dashboard' component={DashBoard}  />
               
            </Switch>
        </div>
    );
}
export default App;
