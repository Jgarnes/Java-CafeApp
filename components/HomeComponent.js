import React, { Component} from 'react';
import  { CONTENTS } from '../shared/contents';
import { FlatList, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { ListItem, Card, Tile } from 'react-native-elements';
import { render } from 'react-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contents:  CONTENTS,
            scaleValue: new Animated.Value(0)
        };
    }

    animate() {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 1500
            }
        ).start();
    }

    componentDidMount() {
        this.animate();
    }

    render() {
    
    // const renderDirectoryItem = ({item}) => {
    //     return (
    //         // <TouchableOpacity onPress={() => pressHandler(item.id)}>
    //         //     <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
    //         //         containerStyle={{backgroundColor:'yellowgreen'}}
    //         //         // containerStyle={{backgroundColor:'limegreen'}}
    //         //         // containerStyle={{backgroundColor:'olivedrab'}}
    //         //         // containerStyle={{backgroundColor:'palegoldenrod'}}
    //         //         featuredTitle={item.name}
    //         //         image={item.image}>    
    //         //     <Text style={styles.text}>{item.description}</Text>
    //         //     </Card> 
    //         // </TouchableOpacity>
    //     )
    // };

        return(
            <Animated.ScrollView style={{transform: [{scale: this.state.scaleValue}], marginBottom: 20}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    containerStyle={{backgroundColor:'yellowgreen'}}
                    // containerStyle={{backgroundColor:'limegreen'}}
                    // containerStyle={{backgroundColor:'olivedrab'}}
                    // containerStyle={{backgroundColor:'palegoldenrod'}}
                    featuredTitle={this.state.contents[0].name}
                    image={this.state.contents[0].image}>    
                <Text style={styles.text}>{this.state.contents[0].description}</Text>
                </Card> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Catering')}>
                <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    containerStyle={{backgroundColor:'yellowgreen'}}
                    // containerStyle={{backgroundColor:'limegreen'}}
                    // containerStyle={{backgroundColor:'olivedrab'}}
                    // containerStyle={{backgroundColor:'palegoldenrod'}}
                    featuredTitle={this.state.contents[1].name}
                    image={this.state.contents[1].image}>    
                <Text style={styles.text}>{this.state.contents[1].description}</Text>
                </Card> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('About Us')}>
                <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    containerStyle={{backgroundColor:'yellowgreen'}}
                    // containerStyle={{backgroundColor:'limegreen'}}
                    // containerStyle={{backgroundColor:'olivedrab'}}
                    // containerStyle={{backgroundColor:'palegoldenrod'}}
                    featuredTitle={this.state.contents[2].name}
                    image={this.state.contents[2].image}>    
                <Text style={styles.text}>{this.state.contents[2].description}</Text>
                </Card> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    containerStyle={{backgroundColor:'yellowgreen'}}
                    // containerStyle={{backgroundColor:'limegreen'}}
                    // containerStyle={{backgroundColor:'olivedrab'}}
                    // containerStyle={{backgroundColor:'palegoldenrod'}}
                    featuredTitle={this.state.contents[3].name}
                    image={this.state.contents[3].image}>    
                <Text style={styles.text}>{this.state.contents[3].description}</Text>
                </Card> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
                <Card featuredTitleStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    containerStyle={{backgroundColor:'yellowgreen'}}
                    // containerStyle={{backgroundColor:'limegreen'}}
                    // containerStyle={{backgroundColor:'olivedrab'}}
                    // containerStyle={{backgroundColor:'palegoldenrod'}}
                    featuredTitle={this.state.contents[4].name}
                    image={this.state.contents[4].image}>    
                <Text style={styles.text}>{this.state.contents[4].description}</Text>
                </Card> 
            </TouchableOpacity>
            </Animated.ScrollView>
        );
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