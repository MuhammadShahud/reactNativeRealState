import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GRAYCOLOR, PURPLECOLOR} from '../../assets/colors/colors';

import {GetFlashCards} from '../Redux/Actions/AuthAction';
import {styles} from '../Styles/GeneralStyle';
import {useDispatch} from 'react-redux';

const Set = props => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      disabled={props.open ? false : true}
      onPress={() => {
        props.open
          ? // navigation.navigate('VocabularyCards', {
            //   index: props.index,
            // })
            dispatch(
              GetFlashCards({
                id: props.setId,
                subject: 'card',
                navigation: navigation,
                destination: 'VocabularyCards',
              }),
            )
          : null;

        {
          console.log('\x1b[31m', 'start: ', GetFlashCards);
        }
      }}
      style={
        props.open
          ? styles.setBox
          : [styles.setBox, {backgroundColor: GRAYCOLOR}]
      }>
      <Text
        style={
          props.open
            ? styles.medium
            : [styles.medium, {color: 'black', fontFamily: 'Roboto-Bold'}]
        }>
        {props.data.title}
      </Text>
      <View style={{height: hp('.65%')}} />
      <Icon
        name={props.open ? 'lock-open' : 'lock'}
        type="simple-line-icon"
        size={wp('5.5%')}
        color={props.open ? 'black' : '#fff'}
        containerStyle={
          props.open
            ? styles.setIconBox
            : [styles.setIconBox, {backgroundColor: PURPLECOLOR}]
        }
        onPress={() => {}}
      />
    </TouchableOpacity>
  );
};

export default Set;
