import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Pokedex from '../components/Pokedex'

export default function () {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Pokedex} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

