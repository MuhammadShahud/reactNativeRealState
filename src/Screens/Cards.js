import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
} from 'react-native';
import CardStack from 'react-native-card-stack-swiper';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BLUEFONTCOLOR,
  PURPLECOLOR,
  PRIMARYCOLOR,
} from '../../assets/colors/colors';
import Header from '../Components/BackHeader';
import PrimaryButton from '../Components/PrimaryButton';
import SwipeCard from '../Components/SwipeCard';
import {styles} from '../Styles/GeneralStyle';
import {ACTIVECARDS, CARDS, FavCards} from '../Redux/Reducers/AuthReducer';
import {ActiveCards, FlipFunction} from '../Redux/Actions/AuthAction';
import {useDispatch, useSelector} from 'react-redux';
import Tts from 'react-native-tts';
import GestureRecognizer from 'react-native-swipe-gestures';

const Cards = props => {
  const favCards = useSelector(FavCards);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const swiper = useRef(null);
  const [statement, setStatement] = useState('');
  const cards = useSelector(CARDS);
  let calltoSpeak;
  const data = props.route.params.fav
    ? useSelector(FavCards)
    : useSelector(ACTIVECARDS);
  // const [data, setData] = useState(cards.freeCard.results);
  const [cardCurrent, setCardCurrent] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [flip, setFlip] = useState(false);

  const handleBackword = () => {
    swiper.current.goBackFromLeft();
    if (cardCurrent > 0) {
      setCardCurrent(cardCurrent - 1);
    }
  };

  const handleForward = () => {
    swiper.current.swipeLeft();
  };

  const OptionHandler = () => {
    setModalVisibility(!modalVisibility);
  };

  const shuffleArrayOfObjects = () => {
    const newObj = [...data].sort(() => Math.random() - 0.5);
    dispatch(ActiveCards(newObj));
    setModalVisibility(false);
  };

  const ListenToAudio = () => {
    Tts.speak(data[statement == 0 ? 0 : statement - 1].front);
    setModalVisibility(false);
  };

  const restartCards = () => {
    setCardCurrent(0);
    setModalVisibility(false);
  };

  const flipDef = () => {
    dispatch(FlipFunction(true));
    setModalVisibility(false);
  };

  const flipTerm = () => {
    dispatch(FlipFunction(false));
    setModalVisibility(false);
  };

  useFocusEffect(
    useCallback(() => {
     dispatch(FlipFunction(false));
    }, []),
  );

  const OptionModal = () => {
    return (
      <GestureRecognizer
        // style={{flex: 1}}
        onSwipeDown={() => OptionHandler()}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibility}
          containerStyle={stylesSeperate.Modalcontainer}
          onRequestClose={() => {
            setModalVisibility(!modalVisibility);
          }}>
          <TouchableWithoutFeedback onPress={() => OptionHandler()}>
            <>
              <View style={stylesSeperate.centeredView}>
                <View style={styles.spaceHeight} />
                <View style={stylesSeperate.square} />
                <View style={styles.spaceHeight} />
                <Text
                  style={[
                    styles.medium,
                    {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold'},
                  ]}>
                  Options
                </Text>
                <View style={styles.spaceHeight} />
                <View
                  style={{
                    flexDirection: 'row',
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    onPress={shuffleArrayOfObjects}
                    style={stylesSeperate.iconContainer}>
                    <Icon
                      name="shuffle"
                      type="entypo"
                      color="#246EE9"
                      size={wp(12)}
                    />
                    <Text style={stylesSeperate.textStyle}>Shuffle</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={ListenToAudio}
                    style={stylesSeperate.iconContainer}>
                    <Icon
                      name="sound"
                      type="antdesign"
                      color="#246EE9"
                      size={wp(12)}
                    />
                    <Text style={stylesSeperate.textStyle}>Audio</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.spaceHeight} />

                <View
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginhorizontal: '50%',
                  }}>
                  <Text
                    style={[
                      styles.medium,
                      {color: 'black', fontFamily: 'Roboto-Bold'},
                    ]}>
                    Card Orientation
                  </Text>
                  <Text
                    style={[
                      styles.medium,
                      {color: PRIMARYCOLOR, fontFamily: 'Roboto-Bold'},
                    ]}>
                    Front
                  </Text>
                  <View
                    style={[
                      stylesSeperate.continueButtonContainer,
                      {
                        flexDirection: 'row',
                        width: '40%',
                        justifyContent: 'space-between',
                        margin: 20,
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => flipTerm()}
                      style={[styles.btnBg, {margin: 5}]}>
                      <Text style={styles.medium}>Terms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => flipDef()}
                      style={[styles.btnBg, {margin: 5}]}>
                      <Text style={styles.medium}>Definition</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => restartCards()}>
                    <Text
                      style={[
                        styles.medium,
                        {
                          color: PRIMARYCOLOR,
                          fontFamily: 'Roboto-Bold',
                          alignSelf: 'center',
                        },
                      ]}>
                      Restart Flash Cards
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          </TouchableWithoutFeedback>
        </Modal>
      </GestureRecognizer>
    );
  };

  return (
    <View
      style={modalVisibility ? stylesSeperate.container2 : styles.container}>
      <Header
        iconName1="cross"
        iconType1="entypo"
        iconName2="question-circle-o"
        iconType2="font-awesome"
      />
      <View style={styles.spaceHeight} />

      <View style={{alignItems: 'center'}}>
        {cardCurrent == data.length ? (
          <Text style={styles.medium}>Well done...</Text>
        ) : (
          <Text style={styles.medium}>
            {cardCurrent + 1} / {data.length}
          </Text>
        )}

        <View style={{height: hp('1%')}} />
      </View>
      <View style={styles.cardsProgressBar}>
        <View
          style={[
            styles.cardsProgressBar,
            {
              width: `${(100 * cardCurrent) / data.length}%`,
              backgroundColor: PURPLECOLOR,
            },
          ]}></View>
        <View
          style={[
            styles.cardsProgressBar,
            {
              width: `${100 - (100 * cardCurrent) / data.length}%`,
              backgroundColor: '#FFFF',
            },
          ]}></View>
      </View>
      <CardStack
        style={styles.content}
        renderNoMoreCards={() => (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.large}>
              {props.route.params.fav
                ? 'No Flaged Cards...!'
                : 'Test Completed...!'}
            </Text>
            <View style={{width: wp('75%')}}>
              <View style={styles.spaceHeight} />
              <PrimaryButton
                onPress={() => navigation.navigate('Home')}
                title="Go Back to Home"
              />
            </View>
          </View>
        )}
        ref={swiper}
        onSwiped={() => setCardCurrent(cardCurrent + 1)}
        onSwipedLeft={() => console.log('onSwipedLeft')}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <SwipeCard
                key={index}
                calltoSpeak={calltoSpeak}
                data={item}
                item={index}
                category="Cards"
                setStatement={setStatement}
                fav={props.route.params.fav}
              />
            );
          })
        ) : (
          <View></View>
        )}
      </CardStack>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleBackword()}
            style={styles.buttonCards}>
            <Icon name="back" type="antdesign" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              OptionHandler();
            }}
            style={[
              styles.buttonCards,
              {
                width: wp('35%'),
                borderRadius: wp('2%'),
              },
            ]}>
            <Text
              style={[
                styles.medium,
                {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Bold'},
              ]}>
              Options
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCards} onPress={handleForward}>
            <Icon name="controller-play" type="entypo" />
          </TouchableOpacity>
        </View>
      </View>

      {/* {modalVisibility ? <OptionModal /> : null} */}

      <OptionModal />

      <View style={styles.spaceHeight} />
      <View style={styles.spaceHeight} />
    </View>
  );
};

export default Cards;

export const stylesSeperate = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: 'rgba(36, 110, 233, 1)',

    // opacity: 0.5,
  },
  Modalcontainer: {
    bottom: 0,
  },
  centeredView: {
    backgroundColor: 'white',
    top: '35%',
    height: '70%',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonsContainer: {
    // flexDirection: 'row',
    height: 144,
    width: 103,
    justifyContent: 'space-evenly',
    borderRadius: 10,
    alignItems: 'center',
    // alignSelf: 'center',
    margin: 50,
    borderradius: 20,
  },
  iconContainer: {
    backgroundColor: 'rgba(252, 239, 234, 1)',
    width: 100,
    height: 144,
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
    justifyContent: 'space-evenly',
  },
  textStyle: {
    fontSize: wp('4%'),
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    textAlign: 'center',
    color: BLUEFONTCOLOR,
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
  },
  continueButtonContainer: {
    width: wp('80%'),
    alignSelf: 'center',
    position: 'relative',
  },
  square: {
    width: 100,
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 20,
  },
});
