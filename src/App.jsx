import React from "react";
import {
  BrowserRouter as Router, // un alias para BrowserRouter
  Switch as Sw,
  Route
} from 'react-router-dom';
import Inicio from './components/inicio';
import Admin from './components/admin';
import Login from './components/login';
import Menu from './components/menu';


function App() {

  return (
    <div>
      <Router>
        <Menu> </Menu>
          <Sw>  
            <Route exact path='/' component={Inicio}></Route> 
              
            <Route path='/admin' component={Admin}></Route> 
           
            <Route path='/login' component={Login}></Route>  
          </Sw>
      </Router>
    </div>
  );
}

export default App;
