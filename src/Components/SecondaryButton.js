import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/GeneralStyle';

const SecondaryButton = (props) => {
    
    return <TouchableOpacity onPress={props.onPress} style={props.background ? [styles.btnBgSecondary, { backgroundColor: props.background }] : styles.btnBgSecondary}>
        <Text style={styles.medium}>{props.title}</Text>
    </TouchableOpacity>
};


export default SecondaryButton;
