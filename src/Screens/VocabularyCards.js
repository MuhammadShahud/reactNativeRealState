import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CardStack from 'react-native-card-stack-swiper';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR, PURPLECOLOR} from '../../assets/colors/colors';
import Header from '../Components/BackHeader';
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';
import SwipeCard from '../Components/SwipeCard';
import {styles} from '../Styles/GeneralStyle';
import {ACTIVECARDS, CARDS, FavCards} from '../Redux/Reducers/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/core';

const VocabularyCards = props => {
  const favCards = useSelector(FavCards);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const swiper = useRef(null);
  const data = props.route.params.fav? useSelector(FavCards): useSelector(ACTIVECARDS);

  const handleBackword = () => {
    swiper.current.swipeLeft();
  };

  const handleForward = () => {
    swiper.current.swipeRight();
  };
  const [cardCurrent, setCardCurrent] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      const newObj = {};
    }, [cardCurrent]),
  );
  return (
    <View style={styles.container}>
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
            {cardCurrent+1}  / {data.length}
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
           <Text style={styles.large}>{props.route.params.fav? "No Flaged Vocabulary...!" : "Test Completed...!"}</Text>
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
        {data.map((item, index) => {
          return <SwipeCard key={index} data={item} item={index} category="Vocabulary" fav={props.route.params.fav}/>;
        })}
      </CardStack>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <View style={{width: wp('34%')}}>
            <SecondaryButton
              title="Don't Know"
              background="#DB5669"
              onPress={() => handleBackword()}
            />
          </View>
          <View style={{width: wp('34%')}}>
            <SecondaryButton
              title="Know"
              background="#9DCC6B"
              onPress={() => handleForward()}
            />
          </View>
        </View>
      </View>

      <View style={styles.spaceHeight} />
      <View style={styles.spaceHeight} />
    </View>
  );
};

export default VocabularyCards;
