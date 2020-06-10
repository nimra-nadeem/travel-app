
// Login Comment example
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   TextInput,
   Image
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"


class Profile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "vramesh@princeton.edu",
         password: "mysecret",
         secureText: true,
      }
   }

   // enable show-hide functionality of password field
   toggleShowPassword = () => {
      this.setState(previousState => {
         return{secureText: !previousState.secureText};
      })
   }

   // Logs the user in once the Log-in button has been pressed
   logInPressed = () => {

      if (!regexp_email.test(this.state.email)) {
        alert("Invalid Email")
      } else if (!regexp_password.test(this.state.password)) {
        alert("Invalid Password")
      } else {
      this.props.login(this.state.email, this.state.password);
      console.log("Printing if the user is currently logged in")
    }
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.setState({
         email: "",
         password: "",
         secureText: true,
      })
      this.props.navigation.navigate('Home');
    }
    if (this.props.error) {
      alert(this.props.error)
    }
  }



   render() {
      let iconName = this.state.secureText ? "ios-eye" : "ios-eye-off"
      return (
         <View style={styles.container}>

            <View style = {styles.titleContainer}>
               <Text style={styles.title}>
                  My Profile
               </Text>
             </View>


            <View style = {styles.inputBoxContainer}>
             <TextInput
             style={styles.inputBox}
             onChangeText={(password) => this.setState({password})}
             placeholder='Write your thoughts'
             clearTextOnFocus = {true}
             secureTextEntry={this.state.secureText}
             />
            </View>

             <TouchableOpacity
             onPress={() => Actions.profile()}
             style = {styles.singleFlex}>
              <Text style={styles.loginButton}>
                 Post
              </Text>
             </TouchableOpacity>

            <View style = {styles.singleFlex}/>
            <View style = {styles.singleFlex}/>  
            <View style = {styles.singleFlex}/>
            <View style = {styles.singleFlex}/>             

            <View 
               style = {styles.logoContainer}
              >
                 <Image source= {require('../utils/globe.svg.png')}
                 style = {styles.logo}
                 />
            </View>

            <View style = {styles.singleFlex}/>
            <View style = {styles.singleFlex}/>     
    

            <View style = {styles.copyrightsContainer}>
               <Text style = {styles.copyrights}> 
               Travel App - Nimra Nadeem
               </Text>
            </View>

         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: 1000,
      backgroundColor: "#d98a5f",
      justifyContent: 'center',
   },
   titleContainer: {
      flex: 5, 
      alignItems: 'center', 
      justifyContent: 'center'
   },
   title: {
      color: "white",
      fontFamily: "Lucida Console",
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      paddingLeft: 20,
      paddingTop: 40,
   },
   toggletext: {
      flex: 1,    
      fontSize: 25,
      marginTop: 2,
      marginHorizontal: 35,
      paddingRight: 300,
      alignSelf: 'flex-end',
      justifyContent: 'flex-start',
   },
   inputBoxContainer: {
      flex: 1, 
      paddingLeft: 300,
      paddingRight: 300,
      justifyContent: 'flex-end',
   },
   inputBox: {
      fontSize: 12,
      fontWeight: '300',
      backgroundColor: "white",
      marginHorizontal: 30,
      borderColor: "silver",
      borderRadius: 15,
      borderWidth: 0.2,
      paddingLeft: 50,
      paddingVertical: 7,
   },
    forgotLabel: {
      fontFamily: "Helvetica",
      fontSize: 12,
      fontWeight: '200',
      marginTop: 10,
      marginHorizontal: 30,
      paddingLeft: 350,
   },
   loginButton: {
      color: "white",
      fontFamily: "Helvetica",
      marginTop: 5,
      fontSize: 15,
      fontWeight: '800',
      textAlign: "center",
      marginHorizontal: 100,
      borderColor: "white",
      borderRadius: 15,
      borderWidth: 0.7,
      backgroundColor: "#d98a5f"
   },
   singleFlex: {
      flex: 1,
      paddingLeft: 300,
      paddingRight: 300,
   },
   logoContainer: {
      flex:3, 
      justifyContent: 'center', 
      alignItems: 'center',
   },
   logo: {
      alignSelf: 'center', 
      width: 200, 
      height: 200, 
      opacity: 0.9,
   },
   copyrightsContainer: {
      flex: 1, 
      paddingTop: 10, 
      justifyContent: 'flex-end', 
      alignItems: 'center',
   },
   copyrights: {
      fontSize: 15, 
      color: "#d98a5f", 
      fontFamily: "Helvetica",
   },
});


export default Profile