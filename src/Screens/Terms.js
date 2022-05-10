import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {PRIMARYCOLOR} from '../../assets/colors/colors';
import BackHeader from '../Components/BackHeader';

function Terms() {
  return (
    <View style={styles.container}>
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />
      <Text style={[styles.large, {textAlign: 'center'}]}>
        Terms & Conditions
      </Text>
      <ScrollView style={styles.tcContainer}>
        <Text style={styles.tcP}>
          By downloading or using the app, these terms will automatically apply
          to you – you should make sure therefore that you read them carefully
          before using the app. You’re not allowed to copy or modify the app,
          any part of the app, or our trademarks in any way. You’re not allowed
          to attempt to extract the source code of the app, and you also
          shouldn’t try to translate the app into other languages or make
          derivative versions. The app itself, and all the trademarks,
          copyright, database rights, and other intellectual property rights
          related to it, still belong to Advantage eLearning. Advantage
          eLearning is committed to ensuring that the app is as useful and
          efficient as possible. For that reason, we reserve the right to make
          changes to the app or to charge for its services, at any time and for
          any reason. We will never charge you for the app or its services
          without making it very clear to you exactly what you’re paying for.
          The Real Estate Advantage app stores and processes personal data that
          you have provided to us, to provide our Service. It’s your
          responsibility to keep your phone and access to the app secure. We
          therefore recommend that you do not jailbreak or root your phone,
          which is the process of removing software restrictions and limitations
          imposed by the official operating system of your device. It could make
          your phone vulnerable to malware/viruses/malicious programs,
          compromise your phone’s security features and it could mean that the
          Real Estate Advantage app won’t work properly or at all.
        </Text>
        <Text style={styles.tcP}>
          The app does use third-party services that declare their Terms and
          Conditions. Link to Terms and Conditions of third-party service
          providers used by the app
        </Text>
        <Text style={styles.tcL}
        onPress={()=>{
          Linking.openURL('https://policies.google.com/terms')
        }}
        >{'\u2022'} Google Play Services</Text>
        <Text style={styles.tcP}>
          You should be aware that there are certain things that Advantage
          eLearning will not take responsibility for. Certain functions of the
          app will require the app to have an active internet connection. The
          connection can be Wi-Fi or provided by your mobile network provider,
          but Advantage eLearning cannot take responsibility for the app not
          working at full functionality if you don’t have access to Wi-Fi, and
          you don’t have any of your data allowance left.
        </Text>
        <Text style={styles.tcP}>
          If you’re using the app outside of an area with Wi-Fi, you should
          remember that the terms of the agreement with your mobile network
          provider will still apply. As a result, you may be charged by your
          mobile provider for the cost of data for the duration of the
          connection while accessing the app, or other third-party charges. In
          using the app, you’re accepting responsibility for any such charges,
          including roaming data charges if you use the app outside of your home
          territory (i.e. region or country) without turning off data roaming.
          If you are not the bill payer for the device on which you’re using the
          app, please be aware that we assume that you have received permission
          from the bill payer for using the app.
        </Text>
        <Text style={styles.tcP}>
          Along the same lines, Advantage eLearning cannot always take
          responsibility for the way you use the app i.e. You need to make sure
          that your device stays charged – if it runs out of battery and you
          can’t turn it on to avail the Service, Advantage eLearning cannot
          accept responsibility.
        </Text>
        <Text style={styles.tcP}>
          With respect to Advantage eLearning’s responsibility for your use of
          the app, when you’re using the app, it’s important to bear in mind
          that although we endeavor to ensure that it is updated and correct at
          all times, we do rely on third parties to provide information to us so
          that we can make it available to you. Advantage eLearning accepts no
          liability for any loss, direct or indirect, you experience as a result
          of relying wholly on this functionality of the app.
        </Text>
        <Text style={styles.tcP}>
          At some point, we may wish to update the app. The app is currently
          available on Android & iOS – the requirements for the both systems(and
          for any additional systems we decide to extend the availability of the
          app to) may change, and you’ll need to download the updates if you
          want to keep using the app. Advantage eLearning does not promise that
          it will always update the app so that it is relevant to you and/or
          works with the Android & iOS version that you have installed on your
          device. However, you promise to always accept updates to the
          application when offered to you, We may also wish to stop providing
          the app, and may terminate use of it at any time without giving notice
          of termination to you. Unless we tell you otherwise, upon any
          termination, (a) the rights and licenses granted to you in these terms
          will end; (b) you must stop using the app, and (if needed) delete it
          from your device.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
        Changes to This Terms and Conditions
      </Text>
        <Text style={styles.tcP}>
          We may update our Terms and Conditions from time to time. Thus, you
          are advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Terms and Conditions on
          this page. These terms and conditions are effective as of 2022-03-06
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
        Contact Us
      </Text>
        <Text style={[styles.tcP,{marginBottom:20}]}>
          If you have any questions or suggestions about our Terms and
          Conditions, do not hesitate to contact us at
          support@realestateadvantage.net.
        </Text>
      </ScrollView>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = {
  container: {
    height: '100%',
    backgroundColor: PRIMARYCOLOR,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    textAlign: 'justify',
    lineHeight:25
   
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    color:'blue',
  },
  tcContainer: {
    marginTop: 15,
    height: '100%',
    width:'100%',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center',
  },
  large: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
  },
  large2: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
   
  },
};

export default Terms;
