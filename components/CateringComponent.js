import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';


function Catering() {

    return (
     
    <ImageBackground source={require('./images/woodivy.jpg')} style={styles.image} >  
    <View style={styles.container}>
         
       <Text style= {styles.body}> More Than Java Café offers full service and drop off catering for all occasions. All menus are customized for your event providing a uniquely personal touch, using seasonal and regionally sourced ingredients. In addition to our range of menu options, we also offer vegetarian, vegan, and gluten free catering. Our priority is to listen to your needs, delight your clients, and attend to every detail that goes into making the catering and planning of your event as seamless and effortless as possible.
       {'\n'}
       {'\n'}
        Our menus & budgets vary with each event. Please fill out our contact form for more information. 
</Text>
    </View>
   </ImageBackground>  
  
    )    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    image: {
        flex: 1,
        width: 'auto',  
        
      },
    body: {
        textAlign: 'center',
        // marginTop:
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.1)',
        // color: 'gold'
    } 
})

export default Catering; 