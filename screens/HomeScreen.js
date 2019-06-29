import React,{Component} from 'react';
import {TouchableOpacity,StyleSheet,TextInput,Text,View} from 'react-native';
import StocksAPI from '../api/StocksAPI';

export default class HomeScreen extends Component{
  constructor(props){
    super(props);
  }
  state = {
    symbol:'',
    data:[]
  }
  search = () =>{
    StocksAPI.getAllCompanies(this.state.symbol).then(function(data){
      this.setState({
        data:data
      });
    }.bind(this));
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput placeholder='Enter Comapany Name or Symbol' value={this.state.symbol} onChangeText={(text) =>this.setState({symbol:text})} style={styles.txt} placeholderTextColor={'white'}/>

        <TouchableOpacity onPress={this.search}>
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>

        <Text>{this.state.data.name}</Text>
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
