import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/HomeComponent';
import Menu from '../components/MenuComponent';
import Catering from '../components/CateringComponent';
import About from '../components/AboutUs';
import Events from '../components/EventsComponent';

const screens = {
    Home: {
        screen: Home
    },
    Menu: {
        screen: Menu
    },
    Catering: {
        screen: Catering
    },
    About: {
        screen: About
    },
    Events: {
        screen: Events
    }
}

const DirectoryNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Menu: {
        screen: Menu
    },
    Catering: {
        screen: Catering
    },
    About: {
        screen: About
    },
    Events: {
        screen: Events
    }
});

export default HomeStack;