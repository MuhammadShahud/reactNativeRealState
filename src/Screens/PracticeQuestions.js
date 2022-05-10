import React from 'react';
import {FlatList, ImageBackground, ScrollView, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR, PRIMARYCOLOR} from '../../assets/colors/colors';
import BackHeader from '../Components/BackHeader';
import QuestionsListView from '../Components/QuestionsListView';
import {QuestionData} from '../randomData';
import {styles} from '../Styles/GeneralStyle';
import {useDispatch, useSelector} from 'react-redux';
import {QUIZZES, USER, WEEKLYSTATISTICS} from '../Redux/Reducers/AuthReducer';
import {useFocusEffect} from '@react-navigation/native';
import {GetQuestionFunction, GetAllQuizzes,SetWeekestQuiz} from '../Redux/Actions/AuthAction';

const PracticeQuestion = props => {
  const dispatch = useDispatch();
  const {title} = props.route.params;
  const user = useSelector(USER);
  const {weekestQuiz} = useSelector(WEEKLYSTATISTICS);
  const quiz = [weekestQuiz];

 
  const quizzes = useSelector(QUIZZES);
 
  quizzes.sort(function (a, b) {
    return a.premium && b.premium ? 0 : a.premium ? 1 : -1;
  });

  useFocusEffect(
    React.useCallback(() => {
      if(title==="Weakest Quiz"){
        dispatch(SetWeekestQuiz(quiz));
        console.log("dispatch")
      }else{
        dispatch(GetAllQuizzes());
      }
    }, []),
  );
  console.log(title);
  return (
    <View style={styles.container}>
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />
      <View style={{width: wp('95%'), alignSelf: 'flex-end'}}>
        <Text style={[styles.large, {textAlign: 'left'}]}>{title}</Text>
      </View>
      <View style={styles.spaceHeight} />

      <View style={styles.spaceHeight} />
      <ScrollView>
        <View style={styles.homeFooterViewStyle}>
          <View style={styles.spaceHeight} />
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{alignSelf: 'center'}}>
              <FlatList
                data={quizzes}
                renderItem={({item, index}) => {
                  return (
                    title === 'Practice Test' || title==="Weakest Quiz"?
                    <QuestionsListView
                      item={item}
                      title={title}
                      index={index}
                    />: title === "Missed Question Test"?
                    !item.attempt.includes(user.id)?

                      <QuestionsListView
                      item={item}
                      title={title}
                      index={index}
                    /> : null :null
                  );
                }}
              />
            </ScrollView>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default PracticeQuestion;
