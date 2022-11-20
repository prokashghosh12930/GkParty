
import React,{useState} from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';

import Incriment from './src/Incriment';
import Decriment from './src/Decriment';
import store from "./src/redux/store/store"
import { Provider } from 'react-redux';


const App = () => {
 
const[num, setNum] = useState(1);
  return (
    <SafeAreaView style={{height:'100%', width:'100%'}}>
    <Text style={{height:50, width:50, backgroundColor:'#808080', justifyContent:"center", alignSelf:"center",top:'45%'}}>{num} </Text>
    <View style={{top:'40%',left:"25%"}}>
    <Incriment/>
    </View>
    <View style={{top:'40%',left:'70%'}}>
    <Decriment/>
    </View>
    </SafeAreaView>
  );
};
export default App;
