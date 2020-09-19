import React from 'react';
import Home from "./cmp/pages/Home";
import About from "./cmp/pages/About";
import Contact from "./cmp/pages/Contact";
import Navbar from "./cmp/menu/Navbar";
// import NotFound from './cmp/pages/NotFound';
import AddUser from './cmp/users/AddUser';
import ViewUser from './cmp/users/ViewUser';
import EditUser from './cmp/users/EditUser';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/users/add" component={AddUser} />
                <Route exact path="/users/:id" component={ViewUser} />
                <Route exact path="/users/edit/:id" component={EditUser} />
                {/* <Route component={Error} /> */}
                <Redirect to="/" />
            </Switch>
    </div>
  )
};
export default App;