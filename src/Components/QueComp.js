import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Pressable, View, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARYCOLOR} from '../../assets/colors/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  SendQuestionResponce,
  SendVisitorResponse,
  UpdateQuiz,
  UpdateUser,
} from '../Redux/Actions/AuthAction';
import {styles} from '../Styles/GeneralStyle';
import PrimaryButton from './PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {USER, QUESTIONS} from '../Redux/Reducers/AuthReducer';

export default function QueComp({data, current, nextHandler, title}) {
  const dispatch = useDispatch();
  const user = useSelector(USER);
  const navigation = useNavigation();
  const {queNo, setQueNo, remainingQuestion} = current;
  const {
    options,
    question,
    explanation,
    answer,
    attempt,
    passed,
    id,
    subject,
    visitors,
  } =  data.questions? data.questions[queNo] : data[queNo];
 
  const [continueButtonVisibility, setContinueButtonVisibility] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(null);
  const [ifRight, setIfRight] = useState(null);

  const pressToSubmit = e => {
    const newObj = {
      attempt: user?.subscription? attempt.includes(user.id)?[...attempt] : [...attempt, user.id] : null,
      passed: user?.subscription? passed.includes(user.id)?[...passed] :[...passed, options[e] === answer ? user.id : null] : null,
    };
    setContinueButtonVisibility(true);
    setSelected(e);
    checkForAnswer(e);
    setShowExplanation(true);
   user?.subscription? dispatch(SendQuestionResponce(newObj, id, subject)) : null;
  };

  const checkForAnswer = e => {
    if (e == null) return setIfRight(null);
    if (options[e] === answer) {
      return setIfRight(true);
    } else {
      return setIfRight(false);
    }
  };

const questionsCompleted =()=>{

const obj = {
  attempt:[]
};
  if(data.questions) { 
    if(data.attempt.includes(user.id)){
obj.attempt = [...data.attempt]
dispatch(UpdateQuiz(obj,data.id))
  }else{
    obj.attempt=[...data.attempt,user.id]
    dispatch(UpdateQuiz(obj,data.id))
  }
}

title === "Practice Question"?
  navigation.navigate('PracticeQuestion',{title: 'Practice Question'}) :
title === "Missed Question Test"?
  navigation.navigate('PracticeQuestion',{title: "Missed Question Test"}) :
  null
}

  const changeQuestion = () => {
    setSelected(null);
    setContinueButtonVisibility(false);
    setIfRight(null);
    checkForAnswer(null);
    setShowExplanation(null);

    setQueNo(queNo + 1);
  };

  const MyIcon = e => {
    return (
      <Icon
        name={e.name}
        type={e.type}
        color={'#fff'}
        size={wp('3.5%')}
        containerStyle={{
          backgroundColor: e.backgroundColor,
          position: 'absolute',
          right: wp(e.offset),
          top: hp(e.offset),
          borderRadius: wp(10),
          padding: wp('1%'),
        }}
      />
    );
  };

  const OptionCard = props => {
    const ifRight = props.ifRight;

    return (
      <View
        style={[
          props.stylesProp,
          props.stylePressed
            ? {borderColor: 'blue', backgroundColor: '#d1d4ff', opacity: 10}
            : null,
          props.ifRight == null
            ? null
            : props.ifRight == 1
            ? props.selected == props.keyProp
              ? {borderColor: 'green', backgroundColor: '#d1d4ff', opacity: 10}
              : null
            : props.ifRight == 0
            ? props.selected == props.keyProp
              ? {borderColor: 'red', backgroundColor: 'rgba(218, 55, 57, 0.46)'}
              : props.option == props.answer
              ? {
                  borderColor: 'green',
                  backgroundColor: 'rgba(98, 150, 41, 0.46)',
                  opacity: 10,
                }
              : null
            : null,
        ]}>
        {props.stylePressed ? (
          <MyIcon
            name="check"
            backgroundColor={'#757DFE'}
            type="antdesign"
            offset={-1.5}
          />
        ) : null}

        {props.ifRight == null ? null : props.ifRight == 1 ? (
          props.selected == props.keyProp ? (
            <MyIcon
              name="check"
              backgroundColor={'green'}
              type="antdesign"
              offset={1}
            />
          ) : null
        ) : 
        props.selected == props.keyProp ? (
          <MyIcon
            name="cross"
            backgroundColor={'red'}
            type="entypo"
            offset={1}
          />
        ) : props.option == props.answer ? (
          <MyIcon
            name="check"
            backgroundColor={'green'}
            type="antdesign"
            offset={1}
          />
        ) : null}

        <Text style={stylesSeperate.OptionText}>{props.option}</Text>
      </View>
    );
  };

  const Options = ({data}) => {
    const {option, key} = data;
    return (
      <View>
        <Pressable
          key={key}
          disabled={selected != null}
          onPress={() => {
            pressToSubmit(key);
          }}
          children={({pressed}) => (
            <OptionCard
              option={option}
              pressed={pressed}
              keyProp={key}
              answer={answer}
              selected={selected}
              ifRight={ifRight}
              stylesProp={stylesSeperate.optionCardStyle}
              stylePressed={pressed}
            />
          )}
        />
      </View>
    );
  };



  useEffect(() => {
    const newObj = {
      visitors: [...visitors, user?.subscription? user.id:null],
    };
   
  }, []);
  return (
    <View style={stylesSeperate.container}>
      <View style={stylesSeperate.questionContainer}>
        <Text style={[styles.medium, stylesSeperate.questionText]}>
          {question}
        </Text>

        <View style={styles.spaceHeight} />

        {options.map((v, i) => (
          <Options key={i} data={{option: v, key: i}} />
        ))}
        <View style={styles.spaceHeight} />


        {showExplanation && explanation != null ? (
          <View>
            <Text
              style={
                (stylesSeperate.OptionText,
                {color: PRIMARYCOLOR, fontSize: 16, fontWeight: 'bold'})
              }>
              Explanation:
            </Text>

            <View style={styles.spaceHeight} />
            <View style={stylesSeperate.explanationContainer}>
             
              <Text
                style={{
                  lineHeight: 20,
                  color: 'black'
                }}>
                {explanation}
              </Text>
            </View>
          </View>
        ) : null}
      </View>


      {continueButtonVisibility ? (
        <View style={stylesSeperate.continueButtonContainer}>
          <PrimaryButton
            title="Continue"
            onPress={() => {
              remainingQuestion - 1
                ? (changeQuestion(), nextHandler())
                : data.questions? user?.subscription? questionsCompleted():
                navigation.navigate('PracticeQuestion',{title: 'Practice Question'}) 
                : navigation.navigate('Home')
            }}
          />
        </View>
      ) : null}
    </View>
  );
}

export const stylesSeperate = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: hp('70'),
    top: hp('2%'),
    width: '100%',
    borderRadius: 25,
  },
  questionContainer: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  questionText: {
    color: 'black',
    alignSelf: 'flex-start',
    textAlign: 'justify',
  },
  explanationContainer: {
    backgroundColor: '#EEE',
    width: '100%',
    borderRadius: 15,
    padding: 10,
    // bottom: 0,
  },
  continueButtonContainer: {
    width: wp('70%'),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  optionCardStyle: {
    width: wp('80%'),
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    margin: 6,
  },
  OptionText: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});
