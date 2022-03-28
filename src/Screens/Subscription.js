import React, {useState, useEffect} from 'react';
import {Image, Linking, ScrollView, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackHeader from '../Components/BackHeader';
import {styles} from '../Styles/GeneralStyle';
import {CLOUDPERSON} from '../../assets/images/images';
import {BLUEFONTCOLOR} from '../../assets/colors/colors';
import {Icon} from 'react-native-elements';
import SubcriptionDetail from '../Components/SubcriptionDetail';
import SubscriptionCard from '../Components/SubscriptionCard';
import PrimaryButton from '../Components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import * as RNIap from 'react-native-iap';
import {purchaseErrorListener, purchaseUpdatedListener} from 'react-native-iap';
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
    ios: [],
    android: [
      'com.realestateeducation.weekly',
      'com.realestateeducation.monthly',
      'com.realestateeducation.yearly',
    ],
  });

  const retrievingItems = async () => {
    try {
      const products = await RNIap.getSubscriptions(productIds);
      console.log({products});
    } catch (err) {
      console.warn(err); // standardized err.code and err.message available
    }
  };

  const RequestPurchase = async (sku) => {
      if(activeSubscription !== ""){
        try {
            await RNIap.requestSubscription(sku, true);
          } catch (err) {
            console.warn(err.code, err.message);
          }
      } else {
        showMessage({
            message:"Please selete one of the subscription before being continue.",
            type:"success"
        })
      }
      
    
  }

  useEffect(() => {
    RNIap.initConnection().then(async () => {
      // we make sure that "ghost" pending payment are removed
      // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)

      const purchaseProducts = await RNIap.getSubscriptions(productIds);
      console.log('product ===> ', purchaseProducts);
      setProduct(purchaseProducts.sort(function(a,b){
        return a.title === "Weekly Basic (Real Estate Education)"?-1:b.title === "Weekly Basic (Real Estate Education)"?1:0
      }));
      RNIap.flushFailedPurchasesCachedAsPendingAndroid()
        .catch(() => {
          // exception can happen here if:
          // - there are pending purchases that are still pending (we can't consume a pending purchase)
          // in any case, you might not want to do anything special with the error
        })
        .then(() => {
          purchaseUpdateSubscription = purchaseUpdatedListener(async purchase => {
            console.log('purchaseUpdatedListener', purchase);
            const receipt = purchase.transactionReceipt;
            const {orderId} =JSON.parse( purchase.transactionReceipt)
            // let url = `mailto:tehseenjawed1@gmail.com?subject=receipt&body=${receipt}`;
            // Linking.openURL(url);
            console.log("]]]---orderId>>  ", orderId);
            if (receipt) {
              
             dispatch(SignupFunction(
                  {orderId: orderId},navigation
                ))
            }
          });

          purchaseErrorSubscription = purchaseErrorListener(error => {
            console.warn('purchaseErrorListener', error);
          });
        });
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

  return (
    <ScrollView style={styles.container}>
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />
      <View style={{height: hp('6%')}} />
      <Image
        source={CLOUDPERSON}
        resizeMode="contain"
        style={styles.cloudPersonImage}
      />
      <View style={styles.subscriptionView}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={{height: hp('5%')}} />
          <View style={{width: wp('75%'), marginTop: 15}}>
            <Text
              style={[
                styles.medium,
                {
                  color: BLUEFONTCOLOR,
                  fontFamily: 'Roboto-Bold',
                  textAlign: 'left',
                },
              ]}>
              Update to Premium Subscription
            </Text>
            <View style={{height: hp('.5%')}} />
            <Text
              style={[styles.small, {color: BLUEFONTCOLOR, textAlign: 'left'}]}>
              Pass Your Exam the first time
            </Text>
            <View style={styles.spaceHeight} />

            <SubcriptionDetail title="Accessed to all questions" />
            <SubcriptionDetail title="Focused questions favourite" />
            <SubcriptionDetail title="Unlimited Mock Tests" />
            <SubcriptionDetail title="All Study Modes available" />
            <SubcriptionDetail title="Greatly Improve Your past ratings" />

            {product?.map((v, i) => {
              const cardInnerTitle = v.title.split(' ');

              return (
                <View>
                  <View style={{height: hp('1%')}} />

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
            <View style={{height: hp('3%')}} />
          </View>
          <View style={{width: wp('70%'), alignSelf: 'center'}}>
            <PrimaryButton
              title="Continue"
              onPress={() => RequestPurchase(activeSubscription)}
            />
          </View>
          <View style={styles.spaceHeight} />

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
            Subscription will be charge to your ITunes There are many variations
            of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form{' '}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.subscriptionFooter}>
        <Text style={styles.small}>Privacy Policy</Text>

        <Text style={styles.small}>Restore</Text>

        <Text style={styles.small}>Terms of Use</Text>
      </View>
    </ScrollView>
  );
};

export default Subscription;
