import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

function NavBar() {
    return (
        <View style={styles.barContainer}>
            <TouchableOpacity
                onPress={() => Actions.login()}
                >
                <Text style={styles.loginButton}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Actions.profile()}
                >
                <Text style={styles.loginButton}>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Actions.friends()}
                >
                <Text style={styles.loginButton}>
                    Friends
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Actions.destination()}
                >
                <Text style={styles.loginButton}>
                    Destinations
                </Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    barContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'smoke-white',
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'smoke-white',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
      color: 'black',
    },
    loginButton: {
        color: "white",
        fontFamily: "Helvetica",
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '800',
        textAlign: "center",
        marginHorizontal: 100,
        borderColor: "black",
        borderWidth: 0.7,
        backgroundColor: "#d98a5f"
     },
  });

export default NavBar