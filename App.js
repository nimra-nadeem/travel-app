import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login'
import Routes from './components/Routes'
import Home from './components/Home'
import Friends from './components/Friends'
import Destination from './components/Destination'
import Profile from './components/Profile'
import NavBar from './components/NavBar'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar style= {styles.navbar} />
      <Routes style={styles.routecontainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  routecontainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
