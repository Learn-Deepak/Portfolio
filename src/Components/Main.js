import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Container from 'react-bootstrap/Container'

function Main() {
    //debugger;
    return (
        <Router>
            <Container fluid id="mainContainer">
            <Switch>
                <Route exact path='/Portfolio' component={Home} />
                {/* This is how we can pass props to components rendered by router*/}
                {/* {<Route > <ALLINONE name="n"/> </Route> }
                <Route path="/:id" render={(props) => (
                    <ALLINONE name="GALAXY" />
                )} /> */}
                <Route exact path='/about' component={About}/>
                <Route exact path='/skills' component={Skills}/>
                <Route exact path='/education' component={Education}/>
            </Switch>
            </Container>
        </Router>   
    )
}

export default Main