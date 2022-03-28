import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR} from '../../assets/colors/colors';
import {styles} from '../Styles/GeneralStyle';

const SubscriptionCard = props => {
  
  return (
    <TouchableOpacity
      onPress={() => {
      
        props.setActiveSubscription(props.id)
      }}
      style={
        props.id == props.activeSubscription
          ? [
              styles.subscriptionCardStyle,
              {borderWidth: 1.5, borderColor: '#757DFE'},
            ]
          : styles.subscriptionCardStyle
      }>
      {props.id == props.activeSubscription ? (
        <Icon
          name="check"
          type="antdesign"
          color={'#fff'}
          size={wp('3.5%')}
          containerStyle={{
            backgroundColor: '#757DFE',
            position: 'absolute',
            right: wp(-1.8),
            top: hp(-1.5),
            borderRadius: wp(10),
            padding: wp('1%'),
          }}
        />
      ) : null}
      <Text style={[styles.medium, {color: BLUEFONTCOLOR}]}>
        {props.duration}
      </Text>
      <Text
        style={[
          styles.large,
          {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold'},
        ]}>
        {props.amount}
      </Text>
      <View style={styles.smallBtn}>
        <Text style={styles.small}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubscriptionCard;
