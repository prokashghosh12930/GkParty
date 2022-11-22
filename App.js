
import React,{useState} from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';

import { myStore } from './src/redux/store/store';
import MainScreen from './src/MainScreen';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store ={myStore}>
      <MainScreen/>
    </Provider>
  );
};
export default App;
