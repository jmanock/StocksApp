import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class StocksScreen extends Component{

  render(){
    return(
      <View>
        <Text>Stocks Screen</Text>
      </View>
    )
  }
}

StocksScreen.navigationOptions = {
  title:'StocksScreen'
};
