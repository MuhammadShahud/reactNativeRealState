import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import PrimaryButton from './PrimaryButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GRAPHBARSIllustration} from '../../assets/images/images';
import {styles} from '../Styles/GeneralStyle';
import {PRIMARYCOLOR} from '../../assets/colors/colors';
import { useSelector } from 'react-redux';
import { USER } from '../Redux/Reducers/AuthReducer';
const StatisticsPopup = props => {
  const [visible, setVisible] = React.useState(props.visible);
const user = useSelector(USER)
  const navigation = useNavigation();
  console.log(`visiblity-- ${props.visible}`);
  return visible ? (
    <Modal
      isVisible={true}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        // setVisible(0);
      }}>
      <View style={stylesSeperate.container}>
        <View
          style={{
            width: wp('80%'),
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 20,
            height: hp('50%'),
            justifyContent: 'center',
          }}>
          <Icon
            onPress={() => {
              navigation.navigate('Home')
              }}
            name={'cross'}
            type={'entypo'}
            color={'#246EE9'}
            size={25}
            containerStyle={{
              backgroundColor: 'white',
              position: 'absolute',
              right: wp(1),
              top: hp(1),
              borderRadius: wp(10),
              padding: wp('1%'),
            }}
          />
          <Image style={stylesSeperate.imageContainer} />
          
          <View style={styles.spaceHeight} />
          <Text
            style={[
              styles.large,
              {
                fontSize: 20,
                color: 'black',
                fontFamily: 'Roboto-Bold',
                alignSelf: 'center',
                margin: 10,
              },
            ]}>
            Upgrade to premium
          </Text>

          <Text style={{fontSize: 16, textAlign: 'center', width: wp('65%')}}>
            There are many variations of passage of Lorem Ipsum available
          </Text>

          <View style={styles.spaceHeight} />
          <View style={{width: wp('50%')}}>
            <PrimaryButton
              title="Start your free trail"
              // onPress={changeQuestion}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />

            <TouchableOpacity 

            onPress={() => {
            navigation.navigate('Home')
            }}
            >
              <Text
                style={[
                  styles.medium,
                  {
                    color: PRIMARYCOLOR,
                    fontFamily: 'Roboto-Bold',
                    alignSelf: 'center',
                    margin: 10,
                  },
                ]}>
                Not Right Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  ) : null;
};

export default StatisticsPopup;
export const stylesSeperate = StyleSheet.create({
  container: {
    //   flex:1,
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 111, 233, 0.6)',
    filter:'blur(4px)',
    width: '100%',
    height: '100%',
    // position: 'relative',
   
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'powderblue',
    // margin: 40,
  },
});
