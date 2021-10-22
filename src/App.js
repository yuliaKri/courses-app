import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import Home from "./Home";
import Course from "./Course";
import jsLogo from "./images/js-logo.jpg";
import pythonLogo from "./images/python-logo.png";
import cPlLogo from "./images/c_pl_pl-logo.jpg";

const coursesData = [
    {id: 0, name: 'JavaScript', description: 'JavaScript course', price: 10, data: '1/10/2021', image: jsLogo},
    {id: 1, name: 'Python', description: 'Python course', price: 20, data: '1/11/2021', image: pythonLogo},
    {id: 2, name: 'C1', description: 'C++ course', price: 30, data: '1/12/2021', image: cPlLogo},
    {id: 3, name: 'С2', description: 'С# course', price: 10, data: '1/10/2021', image: ''},
    {id: 4, name: 'Go', description: 'Golang course', price: 20, data: '1/11/2021', image: ''},
    {id: 5, name: 'Java1', description: 'Java1 course', price: 30, data: '1/12/2021', image: ''},
    {id: 6, name: 'Java2', description: 'Java2 course', price: 30, data: '1/12/2021', image: ''}
]

function App() {
    const [data, setData] = useState(coursesData);
    const history = useHistory();

    return (
            <Router>
                <div>
                    <header className='App-header'>
                        <ul>
                            <li>
                                <Link className='App-header h1' to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/create-new-course" className='App-header h1'>Fill out the form</Link>
                            </li>
                        </ul>
                    </header>

                    <Switch>
                        <Route path='/courses/:courseId'>
                            <Course course={data}/>
                        </Route>
                        <Route path="/">
                            <Home courses={data}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
    );
}

export default App;
