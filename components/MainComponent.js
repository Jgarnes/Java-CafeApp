import React, { Component } from 'react';
import Home from './HomeComponent';
import Logo from './LogoComponent';
import Menu from './MenuComponent';
import Catering from './CateringComponent';
import About from './AboutUs';
import Events from './EventsComponent';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class Main extends Component {
 
    render() {
        return (
        
        <ImageBackground source={require('./images/background.jpg')} style={styles.image} >
        <Logo />
        <Home  navigation={this.props.navigation} />
        </ImageBackground>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });

export default Main; 