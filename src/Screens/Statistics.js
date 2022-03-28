import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackHeader from '../Components/BackHeader';
import SingleListSetting from '../Components/SingleListSetting';
import {styles} from '../Styles/GeneralStyle';
import {SETTINGIllustration} from '../../assets/images/images';
import {
  BLUEFONTCOLOR,
  PRIMARYCOLOR,
  PURPLECOLOR,
} from '../../assets/colors/colors';
import ProgressStatistics from '../Components/ProgressStatistics';
import {Icon} from 'react-native-elements';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {GRAPHICONWHITE} from '../../assets/images/images';
import {USER, WEEKLYSTATISTICS} from '../Redux/Reducers/AuthReducer';
import StatisticsPopup from '../Components/StatsisticPopup';
import {useSelector} from 'react-redux';

const Statistics = () => {
  const [checked, setChecked] = useState(false);
  const statisticsData = useSelector(WEEKLYSTATISTICS);
  const user = useSelector(USER)
  console.log("statisticsData",statisticsData);
 const {
    answer,
    flashCardScore,
    practiceScore,
    testComplete,
    vocabularyScore,
    weeklyActivities,
  } = statisticsData;

  // console.log('weeklyActivities', flashCardScore.allFlashCard);

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      {/* If premium visiblity wil be off in prop */}
      
      <BackHeader iconName1="arrow-back" iconType1="ionicon" />
      <View style={{width: wp('95%'), alignSelf: 'flex-end'}}>
        <Text style={[styles.large, {textAlign: 'left'}]}>Statistics</Text>
      </View>
      <View style={styles.spaceHeight} />
      <View style={{height: hp('.5%')}} />

      <View style={styles.spaceHeight} />
    { user?.subscription?  <ScrollView>
        <View style={styles.homeFooterViewStyle}>
          <View style={styles.spaceHeight} />
          {/* Flow Chart */}
          <View
            style={{
              width: wp('85%'),
              height: hp('18%'),
              backgroundColor: PURPLECOLOR,
              alignSelf: 'center',
              borderRadius: wp('3%'),
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View>
              <AnimatedCircularProgress
                size={wp('25%')}
                width={10}
                fill={68}
                tintColor="#CFD8DC"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor={'#3d5875'}>
                {fill => <Text style={styles.large}>{`${68}%`}</Text>}
              </AnimatedCircularProgress>
            </View>
            <View style={{width: wp('10%')}} />
            <View
              style={{
                width: wp('30%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[styles.small, {color: '#1ACBCF'}]}>
                  {/* {answer.attemptAnswer} / {answer.totalAnswers} */}
                </Text>
                <Text
                  style={[
                    styles.small,
                    {fontSize: wp('3.3%'), paddingLeft: wp(2)},
                  ]}>
                  Answer Correctly
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[styles.small, {color: '#1ACBCF'}]}>
                  {testComplete.correct} / {testComplete.totalTests}
                </Text>
                <Text
                  style={[
                    styles.small,
                    {fontSize: wp('3.3%'), paddingLeft: wp(2)},
                  ]}>
                  Tests Completed
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[styles.small, {color: '#1ACBCF'}]}>
                  {weeklyActivities.answeredToday}
                </Text>
                <Text
                  style={[
                    styles.small,
                    {
                      fontSize: wp('3.3%'),
                      paddingLeft: wp(2),
                      textAlign: 'center',
                    },
                  ]}>
                  Daily Questions Answered
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.spaceHeight} />
          <View style={{width: wp('85%'), alignSelf: 'center'}}>
            <Text
              style={[
                styles.large,
                {color: BLUEFONTCOLOR, textAlign: 'left', fontSize: wp('5%')},
              ]}>
              Practice Scores
            </Text>

            <View style={{height: hp('2%')}} />
            <View
              style={[
                styles.settingBoxIcon,
                {
                  paddingVertical: hp('2%'),
                },
              ]}>
              <ProgressStatistics
                title="All Questions"
                percentage={practiceScore.allQuestions}
              />
              {practiceScore.setPercentage.map((v, i) =>
              
              practiceScore.allQuestions ? (
                <ProgressStatistics
           
                key = {i}
                  title={'Set #' + parseInt(i + 1)}
                  percentage={v.percentage}
                />
              ) : null,
            )}
          
            </View>
          </View>
          <View style={styles.spaceHeight} />
          <View style={{width: wp('85%'), alignSelf: 'center'}}>
            <Text
              style={[
                styles.large,
                {color: BLUEFONTCOLOR, textAlign: 'left', fontSize: wp('5%')},
              ]}>
              Flashcard Scores
            </Text>

            <View style={{height: hp('2%')}} />
            <View
              style={[
                styles.settingBoxIcon,
                {
                  paddingVertical: hp('2%'),
                },
              ]}>
              <ProgressStatistics
                title="All Flashcards"
                percentage={flashCardScore.allFlashCard}
              />
              {flashCardScore.setsPercentage.map((v, i) =>
              
                flashCardScore.allFlashCard ? (
                  <ProgressStatistics
             
                  key = {i}
                    title={'Set #' + parseInt(i + 1)}
                    percentage={v.percentage}
                  />
                ) : null,
              )}
            </View>
          </View>
          <View style={styles.spaceHeight} />
          <View style={{width: wp('85%'), alignSelf: 'center'}}>
            <Text
              style={[
                styles.large,
                {color: BLUEFONTCOLOR, textAlign: 'left', fontSize: wp('5%')},
              ]}>
              Vocabulary Score
            </Text>

            <View style={{height: hp('1%')}} />
            <View
              style={[
                styles.settingBoxIcon,
                {
                  paddingVertical: hp('2%'),
                },
              ]}>
              <ProgressStatistics
                title="All Vocabulary"
                percentage={vocabularyScore.allVocabulary}
              />
              {vocabularyScore.setsPercentage.map((v, i) =>
                vocabularyScore ? (
                  <ProgressStatistics
               
                  key = {i}
                    title={'Set #' + parseInt(i + 1)}
                    percentage={v.percentage}
                  />
                ) : null,
              )}
            </View>
          </View>
          <View style={styles.spaceHeight} />
          <View style={styles.activityHead}>
            <Image
              style={{width: wp(6), height: wp(6)}}
              source={GRAPHICONWHITE}
            />
            <Text
              style={[styles.medium, {textAlign: 'left', width: wp('57%')}]}>
              This Week Activities
            </Text>
            <Icon
              name="down"
              type="antdesign"
              size={wp('5%')}
              color="#fff"
              onPress={toggleSwitch}
            />
          </View>
          {checked ? (
            <View>
              <View style={{height: hp('.05%')}} />
              <View style={styles.activityBelow}>
                <View
                  style={[styles.boxActivity, {backgroundColor: '#FCEFEA'}]}>
                  <Text style={[styles.large, {color: BLUEFONTCOLOR}]}>
                    {weeklyActivities.answeredToday}
                  </Text>
                  <Text
                    style={[
                      styles.small,
                      {color: BLUEFONTCOLOR, textAlign: 'center'},
                    ]}>
                    Questions Answered Today
                  </Text>
                </View>
                <View
                  style={[styles.boxActivity, {backgroundColor: '#EDEFFE'}]}>
                  <Text style={[styles.large, {color: BLUEFONTCOLOR}]}>
                    {weeklyActivities.answeredWeekly}
                  </Text>
                  <Text
                    style={[
                      styles.small,
                      {
                        color: BLUEFONTCOLOR,
                        textAlign: 'center',
                        width: wp('18%'),
                      },
                    ]}>
                    Questions Answered This Week
                  </Text>
                </View>
                <View style={styles.boxActivity}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.large, {color: BLUEFONTCOLOR}]}>
                      {weeklyActivities.studyTime}
                    </Text>
                    <Text
                      style={[
                        styles.small,
                        {
                          color: BLUEFONTCOLOR,
                          alignSelf: 'flex-end',
                          marginBottom: hp('.4%'),
                        },
                      ]}>
                      min
                    </Text>
                  </View>
                  <View style={{height: hp('.3%')}} />
                  <Text
                    style={[
                      styles.small,
                      {color: BLUEFONTCOLOR, textAlign: 'center'},
                    ]}>
                    Study Time Recorded
                  </Text>
                  <View style={{height: hp('2%')}} />
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      :null}

     { user?.subscription? <StatisticsPopup visible={false} />: 
     <StatisticsPopup visible={true} />}
    </View>
  );
};

export default Statistics;
