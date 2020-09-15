import React, {Component} from 'react';


import newyork from '../images/NYC-City-Photo.jpg';

export default class Portrait extends Component{

    render(){
        return <div className="container">
            <img
                className= "img-fluid img-thumbnail mt-5"
               
                src ={newyork}
                alt= "new york city"
                
            />
         
        </div>
    }
}