import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import HomeView from '../views/Home'
import PlanView from '../views/Plan'
import ThanksView from '../views/Thanks'

const AppRoutes : React.FC = () => {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/gracias" exact component={ThanksView}/>
            <Route path="/arma-plan" exact component={PlanView}/>
            <Route path="/" exact component={HomeView}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRoutes
