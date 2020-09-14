import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


function Contact() {

    return (
    <ScrollView>
        <View style={styles.body}>
        <Text > 
            Location 1:
            {'\n'}
            358 Main St. Laurel, MD 20707
            {'\n'}{'\n'}
            Phone:
            {'\n'}
            301.490.3200
            {'\n'}{'\n'}
            Office Hours:{'\n'}
            Monday-Friday 7am-7pm{'\n'}
            Saturday 7am-5pm{'\n'}
            Sunday 10am-2pm
        </Text>

        <Text>{'\n'}
            Location 2:
            {'\n'}
            10411 Motor City Dr.Bethesda, MD 20817
            {'\n'}{'\n'}
            Phone:
            {'\n'}
            301.272.8935
            {'\n'}{'\n'}
            Office Hours:{'\n'}
            Monday-Friday 6am-3pm{'\n'}
            Saturday & Sunday CLOSED
        </Text>

        <Text>{'\n'}
            Email
            {'\n'}{'\n'}
            Tclark@morethanjavacafe.com{'\n'}
            Rclark@morethanjavacafe.com{'\n'}
        </Text>
       
        <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude: 39.1051,
            longitude: -76.8466,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
            <Marker
                coordinate={{
                    latitude: 39.1051,
                    longitude: -76.8466
                }}
                title='More Than Java Cafe'
            />
        </MapView>    
 </View>
    
        
    </ScrollView>
    )    
};

const styles = StyleSheet.create ({
    body: {
        alignItems: 'center',
        padding: 20
    },
    mapStyle: {
        width: 400,
        height: 200,
      },
})

export default Contact; 