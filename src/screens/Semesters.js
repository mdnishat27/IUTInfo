import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

function Semesters(){
    return (
        <ScrollView contentContainerStyle={style.viewstyle}>
             <MyButton title="1st Semester" onPress={function(){
                console.log("1st semester button pressed");
            }}/>
             <MyButton title="2nd Semester" onPress={function(){
                console.log("2nd semester button pressed");
            }}/>
             <MyButton title="3rd Semester" onPress={function(){
                console.log("3rd semester button pressed");
            }}/>
        </ScrollView>
    );
}

const style = StyleSheet.create(
    {
        viewstyle:{
            alignItems:'center',
            justifyContent: 'space-around',
            borderRadius:10,
            borderBottomWidth:20,
            borderLeftWidth:10,
            borderRightWidth:10,
            borderTopWidth:10,
            borderColor:'transparent'
        },
    }
);

export default Semesters;