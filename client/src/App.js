import { Route } from 'react-router-dom';
import './App.css';
import countryDetail from './components/countryDetail';
import CreateActivity from './components/createActivity';
import Home from './components/home';
import LandingPage from './components/landinPage/LandingPage'
import axios from 'axios'
axios.defaults.baseURL= `https://deploy-production-8057.up.railway.app/`

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path={'/home'} component={Home} />
      <Route  exact path = {'/activities'} component= {CreateActivity}/>
      <Route path = '/country/:id' component= {countryDetail}/>
    </div>
  );
}

export default App;
