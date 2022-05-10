import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  Share,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackHeader from '../Components/BackHeader';
import SingleListSetting from '../Components/SingleListSetting';
import {styles} from '../Styles/GeneralStyle';
import {SETTINGIllustration} from '../../assets/images/images';
import SecondaryButton from '../Components/SecondaryButton';
import InAppReview from 'react-native-in-app-review';
import {useNavigation} from '@react-navigation/native';
import { Linking, Platform } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {USER} from '../Redux/Reducers/AuthReducer';
import * as StoreReview from 'react-native-store-review';
import {
  EraseAllData,
  FlashMessage,
  GetWeeklyStatistics,
  Login,
} from '../Redux/Actions/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [checked, setChecked] = useState(false);
  const user = useSelector(USER);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const title = 'Real-Estate-Advance App ';
  const message = 'please check this out...  https://awesome.contents.com/';

  const options = {
    title,
    message,
  };

  const onShare = async () => {
    try {
      const result = await Share.share(options);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  InAppReview.isAvailable();

  // trigger UI InAppreview
  const rateApp = () => {
    const PLAY_STORE_LINK = 'market://details?id=com.reactnative.app.motorcycle.dmv.edu';
    Linking.openURL(PLAY_STORE_LINK)
  };
  const navigation = useNavigation();

  const calenderExam = () => {
    navigation.navigate('IntroExamDate');
  };
  const toTerms = () => {
    navigation.navigate('termsCondition');
  };
  const toPrivacy = () => {
    navigation.navigate('privacyPolicy');
  };

  const toMail = () => {
    let url = 'mailto:realestateadvantageapp@gmail.com?subject=FeedBack';
    Linking.openURL(url);
  };
  const eraseData = () => {
    console.log('work');
    dispatch(EraseAllData(user.id, navigation));
  };
  const resetData = () => {
    Alert.alert(
      'Your all progress will be deleted!!',
      'Do you want to reset all progress?',
      [
        {text: 'Yes', onPress: () => eraseData()},
        {
          text: 'No',
          onPress: () => console.log('No button clicked'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View style={styles.container}>
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />

      <View style={styles.spaceHeight} />
      {!user ? (
        <View
          style={{
            width: wp('86%'),
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Text style={[styles.large, {textAlign: 'left'}]}>Settings</Text>
          </View>

          <View style={{width: wp('40%')}}>
            <SecondaryButton
              onPress={() => navigation.navigate('Subscription')}
              title="Subscribe"
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: wp('86%'),
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Text style={[styles.large, {textAlign: 'left'}]}>Settings</Text>
          </View>
        </View>
      )}
      <View style={{height: hp('.5%')}} />

      <View style={styles.spaceHeight} />
      <ScrollView>
        <View style={styles.homeFooterViewStyle}>
          <View style={styles.spaceHeight} />

          <View style={styles.settingBoxIcon}>
            <SingleListSetting
              title="Study Reminder"
              description="Many desktop publishing packages and web page"
              switch={true}
            />
            <View style={styles.spaceHeight} />
            {user?.subscription ? (
              <SingleListSetting
                onPress={calenderExam}
                title="Schedule your Exam"
                description="Many desktop publishing packages and web page"
                iconName="calendar"
                iconType="feather"
              />
            ) : (
              <SingleListSetting
                onPress={toMail}
                title="Send Feedback"
                description="Many desktop publishing packages and web page"
                iconName="md-mail-unread-outline"
                iconType="ionicon"
              />
            )}
          </View>

          {!user ? <View style={styles.spaceHeight} /> : null}
          {/* Adding Image */}

          {!user ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Subscription')}
              style={[
                styles.homeImageStyle,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <View style={{}}>
                <Text style={[styles.large, {textAlign: 'left'}]}>
                  Get Premium
                </Text>
                <Text
                  style={[styles.small, {width: wp('35%'), fontSize: wp(2.5)}]}>
                  It is a long established fact that a reader will be distracted
                </Text>
              </View>
              <Image
                source={SETTINGIllustration}
                style={{width: wp('45%'), height: hp('15%')}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null}

          <View style={styles.spaceHeight} />
          <View style={styles.settingBoxIcon}>
            <SingleListSetting
              onPress={onShare}
              title="Share this App"
              description="Many desktop publishing packages and web page"
              iconName="ios-download-outline"
              iconType="ionicon"
            />
            <View style={styles.spaceHeight} />
            <SingleListSetting
              onPress={rateApp}
              title="Enjoy the App"
              description="Many desktop publishing packages and web page"
              iconName="star"
              iconType="feather"
            />
          </View>
          {user?.subscription ? <View style={styles.spaceHeight} /> : null}
          {user?.subscription ? (
            <View style={styles.settingBoxIcon}>
              <SingleListSetting
                onPress={resetData}
                title="Reset all Progress"
                description="Many desktop publishing packages and web page"
                iconName="arrow-left-right"
                iconType="material-community"
              />
              <View style={styles.spaceHeight} />
              <SingleListSetting
                onPress={toMail}
                title="Send Feedback"
                description="Many desktop publishing packages and web page"
                iconName="md-mail-unread-outline"
                iconType="ionicon"
              />
            </View>
          ) : null}
          <View style={styles.spaceHeight} />
          <View style={styles.settingBoxIcon}>
            <SingleListSetting
              onPress={toTerms}
              title="Terms of Use"
              description="Many desktop publishing packages and web page"
              iconName="page"
              iconType="foundation"
            />
            <View style={styles.spaceHeight} />
            <SingleListSetting
              onPress={toPrivacy}
              title="Privacy Policy"
              description="Many desktop publishing packages and web page"
              iconName="shield-alert-outline"
              iconType="material-community"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
