import React, { Component} from 'react';
import  { CONTENTS } from '../shared/contents';
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Card, Tile } from 'react-native-elements';
import { render } from 'react-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contents:  CONTENTS
        };
    }

    render() {
    const pressHandler = (id) => {
        // console.log(id);
     this.props.navigation.navigate('Menu')
    }
    const renderDirectoryItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    containerStyle={{backgroundColor:'yellowgreen'}}
                    // containerStyle={{backgroundColor:'limegreen'}}
                    // containerStyle={{backgroundColor:'olivedrab'}}
                    // containerStyle={{backgroundColor:'palegoldenrod'}}
                    featuredTitle={item.name}
                    image={item.image}>    
                <Text style={styles.text}>{item.description}</Text>
                </Card> 
            </TouchableOpacity>
        )
    };

        return(
            <FlatList
                data={this.state.contents}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        margin:10, 
        textAlign:'center', 
        // backgroundColor: 'goldenrod'
    }
});

export default Home;