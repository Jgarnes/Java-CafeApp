import React, { Component } from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';


function Menu({ navigation }) {

    return (
          <ScrollView >
            <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={require('../components/images/menu.jpg')}
            />
            <Image
              style={styles.tinyLogo}
              source={require('../components/images/backmenu.jpg')}
            />
            </View>
          </ScrollView>
        );
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'goldenrod',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        tinyLogo: {
          width: 420,
          height: 600,
          marginBottom: 10,
          // resizeMode: 'contain',
        }
      });


export default Menu; 