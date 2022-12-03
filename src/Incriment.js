
import React from 'react';

import {
  SafeAreaView,Text, View, TouchableOpacity
} from 'react-native';
import { incNumber } from './redux/actions';
import { useDispatch } from 'react-redux';

const Incriment = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={{height:50, width:50, backgroundColor:"#00FF00"}} onPress={()=> dispatch(incNumber())}>
    <Text> + </Text>
    </TouchableOpacity>
  );
};  
export default Incriment;