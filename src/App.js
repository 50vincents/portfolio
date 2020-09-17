import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/about'>
            <Header head={'about'}/>
            <About />
          </Route>
          <Route path='/work'>
            <Header head={'work'}/>
            <Work />
          </Route>
          <Route path='/contact'>
            <Header head={'contact'}/>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
