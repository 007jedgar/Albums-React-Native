import React from 'react'
import { AppRegistry, View } from 'react-native';
//import App from './App';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('Albums', () => App);
