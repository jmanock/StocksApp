import React,{Component} from 'react';
import {TouchableOpacity,StyleSheet,TextInput,Text,View} from 'react-native';
import StocksAPI from '../api/StocksAPI';

export default class HomeScreen extends Component{
  state = {
    date:new Date(),
    symbole:'',
  }
  componentWillMount(){
    /*
      ~ Need todays date, yesterdays date
      ~ Maybe get news?
      ~ Show stock
        - Name
        - Price
        - Change
        - Update Time
      ~ Flat list?
      ~ Time till close or Open
    */

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
  getStockQuote =()=>{
    StocksAPI.getStocks(this.state.symbole);
    this.setState({
      symbole:''
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput placeholder='Enter Symbole' value={this.state.symbole} onChangeText={(text) =>this.setState({symbole:text})} style={styles.txt} placeholderTextColor={'white'}/>

        <TouchableOpacity onPress={this.getStockQuote}>
          <Text style={styles.btnText}>Get Quote</Text>
        </TouchableOpacity>

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
    height:40,
    paddingLeft:7
  },
  btnText:{
    fontSize:20,
    marginTop:20,
    color:'orange'
  }
})
