import React from 'react';

function Student (props){
    return (
        <div>
            <h1> Total number of student with A: {props.totalA}</h1>
            <h1> Total number of student with B: {props.totalB}</h1>
        </div>
    )
}

export default Student;