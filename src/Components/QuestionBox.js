import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR, PRIMARYCOLOR} from '../../assets/colors/colors';
import {styles} from '../Styles/GeneralStyle';

const QuestionBox = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.questionBoxStyle}
      onPress={() =>
        navigation.navigate(
          props.stacks,
          {title: props.title,
          subject: props.subject,}
        )     
      }
      disabled={props.title ==="Timed Exam" }>
          {/* {console.log(`stack: `,props)} */}

      <View style={{width: wp('35%'), alignSelf: 'center'}}>
        <View style={styles.spaceHeight} />
        <Icon
          name={props.iconName}
          type={props.iconType}
          color={'#fff'}
          size={wp('5%')}
          containerStyle={{
            width: wp('10%'),
            height: hp('5%'),
            justifyContent: 'center',
            backgroundColor: PRIMARYCOLOR,
            borderRadius: wp('2%'),
            alignSelf: 'flex-end',
          }}
        />
        <View style={styles.spaceHeight} />
        <Text
          style={[
            styles.medium,
            {
              color: BLUEFONTCOLOR,
              textAlign: 'left',
              fontFamily: 'Roboto-Bold',
            },
          ]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionBox;
