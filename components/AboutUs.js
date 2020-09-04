import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


function About() {

    return (
    <View>
        <Image source={require('./images/welcome.jpg')} />
    
        <Text style= {styles.body}>
        More Than Java Cafe’ is proud to provide quality coffees, teas and much more to our Laurel community and beyond. We are confident that once you visit and experience the warm atmosphere you will become a regular part of our More Than Java Cafe’ family.
        {'\n'}
        {'\n'}
        As a family, we have always loved being able to enjoy fresh vibrant and great tasting foods. However, what we discovered was how hard it was to actually find this combination along with a warm inviting atmosphere to enjoy it in.
        {'\n'}
        {'\n'}
        So we created our own.
        {'\n'}
        {'\n'}
        More Than Java Cafe’, founded by my husband and I, is a swank/eclectic and cozy Internet cafe’
        {'\n'}
        {'\n'}
        We also Provide Free Wi-Fi.
        </Text>
    </View>
    )    
};

const styles = StyleSheet.create ({
    body: {
        textAlign: 'center',
        marginTop: 10
    }
})

export default About; 