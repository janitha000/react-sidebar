import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SideBar from './SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (

    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
