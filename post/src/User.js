import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
// import { Container,Row,Col, Table } from 'react-bootstrap';

function User() {


    let [user, setuser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setuser(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })

    return (
        <>
            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>
                        Address
                        <table>
                            <tr>
                                <td>Street</td>
                                <td>Suite</td>
                                <td>City</td>
                                <td>Zipcode</td>
                            </tr>
                        </table>
                    </td>
                    <td>Phone</td>
                    <td>Website</td>
                    <td>
                        Company
                        <tr>
                            <td>Name</td>
                            <td>Catchphase</td>
                            <td>Bs</td>
                        </tr>
                    </td>
                </tr>

                {
                    user.map((ele, ind) => {
                        return (
                            <>

                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <tr>
                                            <td>{ele.address.street}</td>
                                            <td>{ele.address.suite}</td>
                                            <td>{ele.address.city}</td>
                                            <td>{ele.address.zipcode}</td>
                                            <td> 
                                               {/* <tr>
                                                    <td>{ele.geo.lat}</td>
                                                    <td>{ele.geo.lng}</td>
                                                </tr> */}
                                            </td>
                                        </tr>
                                    </td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>
                                    <td>
                                        <tr>
                                            <td>{ele.company.name}</td>
                                            <td>{ele.company.catchPhase}</td>
                                            <td>{ele.company.bs}</td>
                                        </tr>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    );
}

export default User;