import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR} from '../../assets/colors/colors';
import {styles} from '../Styles/GeneralStyle';
import {Card} from 'react-native-card-stack-swiper';
import Tts from 'react-native-tts';
import {USER, ACTIVECARDS,FavCards, FLIPCARD} from '../Redux/Reducers/AuthReducer';
import {GetFavCards, UpdateCards} from '../Redux/Actions/AuthAction';
import {useSelector, useDispatch} from 'react-redux';
import FlipCard from 'react-native-flip-card';
import Toast from './ToastMessage';
import { useNavigation } from '@react-navigation/native';

const SwipeCard = props => {
 
  const favCards = useSelector(FavCards);
  const flipCard = useSelector(FLIPCARD);
  const user = useSelector(USER);
  const activeData = useSelector(ACTIVECARDS);
  const [flip, setFlip] = useState(false)
const navigation = useNavigation();
  const dispatch = useDispatch();
  const {id, back, front, favorites, visitors} = props.fav? props.data : activeData[props.item];
  const isFavourite = favorites.includes(user?.id);
  const [visibleToast, setvisibleToast] = React.useState({
    visibleToast: false,
    message: 'starting',
  });

  // props.setCount(activeData[props.item == 0 ? props.item : props.item - 1])

  const changeFavourite = () => {
    const userId = user?.id;
    if (isFavourite) {
      const ids = favorites.filter(value => value !== userId);
      const newObj = {
        favorites: [...ids],
      };
      dispatch(UpdateCards(newObj, id, props.item));
      props.fav &&
      props.category === 'Cards'?
      dispatch(
        GetFavCards({
          type: 'card',
          // id: props.setID,
          // subject: 'card',
          navigation: navigation,
          destination: 'Cards'
        }),
      ):props.fav && props.category === 'Vocabulary'? 
      dispatch(
        GetFavCards({
          type: 'vocabulary',
          // id: props.setID,
          // subject: 'card',
          navigation: navigation,
          destination: 'VocabularyCards'
        }),
      
      ):null;
      setvisibleToast({visible: true, message: 'flag removed'});
    } else {
      const newObj = {
        favorites: [...favorites, userId],
      };
      dispatch(UpdateCards(newObj, id, props.item));
      setvisibleToast({visible: true, message: 'Flag added'});
    }
  };
  Tts.setDefaultLanguage('en-IE');

  const ListenToAudio = () => {
    Tts.speak(front);
  };

  const ListenToAudioBack = () => {
    Tts.speak(back);
  };
 

  // useEffect(() => {
  //   setFlip(!flip)
    
  // },[flipCard])

  useEffect(() => {
    // console.log(`props.item: `,props.item);
   props.category === "Cards"? props.setStatement(props.item): null
    
  },[props.data])
  useEffect(() => {
    const isVisitor = visitors.includes(user?.id);
    // UpdateCards(newObj, id, props.item)
    if (!isVisitor) {
      const newObj = {
        visitors: [...visitors, user?.id],
      };
      // console.log('Marking as visited');
      dispatch(UpdateCards(newObj, id, props.item));
    }
  }, [props.item]);

  if (props.item == 0) {
    return (
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={flipCard}
        clickable={true}
        onFlipEnd={isFlipEnd => {
        }}>
        <Card
          style={
            props.item % 2 == 0
              ? [styles.card, styles.card1]
              : [
                  styles.card,
                  styles.card2,
                  {
                    transform: [{rotate: `2.5deg`}],
                  },
                ]
          }>
          <Toast
            visible={visibleToast.visible}
            message={visibleToast.message}
          />
          <View style={styles.cardOuterView}>
            <View style={styles.innerCardsSwipeContainer}>
              <Text
                style={[
                  styles.large,
                  {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Regular'},
                ]}>
                {front}
              </Text>
            </View>
            <View style={styles.cardFooterIcons}>
              <TouchableOpacity
              onPress={()=>ListenToAudio()}>
                <Icon
                  name="sound"
                  type="antdesign"
                  color="black"
                  size={wp(7)}
                />
              </TouchableOpacity>
              {user?.subscription?
              <TouchableOpacity onPress={changeFavourite}>
                <Icon
                  name="flag"
                  type="feather"
                  color={isFavourite ? '#41C0FF' : 'black'}
                  size={wp(7)}
                />
              </TouchableOpacity> : null
  }
            </View>
          </View>
        </Card>

        <Card
          style={
            props.item % 2 == 0
              ? [styles.card, styles.card1]
              : [
                  styles.card,
                  styles.card2,
                  {
                    transform: [{rotate: `2.5deg`}],
                  },
                ]
          }>
          <View style={styles.cardOuterView}>
            <View style={styles.innerCardsSwipeContainer}>
              <Text
                style={[
                  styles.large,
                  {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Regular'},
                ]}>
                {back}
              </Text>
            </View>
             <View style={styles.cardFooterIcons}>
              <TouchableOpacity
              onPress={()=>ListenToAudioBack()}>
                <Icon
                  name="sound"
                  type="antdesign"
                  color="black"
                  size={wp(7)}
                />
              </TouchableOpacity>
          </View>
          </View>
        </Card>
      </FlipCard>
    );
  } else {
    return (
      <FlipCard
      style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={flipCard}
      clickable={true}
      onFlipEnd={isFlipEnd => {
      }}>
      <Card
        style={
          props.item % 2 == 0
            ? [styles.card, styles.card1]
            : [
                styles.card,
                styles.card2,
                {
                  transform: [{rotate: `2.5deg`}],
                },
              ]
        }>
        <View style={styles.cardOuterView}>
          <View style={styles.innerCardsSwipeContainer}>
            <Text
              style={[
                styles.large,
                {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Regular'},
              ]}>
              {front}
            </Text>
          </View>
          <View style={styles.cardFooterIcons}>
            <TouchableOpacity
            onPress={()=>ListenToAudio()}>
              <Icon name="sound" type="antdesign" color="black" size={wp(7)} />
            </TouchableOpacity>
            {user?.subscription?
              <TouchableOpacity onPress={changeFavourite}>
                <Icon
                  name="flag"
                  type="feather"
                  color={isFavourite ? '#41C0FF' : 'black'}
                  size={wp(7)}
                />
              </TouchableOpacity> : null
  }        
          <Toast
            visible={visibleToast.visible}
            message={visibleToast.message}
          />
          </View>
        </View>
      </Card>

      <Card
          style={
            props.item % 2 == 0
              ? [styles.card, styles.card1]
              : [
                  styles.card,
                  styles.card2,
                  {
                    transform: [{rotate: `2.5deg`}],
                  },
                ]
          }>
          <View style={styles.cardOuterView}>
            <View style={styles.innerCardsSwipeContainer}>
              <Text
                style={[
                  styles.large,
                  {color: BLUEFONTCOLOR, fontFamily: 'Roboto-Regular'},
                ]}>
                {back}
              </Text>
            </View>
            <View style={styles.cardFooterIcons}>
              <TouchableOpacity
              onPress={()=>ListenToAudioBack()}>
                <Icon
                  name="sound"
                  type="antdesign"
                  color="black"
                  size={wp(7)}
                />
              </TouchableOpacity>
          </View>
          </View>
        </Card>
      </FlipCard>
    );
  }
};

export default SwipeCard;
