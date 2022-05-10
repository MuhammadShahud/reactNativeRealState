import React from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BLUEFONTCOLOR, PURPLECOLOR } from '../../assets/colors/colors';
import { styles } from '../Styles/GeneralStyle';

const ProgressStatistics = (props) => {
    return <View style={{ width: wp('78%'), alignSelf: 'center' }}>
        <Text style={[styles.medium, { color: BLUEFONTCOLOR, textAlign: 'left' }]}>{props.title}</Text>
        <View style={{ height: hp('1%'), }}></View>
        <View style={{ width: '100%', height: hp('1.8%'), backgroundColor: '#E4E4E4', borderRadius: wp('50%') }}>
            <View style={{ width: `${props.percentage}%`, height: hp('1.8%'), backgroundColor: PURPLECOLOR, borderRadius: wp('50%') }}>

            </View>
        </View>
        <View style={{ height: hp('1%'), }}></View>
        <Text style={[styles.small, { color: 'black', alignSelf: 'flex-end', fontSize: wp('3%') }]}>{props.percentage?`${props.percentage}% Completed`:null}</Text>
    </View>
};

export default ProgressStatistics;
