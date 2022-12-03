
import React from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import { decNumber } from './redux/actions';
const Decriment = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={{height:50, width:50, backgroundColor:"#FF0000", alignItems:"center", justifyContent:"center"}} onPress={()=> dispatch(decNumber())}>
    <Text> - </Text>
    </TouchableOpacity>
  );
};
export default Decriment;