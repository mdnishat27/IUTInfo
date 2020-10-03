import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

let alldata = require('../../assets/data.json')
let facultydata = alldata["facultylist"]

function Childview({ coursecode, coursename, index }) {
    return (
        <View
            style={{
                padding: 12,
                width: "100%",
                margin: 5,
                borderBottomWidth: 1,
                flexDirection: "row",
            }}
        >
            <View width={30}>
                <Text style={style.textstyle} >{index}</Text>
            </View>
            <View flexDirection={"column"}>
                <Text style={style.textstyle}>{coursecode}</Text>
                <Text style={style.subtextstyle}>{coursename}</Text>
            </View>
        </View>
    );
}

function CourseList(props) {
    let semester = props.route.params.semester
    let alldata = require('../../assets/data.json')
    let title = "Semester"
    if (semester == "Semester1") {
        facultydata = alldata["Semester1"]
        title = "1st Semester"
    }
    else if (semester == "Semester2") {
        facultydata = alldata["Semester2"]
        title = "2nd Semester"
    }
    else if (semester == "Semester3") {
        facultydata = alldata["Semester3"]
        title = "3rd Semester"
    }

    let serialno = 1;
    return (
        <SafeAreaView scrollviewstyle={style.scrollviewstyle}>
            <View style={style.scrollviewstyle}>
                <Text style={style.titlestyle}>{title}</Text>
            </View>
            <FlatList
                keyExtractor={item => item["coursecode"]}
                data={facultydata}
                renderItem={({ item }) =>
                    <Childview coursecode={item["coursecode"]} coursename={item["coursename"]} index={serialno++} />
                }
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create(
    {
        scrollviewstyle: {
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
            fontSize: 22
        },
        subtextstyle: {
            color: 'black',
            fontSize: 12
        },
        titlestyle: {
            color: 'black',
            fontSize: 25
        },
    }
);

export default CourseList;
