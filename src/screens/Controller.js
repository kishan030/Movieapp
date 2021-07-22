import React from 'react'

import BookShow from './bookshow/BookShow'
import Home from '../screens/Home/Home'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";



const Controller = () => {
    return (
        <div >
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/details'>
                        <Home />
                    </Route>
                </Switch>
            </Router>

            <BookShow></BookShow>
        </div>
    )
}

export default Controller
