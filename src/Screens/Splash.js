import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Alert,ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {INTROIMAGE} from '../../assets/images/images';
import PrimaryButton from '../Components/PrimaryButton';
import * as RNIap from 'react-native-iap';
import {
  GetQuestionFunction, GetRestQustions, GetSetsFunction, Login, LoginFunction} from '../Redux/Actions/AuthAction';
import {useDispatch} from 'react-redux';
import {styles} from '../Styles/GeneralStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getPurchases = async () => {
    try {
      const purchases = await RNIap.getAvailablePurchases();
     if(purchases.length==0){
       console.log("init");
       await AsyncStorage.removeItem('user');
       dispatch(Login({}));
       navigation.navigate('Home');
      
     }else{
       console.log("else");
       getAsyncData();
     }
  
    } catch(err) {
      console.warn("err ===>>   ",err); 
      Alert.alert(err.message);
    }
  }
  const getAsyncData = async () => {
    const response = await AsyncStorage.getItem('user');


    if (JSON.parse(response)?.user.orderId !== undefined) {
      
      dispatch(GetQuestionFunction());

      dispatch(GetSetsFunction());
      dispatch(
        // GetWeeklyStatistics(),
        LoginFunction(
          {
           orderId: JSON.parse(response).user.orderId
          },
          navigation,
          "Home",
          JSON.parse(response).user.id

        ),
        // GetQuestionFunction()
      );
    }else{
      navigation.navigate('Home')
    }
  };


  
  useFocusEffect(
    useCallback(() => {
      RNIap.initConnection().then(()=>{
        dispatch(GetRestQustions());
        getPurchases();
      });
       
     
      
    }, []),
       
  );
 

  return (
    <View
      style={[
        styles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View style={styles.innerView}>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={INTROIMAGE}
        />
        <Text style={styles.large}>The Future to Real Estate Education</Text>
        <View style={styles.spaceHeight} />
        <Text
          style={[
            styles.medium,
            {
              width: wp('70%'),
            },
          ]}>
          Prepare for your real estate exam with easy to use Practice test.
        </Text>
        <View style={{height: hp('4%')}} />
        <View style={{  flex: 1,
    justifyContent: "center",   flexDirection: "row",
    justifyContent: "space-around",
    padding: 10}}>
   
    <ActivityIndicator size="large" color="#F4A550" />
  </View>
      </View>
    </View>
  );
};

export default Splash;
