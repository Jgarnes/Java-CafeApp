import React from 'react';
import { FlatList, Text } from 'react-native';
import { ListItem, Card } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/breakfast.jpg')}>
                <Text style={{margin:10, textAlign:'center'}}>{item.description}</Text>
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

export default Directory;