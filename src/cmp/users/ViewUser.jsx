import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom";

const ViewUser = () => {

    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    useEffect(() =>{
        loadUser();
    }, []);

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto ">
                        <h1 className="display-4 text-center">USER ID : {id}</h1>
                        <ul className="list-group mx-auto">
                            <li className="list-group-item">Name : {user.name}</li>
                            <li className="list-group-item">User Name : {user.username}</li>
                            <li className="list-group-item">E-mail : {user.email}</li>
                            <li className="list-group-item">Phone : {user.phone}</li>
                            <li className="list-group-item">Website : {user.website}</li>
                        </ul>
                        <br/>
                        <Link className="btn btn-primary btn-block" to="/">BACK TO HOME</Link>
                        <br/>
                        <div className="border-bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewUser;