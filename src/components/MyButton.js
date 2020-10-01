import React from 'react';
import AwesomeButton  from "react-native-really-awesome-button";

const MyButton = ({ onPress, title })=>{
    return (
    <AwesomeButton 
        onPress={onPress} 
        stretch={true}
        raiseLevel={1}
        textColor="red"
        textSize={20}
        backgroundColor="#95d44a"
        borderWidth={2}
        borderRadius={25}
        >{title}
    </AwesomeButton>
    );
}

export default MyButton
