import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

function Semesters(props) {
    return (
        <ScrollView contentContainerStyle={style.viewstyle}>
            <MyButton title="1st Semester" onPress={function () {
                props.navigation.navigate("Course List", { semester: 'Semester1' });
            }} />
            <MyButton title="2nd Semester" onPress={function () {
                props.navigation.navigate("Course List", { semester: 'Semester2' });
            }} />
            <MyButton title="3rd Semester" onPress={function () {
                props.navigation.navigate("Course List", { semester: 'Semester3' });
            }} />
        </ScrollView>
    );
}

const style = StyleSheet.create(
    {
        viewstyle: {
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 10,
            borderBottomWidth: 20,
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderTopWidth: 10,
            borderColor: 'transparent'
        },
    }
);

export default Semesters;
