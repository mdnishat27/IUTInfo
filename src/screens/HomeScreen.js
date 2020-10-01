import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';


const HomeScreen= () =>{
    return(
        <View>
            <Text style={style.textstyle}>Hello world</Text>
            <Image source={require('../../assets/IUTlogo.png')}/>
        </View>
    );
}

const style = StyleSheet.create(
    {
       textstyle:{
           
       } 
    }
);

export default HomeScreen;
