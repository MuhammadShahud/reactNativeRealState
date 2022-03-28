import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../Styles/GeneralStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useSelector} from 'react-redux';
import {USER} from '../Redux/Reducers/AuthReducer';

const HomeProgess = props => {
  const user = useSelector(USER);
  console.log(props.percentage);
  const [percentage, setPercentage] = useState(props.percentage)
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.boxStyle, {backgroundColor: props.background}]}>
      <View style={styles.spaceHeight} />
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: hp('2%'),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: wp('8%'),
            height: wp('8%'),
            backgroundColor: '#FEFEFF',
            opacity: 0.1,
          }}
        />
        <View>
          <View
            style={{
              width: wp('3%'),
              height: wp('3%'),
              backgroundColor: '#FEFEFF',
              opacity: 0.1,
              marginHorizontal: wp('2%'),
            }}
          />
          <View style={{height: wp('1%')}} />
          <View
            style={{
              width: wp('3%'),
              height: wp('3%'),
              backgroundColor: '#FEFEFF',
              opacity: 0.1,
              marginHorizontal: wp('2%'),
            }}
          />
        </View>
      </View>

      
        <View
          style={{
            width: wp('35%'),
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
         { user?.subscription? props.percentage? <AnimatedCircularProgress
            size={wp('15%')}
            width={5}
            fill={
              user?.subscription
                ? Number.isNaN(percentage)
                  ? 1
                  : props.percentage
                : 1
            }
            tintColor="#CFD8DC"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={'#3d5875'}>
            {fill => (
              <Text style={styles.small}>
                {user?.subscription ? `${props.percentage}%` : '0%'}
              </Text>
            )}
          </AnimatedCircularProgress> :
           <AnimatedCircularProgress
            size={wp('15%')}
            width={5}
            fill={
              0
            }
            tintColor="#CFD8DC"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={'#3d5875'}>
            {fill => (
              <Text style={styles.small}>
                {user?.subscription ? `${props.percentage}%` : '0%'}
              </Text>
            )}
          </AnimatedCircularProgress>: 
          <AnimatedCircularProgress
          size={wp('15%')}
          width={5}
          fill={
            user?.subscription
              ? Number.isNaN(percentage)
                ? 1
                : props.percentage
              : 1
          }
          tintColor="#CFD8DC"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={'#3d5875'}>
          {fill => (
            <Text style={styles.small}>
              {user?.subscription ? `${props.percentage}%` : '0%'}
            </Text>
          )}
        </AnimatedCircularProgress>}
          <View style={{width: wp('2%')}}></View>
          <Text style={styles.small}>Completed</Text>
        </View>

      <View style={styles.spaceHeight} />
      <Text style={styles.medium}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default HomeProgess;
