import React, { useCallback } from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR, PRIMARYCOLOR} from '../../assets/colors/colors';
import BackHeader from '../Components/BackHeader';
import QuestionsListView from '../Components/QuestionsListView';
import Set from '../Components/Set';
import {styles} from '../Styles/GeneralStyle';

import {CardSets, VOCABULARY, USER} from '../Redux/Reducers/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GetCardSets, GetFavCards } from '../Redux/Actions/AuthAction';
import PrimaryButton from '../Components/PrimaryButton';

const Vocabulary = () => {
  const user = useSelector(USER)
  const vocabulary = useSelector(VOCABULARY);
  const sets = useSelector(CardSets);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Stack = () => {
    let count = 1;
    let arr = {
      id: [],
      amount: [],
      premium: [],
    };
    for (
      var a = 1;
      a <= Math.ceil(vocabulary.freeVocabulary.results.length / 25);
      a++
    ) {
      arr.premium = [...arr.premium, 0];
      arr.id = [...arr.id, count];

      count++;

      if (Math.trunc(vocabulary.freeVocabulary.results.length / 25 > a)) {
        arr.amount = [...arr.amount, 25];
      } else {
        arr.amount = [
          ...arr.amount,
          vocabulary.freeVocabulary.results.length % 25,
        ];
      }
    }
    // Premium Stack

    for (
      var a = 1;
      a <= Math.ceil(vocabulary.premiumVocabulary.results.length / 25);
      a++
    ) {
      arr.premium = [...arr.premium, 1];
      arr.id = [...arr.id, count];
      count++;

      if (Math.trunc(vocabulary.premiumVocabulary.results.length / 25 > a)) {
        arr.amount = [...arr.amount, 50];
      } else {
        arr.amount = [
          ...arr.amount,
          vocabulary.premiumVocabulary.results.length % 25,
        ];
      }
    }
    return arr;
  };

  const StackOfSets = () => {
    let count = 1;

    let arr = {
      id: [],
      amount: [],
      premium: [],
      setID: []
    };
    
    // console.log(`premium vocabulary: `, vocabulary);
    // console.log(`cards: `, vocabulary.freeVocabulary);
    // vocabulary.freeVocabulary.results.forEach((e,i) => {
    //   arr.id = [...arr.id, count];
    //   count++;
    //   arr.amount = [...arr.amount, e.totalCards];
    //   arr.premium = [...arr.premium, e.premium]; 
    //   arr.setID = [...arr.setID, e.id]; 
    // });
    // premium
    vocabulary.premiumVocabulary.results.forEach((e,i) => {
      arr.id = [...arr.id, count];
      count++;
      arr.amount = [...arr.amount, e.totalCards];
      arr.premium = [...arr.premium, e.premium]; 
      arr.setID = [...arr.setID, e.id]; 
    });

    return arr;
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(GetCardSets("vocabulary"))
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
        <Text style={[styles.large, {textAlign: 'left'}]}>Vocabulary</Text>
      </View>
      <View style={styles.spaceHeight} />
      <View style={styles.spaceHeight} />
      <View style={[styles.homeFooterViewStyle, {height: hp('100%')}]}>
        <View style={styles.spaceHeight} />

        <View style={styles.spaceHeight} />

        <View style={{alignItems: 'center'}}>
          <FlatList
            numColumns={3}
            data={sets}
            renderItem={({item, index}) => (
              <Set
                index={index}
                open={user?.subscription? true : !item.premium}
                setId={item.id}
                data={item}
              />
            )}
          />
     
          <View style={styles.spaceHeight} />
          <View style={styles.spaceHeight} />
        </View>
        <View style = {{paddingHorizontal: wp('5%')}}>
        {user?.subscription? <PrimaryButton
            title="Flaged Vocabulary"
            backgroundColor= {PRIMARYCOLOR}
            onPress={() => {
              dispatch(
                GetFavCards({
                  type: 'vocabulary',
                  // id: props.setID,
                  // subject: 'card',
                  navigation: navigation,
                  destination: 'VocabularyCards'
                }),
              
              );
            }}
          />: null}
          </View>
      </View>
    </View>
  );
};

export default Vocabulary;
