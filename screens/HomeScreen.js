import React,{Component} from 'react';
import {StyleSheet,TextInput,Text,View} from 'react-native';
import StocksAPI from '../api/StocksAPI';

export default class HomeScreen extends Component{
  state = {
    date:new Date()
  }
  componentWillMount(){
    //StocksAPI.getDate();
    this.getDate();
  }
  getDate = () =>{
    var year = this.state.date.getFullYear();
    var month = this.state.date.getMonth() + 1;
    var day = this.state.date.getDate();
    if(month < 10){
      month = '0'+month;
    }
    if(day < 10){
      day = '0'+day;
    }
    console.log(year, month, day);
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput placholder='Enter Symbole' />
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title:'HomeScreenz'
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})
