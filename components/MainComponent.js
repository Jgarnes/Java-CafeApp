import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Logo from './LogoComponent';
import { ImageBackground, StyleSheet } from 'react-native';
import  { CONTENTS } from '../shared/contents';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents:  CONTENTS
        };
    }

    render() {
        return (
        
        <ImageBackground source={require('./images/background.jpg')} style={styles.image} >
        <Logo />
        <Directory contents={this.state.contents} />
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
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });

export default Main; 