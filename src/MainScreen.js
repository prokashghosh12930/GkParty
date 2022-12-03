
import React,{useState} from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';

import Incriment from './Incriment';
import Decriment from './Decriment';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./redux/actions";

const MainScreen = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
const[num, setNum] = useState(13);
  return (
    <SafeAreaView style={{height:'100%', width:'100%'}}>
    <Text style={{height:50, width:50, backgroundColor:'#808080', justifyContent:"center", alignSelf:"center",top:'45%'}}>{myState} </Text>
    <View style={{top:'40%',left:"25%"}}>
    <Incriment/>
    </View>
    <View style={{top:'40%',left:'70%'}}>
    <Decriment/>
    </View>
    </SafeAreaView>
  );
};
export default MainScreen;