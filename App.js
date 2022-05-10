import React, { useEffect } from 'react';
import { View } from 'react-native';
import Router from './src/Navigations/Router';
import { Provider } from 'react-redux';
import Store from './src/Redux/store'
import FlashMessage from "react-native-flash-message";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { showMessage } from "react-native-flash-message";
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';

const App = () => {

  const requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission({
      sound: true,
      announcement: true,
      providesAppNotificationSettings: true,
      alert:true,
      carPlay:true,
      provisional:true,
      sound:true,

    });

    if (authorizationStatus) {
      console.log('Permission status:', authorizationStatus);
    }
  }

  const checkApplicationPermission = async() => {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
    } else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL) {
      console.log('User has provisional notification permissions.');
    } else {
      console.log('User has notification permissions disabled');
    }
  }

  const registerAppWithFCM = async () => {
    await messaging().registerDeviceForRemoteMessages();
  }

  // const trackingTransparency = async () => {
  //   try {
  //     const status = await requestTrackingPermission();
  //     console.log(status);
  //   } catch (e) {
  //     console.log('Error', e?.toString?.() ?? e);
  //   }
  // }

  useEffect(() => {
    requestUserPermission()
    registerAppWithFCM()
    checkApplicationPermission()
    // trackingTransparency()
    console.log("CHAL TO RAHA HAI>>>>>...........", messaging().onMessage)
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("remoteMessage",remoteMessage);
      Alert.alert(`New Notification ${remoteMessage.notification.title}`, remoteMessage.notification.body);
    });

    

    return unsubscribe;
  }, []);
  

  return (
    <View>
      <Provider store={Store}>
        <View style={{ width: '100%', height: '100%', zIndex: -1 }}><Router /></View>
        <FlashMessage canRegisterAsDefault={true} floating={false} position="top" style={{ zIndex: 1000 }} />
      </Provider>
    </View>
  )
};

export default App;
