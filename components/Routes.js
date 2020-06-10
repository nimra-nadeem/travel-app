import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Profile from './Profile.js'
import Friends from './Friends.js'
import Destination from './Destination.js'
import Login from './Login.js'

const Routes = () => (
   <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={Login}
          title="Login"
        />
        <Scene key="home"
          component={Home}
          title="Home"
        />
        <Scene
          key="profile"
          component={Profile}
          title="Profile"
        />
        <Scene key="friends"
          component={Friends}
          title="Friends"
        />
        <Scene
          key="destination"
          component={Destination}
          title="Destination"
        />
      </Scene>
   </Router>
)
export default Routes