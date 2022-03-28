import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SECONDARYCOLOR } from '../../assets/colors/colors';
import { styles } from '../Styles/GeneralStyle';

const PrimaryButton = (props) => {
    return <TouchableOpacity onPress={props.onPress} style={[styles.btnBg,props.backgroundColor?{backgroundColor:props.backgroundColor}:null]}>
        <Text style={styles.medium}>{props.title}</Text>
    </TouchableOpacity>
};


export default PrimaryButton;
