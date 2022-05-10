import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { BLUEFONTCOLOR } from '../../assets/colors/colors';
import { styles } from '../Styles/GeneralStyle';

const SubscriptionCard = props => {
  console.log("props.id", props.id)
  if (props.id == 'com.motorcycle.dmv.lifetime') {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setActiveSubscription(props.id)
        }}
        style={
          props.id == props.activeSubscription
            ? [
              styles.subscriptionCardStyle,
              { borderWidth: 1.5, borderColor: '#757DFE' },
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
              right: wp(1.5),
              top: hp(0.5),
              borderRadius: wp(10),
              padding: wp('1%'),
            }}
          />
        ) : null}
        <View style={styles.textSubscription}>

          <Text style={[styles.medium, { color: BLUEFONTCOLOR, textAlign: 'left' }]}>
            {props.duration}
          </Text>

          <Text
            style={[
              styles.large,
              { color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold',fontSize:15 },
            ]}>
            $1.99/week
          </Text>

          <Text
            style={[
              { color: BLUEFONTCOLOR, fontSize: 14, marginTop: 5, marginBottom: 5, },
            ]}>
            in terms of 1 year
          </Text>

          <View style={{ width: 90, height: 35, backgroundColor: '#EDEFFE', justifyContent: 'center', alignItems: 'center', borderRadius: 25,}}>
            <Text
              style={[
                { color: BLUEFONTCOLOR, fontSize: 15 },
              ]}>
              Save 75%
            </Text>
          </View>

          <Text
            style={[
              styles.large,
              { color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold', fontSize:14,width:'100%' },
            ]}>
            {props.amount}/once
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setActiveSubscription(props.id)
        }}
        style={
          props.id == props.activeSubscription
            ? [
              styles.subscriptionCardStyle,
              { borderWidth: 1.5, borderColor: '#757DFE' },
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
              right: wp(1.5),
              top: hp(0.5),
              borderRadius: wp(10),
              padding: wp('1%'),
            }}
          />
        ) : null}
        <View style={styles.textSubscription}>

        
            <Text style={[styles.medium, { color: BLUEFONTCOLOR, textAlign:'left' }]}>
              {props.duration}
            </Text>

            <Text
              style={[
                styles.large,
                { color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold',  fontSize: wp('4%'),width:'100%' },
              ]}>
              {props.amount}/month
            </Text>
          


          <Text
            style={[
              styles.large,
              { color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold', fontSize: 18, },
            ]}>
            after 3-day Trial
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

};

export default SubscriptionCard;
