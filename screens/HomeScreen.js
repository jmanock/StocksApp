import React,{Component} from 'react';
import {StyleSheet,TextInput,Text,View} from 'react-native';
import StocksAPI from '../api/StocksAPI';

export default class HomeScreen extends Component{
  state = {
    date:new Date(),
    symbole:'',
  }
  componentWillMount(){
    //StocksAPI.getDate();

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
        <TextInput placeholder='Enter Symbole' value={this.state.symbole} onChangeText={(text) =>this.setState({symbole:text})} style={styles.txt}/>
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
    backgroundColor:'#333'
  },
  txt:{
    backgroundColor:'gray',
    width:'90%',
    height:40
  }
})
