import React, {useCallback} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR, PRIMARYCOLOR} from '../../assets/colors/colors';
import BackHeader from '../Components/BackHeader';
import FalshCard from '../Components/FlashCard';
import QuestionsListView from '../Components/QuestionsListView';
import {styles} from '../Styles/GeneralStyle';
import {CARDS, CardSets, USER} from '../Redux/Reducers/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/core';
import { GetCardSets, GetFavCards, GetSetsFunction} from '../Redux/Actions/AuthAction';
import PrimaryButton from '../Components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const FlashCards = () => {
  var colors = ['#F4A550', '#757DFE', '#1ACBCF'];
  const sets = useSelector(CardSets);
  const user = useSelector(USER)
  sets.sort(function (a, b) {
    return a.premium && b.premium ? 0 : a.premium ? 1 : -1;
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
// console.log("cards",cards);


  useFocusEffect(
    useCallback(() => {
      dispatch(GetSetsFunction());
      dispatch(GetCardSets("cards"))
    }, []),
  );
  return (
    <View style={styles.container}>
      <BackHeader
        iconName1="arrow-back"
        iconType1="ionicon"
        iconName2="question-circle-o"
        iconType2="font-awesome"
      />
      <View style={{width: wp('95%'), alignSelf: 'flex-end'}}>
        <Text style={[styles.large, {textAlign: 'left'}]}>Flash Cards</Text>
      </View>
      <View style={styles.spaceHeight} />

      <View style={styles.spaceHeight} />
      <View style={styles.homeFooterViewStyle}>
        <View style={styles.spaceHeight} />


        <FlatList
          data={sets}
          renderItem={({item, index}) => {
            return (
              <FalshCard
                background={colors[(index+1)%colors.length]}
                item={item}
                cards={item.totalCards}
                premiumkey={item.premium}
                setID={item.id}
                set={
                 item.title
                }
                review={
                 '1 Due for review'
                }
              />
            );
          }}
        />
        <View style = {{paddingHorizontal: wp('5%')}}>
        { user?.subscription? <PrimaryButton
            title="Flaged Cards"
            backgroundColor= {PRIMARYCOLOR}
            onPress={() => {
              dispatch(
                GetFavCards({
                  type: 'card',
                  // id: props.setID,
                  // subject: 'card',
                  navigation: navigation,
                  destination: 'Cards'
                }),
              
              );
            }}
          />: null}
          </View>
        {/* <FlatList
          data={PremuimStack().id}
          renderItem={({item}) => {
            return (
              <FalshCard
                background={colors[item % colors.length]}
                item={item}
                cards={`${PremuimStack().amount[item-1]} cards`}
                set={'Set #2'}
                review={'1 Due for review'}
              />
            );
          }}
        /> */}

        {/* <View style={styles.spaceHeight} /> */}
        {/* <View style={{ width: wp('88%'), alignSelf: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.FlashCardsBtn}>
                    <Text style={styles.small}>Create New Flashcard Deck</Text>
                </TouchableOpacity>
                <View style={{ width: '3%' }} />
                <TouchableOpacity style={[styles.FlashCardsBtn, { width: '30%' }]}>
                    <Text style={styles.small}>Import</Text>
                </TouchableOpacity>
            </View> */}
      </View>
    </View>
  );
};

export default FlashCards;
