import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BLUEFONTCOLOR, PURPLECOLOR } from '../../assets/colors/colors';
import Header from '../Components/BackHeader';
import QueComp from '../Components/QueComp';
import { styles } from '../Styles/GeneralStyle';
import { SAVEDQUESTIONS } from '../Redux/Reducers/AuthReducer';
import { useDispatch, useSelector } from 'react-redux';
import { GetRestQustions } from '../Redux/Actions/AuthAction';

export default function QueScreen(props) {
    const data = useSelector(SAVEDQUESTIONS)
    const dispatch = useDispatch();
 
    const [queNo, setQueNo] = useState(0);
    const [currentQue, setCurrentQue] = useState(data[queNo]);
    const [remainingQuestion, setRemainingQuestion] = useState();
    const handleForward = () => {
        // Alert.alert("fine")
        // console.log('---------> Question change')
        // console.log('props   > ', data)
    };
    useEffect(() => {
        setRemainingQuestion(data.length - queNo);
        dispatch(GetRestQustions());
    });
console.log(data);
    return  data.length !== 0 ? (
        <View style={styles.container}>
            <Header
                iconName1="arrow-back"
                iconType1="ionicon"
                customRightIcon="star"
                customRightIcontype="feather"
                queNo={queNo}
                questionSubject={props.route.params.subject}
                data={data[queNo]}
                customRightIconOnPress={() => {
                    // Alert.alert(`Marking Question "${currentQue.question}" as favorite`);
                }}
            />

            <View style={styles.spaceHeight} />

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.large}>
                    {remainingQuestion} Remaining
                </Text>
                <View style={{ height: hp('1%') }} />
            </View>
            {/* Progress Bar */}
            <View style={styles.cardsProgressBar}>
                <View
                    style={[
                        styles.cardsProgressBar,
                        {
                            // width: `${20 * (queNo / data.length)}%`,
                            width: `${100 - (100 * remainingQuestion / data.length)}%`,
                            backgroundColor: PURPLECOLOR,
                        },
                    ]}></View>
                <View
                    style={[
                        styles.cardsProgressBar,
                        {
                            // width: `${100 - 20 * (queNo / data.length)}%`,
                            width: `${(100 * remainingQuestion / data.length)}%`,
                            backgroundColor: '#FFFF',
                        },
                    ]}></View>
            </View>
           
            <View style={styles.spaceHeight} />

            {/* Que listing each */}

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
                        data={data}
                        key={remainingQuestion}
                        current={{ queNo, setQueNo, remainingQuestion }}
                        nextHandler={() => { handleForward() }}
                    />

                </View>
            </View>
        </View>
    ):(
        <View style={styles.container}>
        <Text style = {{color:'white',textAlign:'center',fontSize:wp('4%')}}>
            Currently No Questions Available
        </Text>
        </View>
    )
    
}
