import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './components/Routes'
import NavBar from './components/NavBar'


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
