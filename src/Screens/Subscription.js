import React, { useState, useEffect, useCallback } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackHeader from '../Components/BackHeader';
import { styles } from '../Styles/GeneralStyle';
import { CLOUDPERSON } from '../../assets/images/images';
import { Lock } from '../../assets/images/images';
import { BLUEFONTCOLOR } from '../../assets/colors/colors';
import { Icon } from 'react-native-elements';
import SubcriptionDetail from '../Components/SubcriptionDetail';
import SubscriptionCard from '../Components/SubscriptionCard';
import PrimaryButton from '../Components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import * as RNIap from 'react-native-iap';
import { purchaseErrorListener, purchaseUpdatedListener } from 'react-native-iap';
import Clipboard from "@react-native-clipboard/clipboard";
import { useDispatch } from 'react-redux';
import { SignupFunction } from '../Redux/Actions/AuthAction';

const Subscription = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  const [product, setProduct] = useState([]);
  const [activeSubscription, setActiveSubscription] = useState("");
  const dispatch = useDispatch();
  let purchaseUpdateSubscription = null;
  let purchaseErrorSubscription = null;
  console.log(activeSubscription)
  const productIds = Platform.select({
    ios: [
      'com.realestateedu.ios.monthly',
      'com.realestateedu.ios.lifetim',
    ],
    android: [
      'com.motorcycle.dmv.monthly',
      'com.motorcycle.dmv.lifetime',
    ],
  });

  const retrievingItems = async () => {
    try {
      const products = await RNIap.getProducts(productIds);
      console.log({ products });
    } catch (err) {
      console.warn(err); // standardized err.code and err.message available
    }
  };

  const RequestPurchase = async (sku) => {
    if (activeSubscription !== "") {
      try {
        await RNIap.requestSubscription(sku, true);
      } catch (err) {
        console.warn(err.code, err.message);
      }
    } else {
      showMessage({
        message: "Please selete one of the subscription before being continue.",
        type: "success"
      })
    }


  }


  // const OpenURLButton = ({ url, title }) => {
  //   const handlePress = useCallback(async () => {
  //     // Checking if the link is supported for links with custom URL scheme.
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //       // by some browser in the mobile
  //       await Linking.openURL(url);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);

  //   return <TouchableOpacity onPress={handlePress}>
  //     <Text style={styles.small}>{title}</Text>
  //   </TouchableOpacity>
  // };

  useEffect(() => {
    RNIap.initConnection().then(async () => {
      // we make sure that "ghost" pending payment are removed
      // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)

      const purchaseProducts = await RNIap.getProducts(productIds);
      const purchaseSubs = await RNIap.getSubscriptions(productIds);
      console.log("prooooductss",purchaseProducts,purchaseSubs);
      
      purchaseProducts.forEach((v, i) => {
        switch (v.productId) {
          case 'com.motorcycle.dmv.monthly':
            purchaseProducts.title = "Monthly -30%"
            break
        
          case 'com.motorcycle.dmv.lifetime':
            purchaseProducts.title = "Lifetime -60%"
            break
        }
      })
      purchaseSubs.forEach((v, i) => {
        switch (v.productId) {
          case 'com.motorcycle.dmv.monthly':
            purchaseSubs.title = "Monthly -30%"
            break
        
          case 'com.motorcycle.dmv.lifetime':
            purchaseSubs.title = "Lifetime -60%"
            break
        }
      })
   setProduct([purchaseProducts[0],purchaseSubs[0]])

      purchaseUpdateSubscription = purchaseUpdatedListener(async (purchase) => {
        // console.log('purchaseUpdatedListener', purchase);
        const receipt = purchase.transactionReceipt;
        const {orderId} =JSON.parse( purchase.transactionReceipt)
        // let url = `mailto:tehseenjawed1@gmail.com?subject=receipt&body=${receipt}`;
        // Linking.openURL(url);
        if (receipt) {
          let executed = false;
          if(!executed){
executed=true;
          dispatch(SignupFunction(
            { orderId: orderId }, navigation
          ))
          }
        }
      });

      purchaseErrorSubscription = purchaseErrorListener(error => {
        console.warn('purchaseErrorListener', error);
      });


      // RNIap.flushFailedPurchasesCachedAsPendingAndroid()
      //   .catch(err => {
      //     console.log("ERRRRORRR ---->>> ",err)
      //     // exception can happen here if:
      //     // - there are pending purchases that are still pending (we can't consume a pending purchase)
      //     // in any case, you might not want to do anything special with the error
      //   })
      //   .then(() => {

      //   });
    });


    // retrievingItems()
    return () => {
      RNIap.endConnection();
      //   if (purchaseUpdateSubscription) {
      //     purchaseUpdateSubscription.remove();
      //     purchaseUpdateSubscription = null;
      //   }
      //   if (purchaseErrorSubscription) {
      //     purchaseErrorSubscription.remove();
      //     purchaseErrorSubscription = null;
      //   }
    };
  }, []);
console.log("product",product);
  return (
    <ScrollView style={styles.container}>
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />
      <View style={{ height: hp('6%') }} />
      <Image
        source={CLOUDPERSON}
        resizeMode="contain"
        style={styles.cloudPersonImage}
      />
      <View style={styles.subscriptionView}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={{}} />
          <View style={{ width: wp('75%'), marginTop: 15 }}>
            <Text
              style={[
                styles.medium,
                {
                  color: BLUEFONTCOLOR,
                  fontFamily: 'Roboto-Bold',
                  textAlign: 'left',
                },
              ]}>
              Know the Questions Beforehand
            </Text>
            <View style={{ height: hp('.5%') }} />
            {/* <Text
              style={[styles.small, { color: BLUEFONTCOLOR, textAlign: 'left' }]}>
              Pass Your Exam the first time
            </Text> */}
            <View style={styles.spaceHeight} />

            <SubcriptionDetail title="Don't spend hours learning" />
            <SubcriptionDetail title="Train yourself with 1000+ questions" />
            <SubcriptionDetail title="98% Pass rate on the first attempt" />


            <View style={styles.rowSubscription}>
              {product?.map((v, i) => {
                const cardInnerTitle = v.title.split(' ');

                return (
                  <View>
                    <View style={{ height: hp('1%') }} />

                    <SubscriptionCard
                      setActiveSubscription={setActiveSubscription}
                      activeSubscription={activeSubscription}
                      id={v.productId}
                      duration={cardInnerTitle[0]}
                      amount={v.localizedPrice}
                      title={cardInnerTitle[1]}


                    />
                  </View>
                );
              })}

            </View>
            {/* <View style={{height: hp('1%')}} />

            <SubscriptionCard
              duration="Weekly"
              amount="9.99"
              title="Basic"
              selected={toggle == 0 ? true : false}
              onPress={() => {
                setToggle(0);
              }}
            />
            <View style={{height: hp('1%')}} />

            <SubscriptionCard
              duration="Monthly"
              amount="16.99"
              title="-30%"
              selected={toggle == 1 ? true : false}
              onPress={() => {
                setToggle(1);
              }}
               dispatch(SignupFunction(
                  {orderId: orderId},navigation
                ))
            />
            <View style={{height: hp('1%')}} />
            <SubscriptionCard
              duration="Yearly"
              amount="29.99"
              title="-60%"
              selected={toggle == 2 ? true : false}
              onPress={() => {
                setToggle(2);
              }}
            /> */}
            <View style={{ height: hp('2%') }} />
          </View>
          <View style={{ width: wp('70%'), alignSelf: 'center' }}>

            <Text
              style={[
                styles.small,
                {
                  color: 'black',
                  textAlign: 'justify',
                  width: wp('70%'),
                  fontSize: wp('2.8%'),
                },
              ]}>
              Your payment will be charged to your iTunes Account once you confirm your purchase.
             
            </Text>
            <Text
              style={[
                styles.small,
                {
                  color: 'black',
                  textAlign: 'justify',
                  width: wp('70%'),
                  fontSize: wp('2.8%'),
                },
              ]}>
              Your iTunes account will be charged again when your subscription automatically renews
              at the end of your current subscription period unless auto-renew is turned off at least
              24 hours prior to end of the current period. 
            </Text>
            <Text
              style={[
                styles.small,
                {
                  color: 'black',
                  textAlign: 'justify',
                  width: wp('70%'),
                  fontSize: wp('2.8%'),
                },
              ]}>
              You can manage or turn off auto-renew in
              your Apple ID Account Settings any time after purchase.
            </Text>
            <View style={{ height: hp('2%') }} />
           
            <View style={{ height: hp('2%') }} />
            <PrimaryButton
              title="Continue"
              onPress={() => RequestPurchase(activeSubscription)}
            />
          </View>


          {/* <Text style={{ color: '#757DFE' }}>Subscription Details</Text>
          <Text
            style={[
              styles.small,
              {
                color: 'black',
                textAlign: 'left',
                width: wp('80%'),
                fontSize: wp('3%'),
              },
            ]}>
            Your payment will be charged to your iTunes Account once you confirm your purchase.
          </Text>
          <Text
            style={[
              styles.small,
              {
                color: 'black',
                textAlign: 'left',
                width: wp('80%'),
                fontSize: wp('3%'),
              },
            ]}>
            Your iTunes account will be charged again when your subscription automatically renews at the end of your current subscription period unless auto-renew
            is turned off at least 24 hours prior to end of the current period.
          </Text>
          <Text
            style={[
              styles.small,
              {
                color: 'black',
                textAlign: 'left',
                width: wp('80%'),
                fontSize: wp('3%'),
              },
            ]}>
            You can manage or turn off auto-renew in your Apple ID Account Settings any time after purchase
          </Text> */}
        </ScrollView>
      </View>
      <View style={styles.subscriptionFooter}>
        {/* <OpenURLButton url="https://docs.google.com/document/d/1yeB7xdC6dnsLIlilFe0vGdb6xv_ehPH4Pjw1P_LIzZU/edit" title="Privacy Policy" /> */}
        <TouchableOpacity onPress={() => navigation.navigate('privacyPolicy')}>
          <Text style={styles.small}>Privacy Policy</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('termsCondition')}>
          <Text style={styles.small}>Terms of Use</Text>
        </TouchableOpacity>
        {/* <OpenURLButton url="https://docs.google.com/document/d/1JLPciKt_83GHqa4TN66nS96D55NULeGxBpb2Be7VMpo/edit" title="Terms of Use" /> */}
      </View>
    </ScrollView>
  );
};

export default Subscription;
