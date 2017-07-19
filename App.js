/**
 * Created by leechee on 2017-07-11.
 */

import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import WelcomePage from './app/pages/WelcomePage'
import MainPage from "./app/pages/MainPage";
import SearchPage from "./app/pages/SearchPage";
import PresetPage from "./app/pages/PresetPage";
import DetailPage from "./app/pages/DetailPage";

const App = StackNavigator({
    Welcome: {screen: WelcomePage},
    Main: {screen: MainPage},
    Search: {screen: SearchPage},
    Preset: {screen: PresetPage},
    Detail: {screen: DetailPage}

}, {
    initialRouteName: 'Welcome'
});

module.exports = App;