import React, { useEffect } from 'react';
import { View } from 'react-native';
import Router from './src/Navigations/Router';
import { Provider } from 'react-redux';
import Store from './src/Redux/store'
import FlashMessage from "react-native-flash-message";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { showMessage } from "react-native-flash-message";

const App = () => {

  useEffect(() => {

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("remoteMessage",remoteMessage);
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const customRenderFlashMessageIcon = (icon = "success", style = {}, customProps = {}) => {
    switch (icon) {
      case "success":
        return <Image style={{ width: 45, height: 30, resizeMode: 'contain' }} source={require('./assets/images/introImage.png')} />;
    }

    // it's good to inherit the original method...
    return renderFlashMessageIcon(icon, style, customProps);
  };

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
