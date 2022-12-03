
import React from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';

import { DECRIMENT } from './redux/action/ActionType';
import { DecrimentNum } from './redux/action/Action';

const Decriment = () => {
 
  const dispatch = useDispatch();
  const decrimentItem = (index)=> {
    dispatch(DecrimentNum(index))
  }
  return (
    <TouchableOpacity style={{height:50, width:50, backgroundColor:"#FF0000", alignItems:"center", justifyContent:"center"}} onPress={decrimentItem()}>
    <Text> - </Text>
    </TouchableOpacity>
  );
};
export default Decriment;