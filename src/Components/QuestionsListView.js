import React, { useEffect } from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GRAPHBARSIllustration} from '../../assets/images/images';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {styles} from '../Styles/GeneralStyle';
import {USER} from '../Redux/Reducers/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import { GetCompletedPercentage } from '../Redux/Actions/AuthAction';

const QuestionsListView = props => {
  const {item} = props;
  const {questions} = item
  const user = useSelector(USER);

  const checkForSetAttempts = () => {
    const totalQuestions = questions.length;
    let attemptedQuestions = 0
    const attemptedQuestion = questions.forEach(
      (value) => {
        value.attempt.includes(user.id) ? attemptedQuestions++ : null
      }
    )
    return (attemptedQuestions *100)/totalQuestions
  }

  const BOOKSICON = () => (
    <Svg width="27" height="37" viewBox="0 0 38 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_2_373)">
            <Path d="M38 0H6V38H38V0Z" fill="#6FABE6" />
            <Path d="M38 0C38 37.25 37.9 36 38 36C21.98 36 9 23.02 9 7V0H38Z" fill="#82BCF4" />
            <Path d="M38 38V46H4C1.8 46 0 44.22 0 42C0 39.79 1.79 38 4 38H38Z" fill="#C6C3D8" />
            <Path d="M38 39V46C1.29998 46 3.20998 46.31 1.71998 45.28C-0.120025 42.62 1.77998 39 4.99998 39H38Z" fill="#DAD7E5" />
            <Path d="M6 0V38H4C1.79 38 0 39.79 0 42V6C0 2.69 2.68 0 6 0Z" fill="#5B9AD8" />
            <Path d="M32 6H12V14H32V6Z" fill="#9FDBF3" />
            <Path d="M32 6V12H20C16.69 12 14 9.31 14 6H32Z" fill="#B2E5FB" />
            <Path d="M29 22H15C13.68 22 13.68 20 15 20H29C30.32 20 30.32 22 29 22Z" fill="#374F68" />
            <Path d="M27 26H17C15.68 26 15.68 24 17 24H27C28.32 24 28.32 26 27 26Z" fill="#374F68" />
            <Path d="M38 41V43H6.00001C4.68001 43 4.68001 41 6.00001 41H38Z" fill="#C6C3D8" />
        </G>
        <Defs>
            <ClipPath id="clip0_2_373">
                <Rect width="38" height="46.04" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)



  const navigation = useNavigation();

  return (
    user?.subscription? (
      <TouchableOpacity
      style={styles.questionListView}
      onPress={() => {
        navigation.navigate('QueScreen', {
          index:props.index,
          title: props.title,
        });
      }}
      
      >
      <View style={{width: wp('25%'), alignItems: 'center'}}>
       
        <BOOKSICON/>
        <View style={{height: hp('.5%')}} />
        <Text style={[styles.medium, {color: 'black',fontSize: wp('3%')}]}>
          {props.item.title}
        </Text>
      </View>
  
      <View style={{width: wp('5%')}}></View>
      <View style={{alignItems: 'flex-start'}}>
        <Text
          style={[
            styles.medium,
            {color: 'black', fontFamily: 'Roboto-Bold'},
          ]}>
          {props.item.questions.length} Questions
        </Text>
  
        <View style={{height: hp('1%')}}></View>
        <View
          style={{
            width: wp('55%'),
            height: hp('1.5%'),
            backgroundColor: '#E4E4E4',
            borderRadius: wp('50%'),
          }}>

          <View
            style={{
              width: `${checkForSetAttempts()}%`,
              height: hp('1.5%'),
              backgroundColor: '#757DFE',
              borderRadius: wp('50%'),
            }}></View>
        </View>
  
        <View style={{height: hp('1%')}}></View>
        <Text
          style={[
            styles.small,
            {color: 'black', alignSelf: 'flex-end', fontSize: wp('3%')},
          ]}>
          {checkForSetAttempts()}% Completed
        </Text>
      </View>
    </TouchableOpacity>
    ) :
  props.item.premium ?
  (
    <TouchableOpacity
    style={[styles.questionListView,{backgroundColor:'#BEBEBE'}]}
        
        onPress={() => {
          navigation.navigate('Subscription');
        }}
      >
        <View style={{width: wp('25%'), alignItems: 'center'}}>
                   <BOOKSICON/>
          <View style={{height: hp('.5%')}} />
          <Text style={[styles.medium, {color: 'black',fontSize: wp('3%')}]}>
            {props.item.title}
          </Text>
        </View>

        <View style={{width: wp('5%')}}></View>
        <View style={{alignItems: 'flex-start'}}>
          <Text
            style={[
              styles.medium,
              {color: 'black', fontFamily: 'Roboto-Bold'},
            ]}>
            {props.item.questions.length} Questions
          </Text>

          <View style={{height: hp('1%')}}></View>
          <View
            style={{
              width: wp('55%'),
              height: hp('1.5%'),
              backgroundColor: '#E4E4E4',
              borderRadius: wp('50%'),
            }}>
         
            <View
              style={{
                width: 0,
                height: hp('1.5%'),
                backgroundColor: '#757DFE',
                borderRadius: wp('50%'),
              }}></View>
          </View>

          <View style={{height: hp('1%')}}></View>
          <Text
            style={[
              styles.small,
              {color: 'black', alignSelf: 'flex-end', fontSize: wp('3%')},
            ]}>
            
          </Text>
        </View>
      </TouchableOpacity>
  ) :
  (
    <TouchableOpacity
    style={styles.questionListView}
    onPress={() => {
      navigation.navigate('QueScreen', {
        index:props.index
        // title: title,
      });
    }}
    
    >
    <View style={{width: wp('25%'), alignItems: 'center'}}>
     
      <BOOKSICON/>
      <View style={{height: hp('.5%')}} />
      <Text style={[styles.medium, {color: 'black',fontSize: wp('3.3%')}]}>
        {props.item.title}
      </Text>
    </View>

    <View style={{width: wp('5%')}}></View>
    <View style={{alignItems: 'flex-start'}}>
      <Text
        style={[
          styles.medium,
          {color: 'black', fontFamily: 'Roboto-Bold'},
        ]}>
        {props.item.questions.length} Questions
      </Text>

      <View style={{height: hp('1%')}}></View>
      <View
        style={{
          width: wp('55%'),
          height: hp('1.5%'),
          backgroundColor: '#E4E4E4',
          borderRadius: wp('50%'),
        }}>
       
        <View
          style={{
            width: 0,
            height: hp('1.5%'),
            backgroundColor: '#757DFE',
            borderRadius: wp('50%'),
          }}></View>
      </View>

      <View style={{height: hp('1%')}}></View>
      <Text
        style={[
          styles.small,
          {color: 'black', alignSelf: 'flex-end', fontSize: wp('3%')},
        ]}>
       
      </Text>
    </View>
  </TouchableOpacity>
  )
  )

  };

export default QuestionsListView;
