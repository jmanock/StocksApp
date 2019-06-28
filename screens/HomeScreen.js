import React,{Component} from 'react';
import {TouchableOpacity,StyleSheet,TextInput,Text,View} from 'react-native';
import StocksAPI from '../api/StocksAPI';

export default class HomeScreen extends Component{
  state = {
    date:new Date(),
    symbole:'',
    name:'',
    yesterdayPrice:'',
    todayPrice:'',
    timeRefreshed:'',
    close:'',
    data:[]
  }
  componentWillMount(){
    /*
      ~ Need todays date, yesterdays date √
      ~ Maybe get news?
      ~ Show stock
        - Name
        - Price
        - Change
        - Update Time
      ~ Flat list?
      ~ Time till close or Open
      ~ Maybe look for companies & symboles?
    */

  }
  getDate = () =>{
    var year = this.state.date.getFullYear();
    var month = this.state.date.getMonth() + 1;
    var day = this.state.date.getDate();
    var yesterday = this.state.date.getDate() -1;
    if(month < 10){
      month = '0'+month;
    }
    if(day < 10){
      day = '0'+day;
    }
    StocksAPI.getDate(year,month,day,yesterday);
  }

  getStockQuote = () =>{
    StocksAPI.getStocks(this.state.symbole).then(function(data){
      this.setState({
        time:data.time,
        todayPrice:data.closePrice,
        yesterdayPrice:data.yesterdayClose,
        name:data.name,
        change:data.change,
        symbole:''
      });
    }.bind(this))
  }
  // something = () =>{
  //   StocksAPI.getCompanies(this.state.symbole).then(function(data){
  //
  //     // this.setState({
  //     //   symbolLook:data.symbol,
  //     //   nameLook:data.name,
  //     //   symbole:''
  //     // });
  //   }.bind(this));
  something = () =>{
    StocksAPI.getCompanies(this.state.symbole).then(function(data){
      this.setState({
        data:data,
        symbole:''
      });
    }.bind(this));
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput placeholder='Enter Symbol' value={this.state.symbole} onChangeText={(text) =>this.setState({symbole:text})} style={styles.txt} placeholderTextColor={'white'}/>

        <TouchableOpacity onPress={this.something}>
          <Text style={styles.btnText}>Get Quote</Text>
        </TouchableOpacity>

        <Text>{this.state.name}</Text>
        <Text>{this.state.todayPrice}</Text>
        <Text>{this.state.change}</Text>
        <Text>{this.state.symbolLook}</Text>
        <Text>{this.state.nameLook}</Text>
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
