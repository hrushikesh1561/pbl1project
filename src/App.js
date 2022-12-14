import React from 'react';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Login from './pages/Login';
import Navbar from './components/Navbar';

import { Switch, Route } from 'react-router-dom';
import './App.css';  


      function App()
      {
        return (
          <>
            <Navbar />

            <Switch>
            <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/rooms/" component={Rooms} />
              
              <Route exact path="/rooms/:slug" component={SingleRoom} />

              <Route component={Error} />
            </Switch>
          </>
        );
        }
export default App;
