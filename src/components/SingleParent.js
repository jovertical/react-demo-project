import React from 'react';

const SingleParent = props => {
    if (! props.parent) {
        return '...';
    }

    return (
        <div>
            <p>
                <strong>{props.parent.name}</strong>
                
                &nbsp; - &nbsp;

                {props.parent.enrolled ? 'Enrolled' : 'Not Enrolled'}
            </p>

            <input 
                placeholder="Enter Student Name" 
                onKeyDown={event => props.addStudent(event, props.parent.id)}
                disabled={props.parent.enrolled}
            />

            <p>Students</p>
            <ul>
                {props.students.map((student, key) => (
                    <li key={key}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SingleParent;