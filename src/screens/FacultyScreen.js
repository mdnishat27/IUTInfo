import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

let alldata = require('../../assets/data.json')
let facultydata = alldata["facultylist"]

function Childview ({title, index}) {
  return (
      <View
        style={{
          padding: 12,
          width: "100%",
          margin:5,
          borderBottomWidth:1,
          flexDirection:"row",
        }}
      >
        <View width={30}>
          <Text style={style.textstyle} >{index}</Text> 
        </View>
        <Text style={style.textstyle}>{title}</Text>
      </View>
  );
}

function FacultyList(){
  let vars = 1;
    return (
      <SafeAreaView scrollviewstyle={style.scrollviewstyle}>
          <FlatList
          keyExtractor={item=>item["name"]}
          data={facultydata}
          renderItem={ ({item}) => 
            <Childview title={item["name"]} index={vars++} /> 
          }
          />
      </SafeAreaView>
    );
}

const style = StyleSheet.create(
    {
      scrollviewstyle:{
          alignItems:'center',
          justifyContent: 'space-around',
          borderRadius:10,
          borderBottomWidth:20,
          borderLeftWidth:10,
          borderRightWidth:10,
          borderTopWidth:10,
          borderColor:'transparent'
      },
      textstyle:{
        color:'black',
        fontSize:20
    }
  }
);

export default FacultyList;