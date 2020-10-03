import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';


function Profile(){
    return(
        <ScrollView contentContainerStyle={style.scrollviewstyle}>
            <Image style={style.imagestyle} source={require('../../assets/propic.jpg')}/>
            <View style={style.viewstyle}>
                <Text style={style.text2style}>Name : Md. Nishat Ishmum</Text>
                <Text style={style.text2style}>Student ID : 170042027</Text>
                <Text style={style.textstyle}>Room no : 504 South Hall of Residence</Text>
                <Text style={style.textstyle}>Email : nishatishmum@iut-dhaka.edu</Text>
            </View>
        </ScrollView>
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
        viewstyle:{
            alignItems:'center',
            justifyContent: 'space-around',
            borderRadius:10,
            borderBottomWidth:20,
            borderLeftWidth:10,
            borderRightWidth:10,
            borderTopWidth:30,
            borderColor:'transparent'
        },
        imagestyle:{
            height:150,
            width:150,
        },
        textstyle:{
            color:'black',
            fontSize:15
        },
        text2style:{
            color:'black',
            fontSize:20
        },
    }
);

export default Profile;