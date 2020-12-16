import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Character from '../Character/Character'
import CombatPage from '../CombatPage/CombatPage'
import CreatePage from '../CreatePage/CreatePage'
import StoryPage from '../StoryPage/StoryPage'

import styles from './Main.module.css'

class Main extends Component {
  render() {
    return (
        <div className= {styles.main}>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/character" component={Character} />
          <Route path="/combat" component={CombatPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/story" component={StoryPage} />
          
          <Redirect from='*' to='/dashboard' />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main