import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GetFlashCards} from '../Redux/Actions/AuthAction';
import {styles} from '../Styles/GeneralStyle';
import {useDispatch, useSelector} from 'react-redux';
import { USER } from '../Redux/Reducers/AuthReducer';

const FalshCard = props => {
  const navigation = useNavigation();
  const user = useSelector(USER)
  const dispatch = useDispatch();
  // console.log(`props.setID`, props.setID);
  return (
    <TouchableOpacity
      onPress={() => {
         !user?.subscription?
         props.premiumkey
          ? navigation.navigate('Subscription')
          : dispatch(
              GetFlashCards({
                id: props.setID,
                subject: 'card',
                navigation: navigation,
                destination: 'Cards'
              }),
            
            ):
            dispatch(
              GetFlashCards({
                id: props.setID,
                subject: 'card',
                navigation: navigation,
                destination: 'Cards'
              }),
            
            )
      }}
      style={[
        styles.questionListView,
        {backgroundColor: props.background},
        props.premiumkey ? !user?.subscription?{opacity: 0.5} : null:null,
      ]}>
      <View>
        <Text
          style={[
            styles.medium,
            {
              fontSize: wp('5%'),
              fontFamily: 'Roboto-Medium',
              textAlign: 'left',
            },
          ]}>
          {props.cards} cards
        </Text>
        <View style={{height: hp('.5%')}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('80%'),
          }}>
          <Text style={[styles.medium, {fontFamily: 'Roboto-Medium'}]}>
            {props.set}
          </Text>
          <Icon
            name="message-arrow-right-outline"
            type="material-community"
            color="#fff"
          />
        </View>
        <View style={{height: hp('.5%')}} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="flag" type="font-awesome" color="#fff" size={wp('4%')} />
          <View style={{width: wp('2%')}} />
          <Text style={[styles.small, {fontSize: wp('2.8%')}]}>
            {props.review}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FalshCard;
