import React from 'react';
import { Image } from 'react-native';

 function Logo() {
    return(
        <Image 
            style={{alignSelf: 'center', marginTop:29, marginBottom:10}}
            source={require('./images/JavaLogo.png')}
        />   
    );
}

export default Logo;