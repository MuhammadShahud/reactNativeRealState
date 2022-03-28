import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLUEFONTCOLOR, PURPLECOLOR} from '../../assets/colors/colors';
import Header from '../Components/BackHeader';
import QueComp from '../Components/QueComp';
import {styles} from '../Styles/GeneralStyle';
import {QUESTIONS, QUIZZES, USER} from '../Redux/Reducers/AuthReducer';
import {useSelector} from 'react-redux';
import Toast from '../Components/ToastMessage';
import {GetQuizById} from '../Redux/Actions/AuthAction';
import {useDispatch} from 'react-redux';

export default function QueScreen(props) {
  const {index} = props.route.params;
  const quizzes = useSelector(QUIZZES);
  const user = useSelector(USER);
  const data = quizzes[index];
  const [queNo, setQueNo] = useState(0);
  const [currentQue, setCurrentQue] = useState(data[queNo]);
  const [remainingQuestion, setRemainingQuestion] = useState(
    data.questions.length,
  );
  const [visibleToast, setvisibleToast] = React.useState({
    visibleToast: false,
    message: 'Favorite',
  });

  const handleForward = () => {};

  useEffect(() => {
    setRemainingQuestion(data.questions.length - queNo);
  });


  return data.questions.length !== 0?(
    <View style={styles.container}>
      <Header
        iconName1="arrow-back"
        iconType1="ionicon"
        customRightIcon="star"
        customRightIcontype="font-awesome"
        queNo={queNo}
        data={data.questions[queNo]}
        customRightIconOnPress={() => {
          // Alert.alert(`Marking Question "${currentQue.question}" as favorite`);
         
          // setvisibleToast({visible: true, message: 'Favorite...'});
        }}
      />

      <View style={styles.spaceHeight} />

      <View style={{alignItems: 'center'}}>
        <Text style={styles.large}>{remainingQuestion} Remaining</Text>
        <View style={{height: hp('1%')}} />
      </View>
      {/* Progress Bar */}
      <View style={styles.cardsProgressBar}>
        <View
          style={[
            styles.cardsProgressBar,
            {
              // width: `${20 * (queNo / data.length)}%`,
              width: `${
                100 - (100 * remainingQuestion) / data.questions.length
              }%`,
              backgroundColor: PURPLECOLOR,
            },
          ]}></View>
        <View
          style={[
            styles.cardsProgressBar,
            {
              // width: `${100 - 20 * (queNo / data.length)}%`,
              width: `${(100 * remainingQuestion) / data.questions.length}%`,
              backgroundColor: '#FFFF',
            },
          ]}></View>
      </View>
      <View style={styles.spaceHeight} />

      <View style={styles.spaceHeight} />

      {/* Que listing each */}
      <Toast visible={visibleToast.visible} message={visibleToast.message} />

      <View
        style={{
          backgroundColor: '#ffffff',
          height: '100%',
          position: 'relative',
          width: '100%',
          borderRadius: 25,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: hp('70'),
            top: hp('2%'),
            width: '100%',
            borderRadius: 25,
            alignSelf: 'center',
          }}>
          <QueComp
            key={remainingQuestion}
            current={{queNo, setQueNo, remainingQuestion}}
            nextHandler={() => {
              handleForward();
            }}
            data={data}
            title={props.route.params.title}
          />
        </View>
      </View>
    </View>
  ):
  (
    <View style={styles.container}>
    <Text style = {{color:'white',textAlign:'center',fontSize:wp('4%')}}>
        Currently No Questions Available
    </Text>
    </View>
)
}
