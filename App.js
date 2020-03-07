import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.envelope_collar}></Text>
      <View style={styles.paper}>
        <Text style={styles.paper_word}>玩家 李逸歆</Text>
        <Text></Text>
        <Text>恭喜成為</Text>
        <Text>第 110719028 位得獎者 </Text>
      </View>
      <View style={styles.envelope_body}>
        <Text style={styles.omedeto}>恭</Text>
        <Text style={styles.omedeto}>喜</Text>
        <Text style={styles.omedeto}>發</Text>
        <Text style={styles.omedeto}>財</Text>
      </View>
      <View style={styles.money_shadow2}></View>
      <View style={styles.money_circle2}>
        <Text style={styles.money}>$</Text>
      </View>
      <View style={styles.money_shadow}></View>
      <View style={styles.money_circle}>
        <Text style={styles.money}>$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  envelope_collar: {
    width:250,
    height:100,
    backgroundColor:'firebrick',
    borderRadius:10,
    marginTop:200,
    marginBottom:-250,
  },
  envelope_body: {
    width:250,
    height:300,
    backgroundColor:'crimson',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper_word:{
    fontSize:20,
  },
  paper:{
    width:230,
    height:200,
    backgroundColor:'#FFFFBF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  omedeto:{
    color:'white',
    fontSize:35,
  },
  money_circle:{
    backgroundColor:'gold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    width:100,
    height:100,
    marginTop:-100,
    marginLeft:130,
    shadowColor:'black',
    shadowOpacity:0.8,
    shadowRadius:2,
    shadowOffset:{
      height:5,
      width:0,
    }
  },
  money:{
    color:'olive',
    fontSize:35,
  },
  money_circle2:{
    backgroundColor:'gold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    width:100,
    height:100,
    marginTop:-100,
    marginLeft:280,
    shadowColor:'#000000',
    shadowOpacity:0.8,
    shadowRadius:2,
    shadowOffset:{
      height:1,
      width:0,
    }
  },
  money_shadow:{
    backgroundColor:'black',
    borderRadius:50,
    width:100,
    height:100,
    marginTop:-50,
    marginLeft:140,
    opacity:0.6,
  },
  money_shadow2:{
    backgroundColor:'black',
    borderRadius:50,
    width:100,
    height:100,
    marginTop:-100,
    marginLeft:290,
    opacity:0.6,
  },
  
});
