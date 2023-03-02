import { StatusBar } from 'expo-status-bar';
import React, {Component, PureComponent} from 'react';
import { StyleSheet, Text,Image,View,TextInput,SafeAreaView,TouchableOpacity,TouchableHighlight } from 'react-native';

class App extends Component
{
constructor(props){
super(props)
  this.state={
    username:'',
    email:'',
    password:''
  }
  this.handleChange = this.handleChange.bind(this);  
}
handleChange(event) { 
  if(event.target.id==="username"){
      this.setState({username: event.target.value});  
  } 
  if(event.target.id==="email"){
      this.setState({email: event.target.value});  
  }
  if(event.target.id==="password"){
      this.setState({password:event.target.value});
  }
}  
  render(){
  return (
          <View style={styles.container}>
          <View  style={styles.subcontainer}>
          <View>
           
              <Image
            style={{
              resizeMode: 'center',
              height: 100,
              width: 200,
            }}
            source={require('./assets/Rns.png')}
          />

           <Text style={styles.signup} >Sign up </Text>
            <TextInput
                      style={styles.input}
                     
                      onChangeText={this.handleChange}
                      // value={"email"}
                      value={this.state.username}
                      placeholder="Username"
                    
                        />

          <TextInput
                      style={styles.input}
                      onChangeText={this.handleChange}
                      // value={"email"}
                      value={this.state.email}
                      placeholder="Email"
                     
                        />
          <TextInput
                 style={styles.input} 
                 onChangeText={this.handleChange} 
                 value={this.state.password}
                 placeholder="Password"
                 secureTextEntry={true}
                 maxLength = {8}  
                 ></TextInput> 
           </View>      
          <View>
           <TouchableOpacity style={styles.button}>
             <Text>REGISTER</Text>
            </TouchableOpacity>
           </View>
            <View style={styles.smedia}>
             <TouchableHighlight onPress={''}>
                    <View style={styles.mediabutton}>
                     <Image
            style={{
              resizeMode: 'center',
              height: 10,
              width: 30,
            }}
            source={require('Google.png')}
          />
                      </View>
            </TouchableHighlight>
             <TouchableHighlight onPress={''}>
                <View style={styles.mediabutton}>
                  <Image
                    style={{
                      resizeMode: 'center',
                      height: 10,
                      width: 30,
                    }}
                    source={require('twitter.png')}
                  />
                </View>
            </TouchableHighlight>
             <TouchableHighlight onPress={''}>
                <View style={styles.mediabutton}>
                    <Image
                    style={{
                      resizeMode: 'center',
                      height: 10,
                      width: 30,
                    }}
                    source={require('fb.png')}
                  />
                </View>
            </TouchableHighlight>
            </View> 
            <Text style={styles.login} > Already have an account?Login</Text>
        </View>            

    </View>
             
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 0.8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    paddingTop:2
   
  },
 input: {
    height: 40,
    margin: 5,
    borderBottomWidth:1,
    padding: 10,
    color:'#00bfff',
   //autoFocus:true
   blur:true
  },
 
  button: {
    
    justifycontent:'center',
   backgroundColor: '#00fa9a',
    paddingVertical:10,
    paddingHorizontal:70,
    marginHorizontal:27,
     marginVertical:5
  
  },
   mediabutton: {
    
    // backgroundColor: '#00bfff',
    margin: 10,
    borderWidth:1,
    borderColor:'#00bfff',
    justifyContent:'space-between',
    padding: 10,
  
  },
 
  login:{
    textAlign:'center',
    margin:5,
    color:'#00bfff'
  },
  signup:{
    textAlign:'center',
    fontSize:25,
    margin:10,
    color:'#00bfff'
  },
smedia:{
flexDirection:'row',
justifyContent:'space-between',
}


});
export default App;