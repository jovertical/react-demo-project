import React from 'react';

const Parents = props => (
    <div>
        <p>Parents</p>

        <table>
            <thead>
                <tr>
                    <td>Action</td>
                    <td>Name</td>
                    <td>Enrolled</td>
                </tr>
            </thead>

            <tbody>
                {props.data.map((item, key) =>  (
                    <tr key={key}>
                        <td>
                            <button onClick={() => props.setActiveParent(item.id)}>
                                View
                            </button>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.enrolled ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Parents;