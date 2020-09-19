import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUser] = useState([]);
    useEffect(() =>{
        loadUsers();
    }, []);

    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1>Home Page </h1>
                    <table className="table table-dark table-hover">
                        <thead className="thead-info" width="100">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-info">
                        {
                            users.map((user, index) =>(
                                <tr>
                                    <th scope="row">{index +1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-info mr-2" to={`/users/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;