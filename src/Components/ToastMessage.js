import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Toast({visible, message}) {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
}
