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

function Privacy() {
  return (
    <View style={styles.container}>
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />
      <Text style={[styles.large, {textAlign: 'center'}]}>Privacy Policy</Text>
      <ScrollView style={styles.tcContainer}>
        <Text style={styles.tcP}>
          Advantage eLearning built the Real Estate Advantage app as an Ad
          Supported app. This SERVICE is provided by Advantage eLearning at no
          cost and is intended for use as is. This page is used to inform
          visitors regarding our policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use our
          Service.
        </Text>
        <Text style={styles.tcP}>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </Text>
        <Text style={styles.tcP}>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which are accessible at Real Estate Advantage
          unless otherwise defined in this Privacy Policy.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
          Information Collection and Use
        </Text>
        <Text style={styles.tcP}>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to name, email. The information that we
          request will be retained by us and used as described in this privacy
          policy.
        </Text>
        <Text style={styles.tcP}>
          The app does use third-party services that may collect information
          used to identify you. Link to the privacy policy of third-party
          service providers used by the app
        </Text>
        <Text
          style={[styles.tcL,{color: 'blue'}]}
          onPress={() => {
            Linking.openURL('https://policies.google.com/terms');
          }}>
          {'\u2022'} Google Play Services
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>Log Data</Text>
        <Text style={styles.tcP}>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through
          third-party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>Cookies</Text>
        <Text style={styles.tcP}>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory.
        </Text>
        <Text style={styles.tcP}>
          This Service does not use these “cookies” explicitly. However, the app
          may use third-party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
          Service Providers
        </Text>
        <Text style={styles.tcP}>
          We may employ third-party companies and individuals due to the
          following reasons:
        </Text>
        <Text style={styles.tcL}>{'\u2022'} To facilitate our Service;</Text>
        <Text style={styles.tcL}>
          {'\u2022'} To provide the Service on our behalf;
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'}To perform Service-related services; or
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'}To assist us in analyzing how our Service is used.
        </Text>
        <Text style={styles.tcP}>
          We want to inform users of this Service that these third parties have
          access to their Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </Text>

        <Text style={[styles.large2, {textAlign: 'left'}]}>Security</Text>
        <Text style={styles.tcP}>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
          Links to Other Sites
        </Text>
        <Text style={styles.tcP}>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
          Children’s Privacy
        </Text>
        <Text style={styles.tcP}>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided us with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us so that we will be able to do the necessary actions.
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>
          Changes to This Privacy Policy
        </Text>
        <Text style={styles.tcP}>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </Text>
        <Text style={styles.tcP}>
          This policy is effective as of 2022-03-06
        </Text>
        <Text style={[styles.large2, {textAlign: 'left'}]}>Contact Us</Text>
        <Text style={[styles.tcP, {marginBottom: 20}]}>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at support@realestateadvantage.net.
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
    lineHeight: 25,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    
  },
  tcContainer: {
    marginTop: 15,
    height: '100%',
    width: '100%',
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

export default Privacy;
