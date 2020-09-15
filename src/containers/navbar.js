import React, {Component} from 'react';
import Login from '../Components/login';
import Signup from '../Components/signup';

export default class Navbar extends Component{

    render(){
        return <div className="navbar bg-light box-shadow shadow sticky-top">
            <div className="navbar-brand">
                My app comunicator store
            </div>
            <div className="d-flex">
                <Login/>
                <Signup/>
            </div>
        </div>
    }
}