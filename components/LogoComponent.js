import React from 'react';
import { Image } from 'react-native';

 function Logo() {
    return(
        <Image 
            style={{alignSelf: 'center', marginTop:30}}
            source={require('./images/JavaLogo.png')}
        />   
    );
}

export default Logo;