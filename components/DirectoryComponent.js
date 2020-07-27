import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { ListItem, Card, Tile } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            
            <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                containerStyle={{backgroundColor:'yellowgreen'}}
                // containerStyle={{backgroundColor:'limegreen'}}
                // containerStyle={{backgroundColor:'olivedrab'}}
                // containerStyle={{backgroundColor:'palegoldenrod'}}
                featuredTitle={item.name}
                image={item.image}>    
            <Text style={styles.text}>{item.description}</Text>
            </Card> 
        )
    };

    return(
        <FlatList
            data={props.contents}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        margin:10, 
        textAlign:'center', 
        // backgroundColor: 'goldenrod'
    }
});

export default Directory;