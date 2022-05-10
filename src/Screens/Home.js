import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
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
import {styles} from '../Styles/GeneralStyle';
import {HomeIllustration} from '../../assets/images/images';
import {Icon} from 'react-native-elements';
import QuestionBox from '../Components/QuestionBox';
import HomeProgess from '../Components/HomeProgess';
import {bottomHome, bottomHomeFree, HomeTopCardsData} from '../randomData';
import CalendarStrip from 'react-native-calendar-strip';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import DatesSelector from '../Components/DatesSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import Toast from '../Components/ToastMessage';

import {
  USER,
  QUESTIONS,
  CARDS,
  VOCABULARY,
  WEEKLYSTATISTICS,
  FREEQUIZZES,
} from '../Redux/Reducers/AuthReducer';
import {
  GetRestQustions,
  GetAllQuizzes,
  GetQuestionFunction,
  GetSetsFunction,
  LoginFunction,
  PostToken,
  GetWeeklyStatistics,
} from '../Redux/Actions/AuthAction';

const productId = ['com.cooni.point1000', 'com.cooni.point5000'];
const Home = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  var colors = ['#F4A550', '#757DFE', '#1ACBCF'];

  const userData = useSelector(USER);
 
  const statisticsData = useSelector(WEEKLYSTATISTICS);

  const {
    weekestQuiz,
    answer,
    flashCardScore,
    practiceScore,
    testComplete,
    vocabularyScore,
    weeklyActivities,
  } = statisticsData;


  useFocusEffect(
    useCallback(() => {
      dispatch(PostToken());
      dispatch(GetWeeklyStatistics());
    }, []),
  );

  const [visibleToast, setvisibleToast] = React.useState({
    visibleToast: false,
    message: 'starting',
  });

  const [state, setState] = useState({
    productList: [],
    receipt: '',
    availableItemsMessage: '',
  });

  const CheckPracticePercentage = id => {
    switch (id) {
      case 1:
        return practiceScore?.allQuestions;

      case 2:
        return flashCardScore?.allFlashCard;
      case 3:
        return vocabularyScore?.allVocabulary;
        break;
      default:
        return 0;
    }
  };

  const getCurrentDate = () => {
    var today = new Date();
    let arr = [];
    for (let i = 0; i < 7; i++) {
      let n = Number(today.getDate()) + i
      if(n>30 && i!==0){
        n = n-30;
   arr = [...arr, String(n).padStart(2,'0')]
      }else{
      arr = [...arr, String(n).padStart(2,'0') ];
      }
    }
  
    return arr;
  };

  return (
    <View style={styles.container}>
      <BackHeader iconName2="settings" iconType2="feather" title1="Study" />
      <View style={styles.spaceHeight} />
      <View style={{width: wp('95%'), alignSelf: 'flex-end'}}>
        <FlatList
          data={getCurrentDate()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index}) => <DatesSelector item={item} index={index}/>}
        />
      </View>

      <View style={{height: hp('4%')}} />

      <ScrollView>
        <View style={[styles.homeFooterViewStyle, {height: hp('95%')}]}>
          <View style={{width: wp('95%'), alignSelf: 'center'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}>
                <FlatList
                  data={HomeTopCardsData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <HomeProgess
                      title={item.title}
                      background={colors[item.id % colors.length]}
                      percentage={CheckPracticePercentage(item.id)}
                      onPress={() => {
                        item.title == 'Practice Test'
                          ? navigation.navigate('PracticeQuestion', {
                              title: 'Practice Test',
                            })
                          : item.title == 'Flashcards'
                          ? navigation.navigate('FlashCards')
                          : item.title == 'Vocabulary'
                          ? navigation.navigate('Vocabulary')
                          : null;
                      }}
                    />
                  )}
                />
              </ScrollView>
            </ScrollView>
          </View>
         {!userData?.subscription? <View style={styles.spaceHeight} /> :null}
         {!userData?.subscription? <TouchableOpacity onPress={() => navigation.navigate('Subscription')}>
            <ImageBackground
              style={styles.homeImageStyle}
              source={HomeIllustration}>
              <View style={{paddingLeft: wp('4%')}}>
                <Text style={[styles.large, {textAlign: 'left'}]}>
                  Pass Today
                </Text>
                <Text style={styles.small}>Learn More</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>: null}
          <View style={styles.spaceHeight} />
          <View style={{width: wp('95%'), alignSelf: 'center'}}>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <FlatList
                  data={userData?.subscription ? bottomHome : bottomHomeFree}
                  numColumns={2}
                  renderItem={({item}) => (
                    <QuestionBox
                      subject={item.subjectName}
                      iconName={item.iconName}
                      iconType={item.iconType}
                      title={item.title}
                      stacks={item.stacks}
                    />
                  )}
                />
              </ScrollView>
            </ScrollView>
          </View>
        </View>

        <Toast visible={visibleToast.visible} message={visibleToast.message} />
      </ScrollView>
    </View>
  );
};

export default Home;
