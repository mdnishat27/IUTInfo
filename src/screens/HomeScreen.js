import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';


const HomeScreen = (props) => {
    return (
        <ScrollView contentContainerStyle={style.viewstyle}>
            <Image style={style.imagestyle} source={require('../../assets/IUTlogo.png')} />
            <Text style={style.textstyle}>Department of</Text>
            <Text style={style.text2style}>Computer Science and Engineering</Text>
            <Text style={style.textstyle}>Programme : SWE</Text>
            <Text>{"\n\n"}</Text>
            <TouchableOpacity onPress={function () {
                props.navigation.navigate("Profile");
            }}>
                <Text style={style.profiletextstyle}>My Profile</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>

            <MyButton title="Semester wise Course List" onPress={function () {
                props.navigation.navigate("Semesters");
            }} />
            <MyButton title="List of Faculty Members" onPress={function () {
                props.navigation.navigate("Faculty List");
            }} />
        </ScrollView>
    );
}

const style = StyleSheet.create(
    {
        viewstyle: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 10,
            borderBottomWidth: 20,
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderTopWidth: 10,
            borderColor: 'transparent'
        },
        textstyle: {
            color: 'black',
            fontSize: 20
        },
        text2style: {
            color: 'black',
            fontSize: 20,
            fontWeight: "bold"
        },
        profiletextstyle: {
            color: 'blue',
            fontSize: 20
        },
        imagestyle: {
            height: 130,
            width: 80,
        }
    }
);

export default HomeScreen;
