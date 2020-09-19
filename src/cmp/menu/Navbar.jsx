import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <NavLink className="navbar-brand text-white" to="/">Navbar</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navNav">
                    <ul className="navbar-nav ml-auto text-primary">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar;