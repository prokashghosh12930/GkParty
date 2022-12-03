
import React,{useState} from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';

import  store  from './src/redux/store';
import MainScreen from './src/MainScreen';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
      <MainScreen/>
      </Provider>
  );
};
export default App;
