import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Search from './components/Search';
import Parents from './components/Parents';
import SingleParent from './components/SingleParent';

const url = 'http://a6845353.ngrok.io';
class App extends Component {
    state = {
        parents: [
            {
                id: 1,
                name: 'Paul Lim',
                enrolled: true,
                notes: []
            },
            {
                id: 2,
                name: 'Mark Cruz',
                enrolled: false,
                notes: []
            }
        ],
        activeParent: 0,
        students: [],
        studentName: '',
        Notes: '',
        search: ''
    }

    getParents() {
        axios.get(`${url}/parents`).then(res => {
            this.setState({
                parents: res.data
            });
        });
    }

    getStudents() {
        axios.get(`${url}/students`).then(res => {
            this.setState({
                students: res.data
            });
        });
    }

    addStudent = (event, parentId) => {
        if (event.keyCode === 13) {
            axios({
                method: 'POST',
                url: `${url}/students`,
                data: {
                    parentId: parentId,
                    name: event.target.value
                }
            });
        }
    }

    setActiveParent = activeParent => {
        this.setState({ activeParent });
    }

    getActiveParent() {
        const activeParent = this.state.activeParent;

        return this.state.parents.find(parent => parent.id === activeParent);
    }

    getParentStudents() {
        const activeParent = this.state.activeParent;

        return this.state.students.filter(student => student.parentId === activeParent);
    }

    searchParent = event => {
        const term = event.target.value.toLowerCase();
        
        let filteredParents = this.state.parents.filter(parent => {
            return parent.name.toLowerCase().indexOf(term) >= 0;
        });

        this.setState({
            parents: filteredParents,
            search: event.target.value
        });
    }

    componentWillMount() {
        this.getParents();
        this.getStudents();
    }

    render() {
        const { parents } = this.state;
        const parent = this.getActiveParent();
        const students = this.getParentStudents();

        return (
            <div>
                <Search searchParent={this.searchParent} />

                <Parents data={parents} setActiveParent={this.setActiveParent}/>

                <br />

                <SingleParent 
                    parent={parent} 
                    students={students}  
                    addStudent={this.addStudent}
                />
            </div>
        );
    }
}

export default App;
