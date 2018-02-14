import React from 'react';
import {get} from 'axios';
import {connect} from 'react-redux';
import ajax from 'ajax';


export default function getstudents(dispatch) {
    $.ajax({
       method: 'GET',
       url: '../../server/routes/main.js',
       dataType: 'json'
    }).success(function(students){
       return dispatch({type: 'GET_STUDENTS', students:students})
    });
}
export default class Students extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <p> We are up and running! </p>
        )
    }
}