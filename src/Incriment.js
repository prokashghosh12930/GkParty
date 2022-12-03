
import React from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';
import { INCRIMENT } from './redux/action/ActionType';
import { useDispatch } from 'react-redux';

const Incriment = () => {
  const dispatch = useDispatch();
  const addItem = () =>{
    dispatch(INCRIMENT)
  }
  return (
    <TouchableOpacity style={{height:50, width:50, backgroundColor:"#00FF00"}} onPress={addItem}>
    <Text> + </Text>
    </TouchableOpacity>
  );
};  
export default Incriment;