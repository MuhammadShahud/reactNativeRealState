import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BLUEFONTCOLOR } from '../../assets/colors/colors';
import { styles } from '../Styles/GeneralStyle';

const SubcriptionDetail = (props) => {
    return <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="check" type="antdesign" color={'green'} size={wp('5%')} />
            <View style={{ width: wp('1.5%') }} />
            <Text style={[styles.small, { color: BLUEFONTCOLOR, textAlign: 'left' }]}>{props.title}</Text>
        </View>
        <View style={{ height: hp('.8%') }} />
    </View>
};

export default SubcriptionDetail;
