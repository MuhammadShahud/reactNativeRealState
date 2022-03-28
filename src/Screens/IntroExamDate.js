import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BackHeader from '../Components/BackHeader';
import { styles } from '../Styles/GeneralStyle';
import { Switch, Icon } from 'react-native-elements';
import PrimaryButton from '../Components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import {USER} from '../Redux/Reducers/AuthReducer';
import { PRIMARYCOLOR, SECONDARYCOLOR } from '../../assets/colors/colors'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../Redux/Actions/AuthAction';

const IntroExamDate = () => {
const user = useSelector(USER)

    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);

    const toggleSwitch = () => {
        setChecked(!checked);
    };
    const [selectedDate, setSelectedDate] = useState(user?.examDate.toString());
    const onDateChange = (date) => {
        console.log(date);
        setSelectedDate(date)
    }
const dispatch = useDispatch();


const setExamDate = ()=>{
dispatch(UpdateUser(
    {
        examDate:selectedDate
    },
    user.id
))
navigation.navigate('Home')
}

    console.log(user);
    return <View style={styles.container}>
        <BackHeader iconName1="arrow-back" iconType1="ionicon" />
        <View style={styles.spaceHeight} />
        <Text style={styles.large}>When is your Exam ?</Text>
        <View style={styles.innerView}>
            <View style={{ height: hp('1%') }} />
            <Text style={styles.medium}>Choose your exam Date</Text>

            <View style={styles.spaceHeight} />
            <View style={styles.spaceHeight} />
            <CalendarPicker
                onDateChange={onDateChange}
                selectedStartDate={selectedDate}
                textStyle={{ color: '#fff' }}
                selectedDayTextColor={{ color: '#fff', }}
                selectedDayStyle={{ backgroundColor: SECONDARYCOLOR }}
                previousTitle={<Icon name="chevron-back" type="ionicon" color="#fff" />}
                nextTitle={<Icon name="chevron-forward-sharp" type="ionicon" color="#fff" />}
                todayBackgroundColor={PRIMARYCOLOR}
                todayTextStyle={{ color: '#fff' }}

            />
            <View style={styles.spaceHeight} />
            <View style={styles.spaceHeight} />
            <View style={styles.spaceHeight} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%') }}>

                <Text style={[styles.small, { width: wp('65%'), fontSize: wp('3%') }]}>Turn on the notification to keep track of your daily study progress and grasp your possibility. </Text>
                <Switch
                    value={checked}
                    color={'#fff'}
                    onValueChange={(value) => setChecked(value)}
                    containerStyle={{ width: wp('35%') }}
                />
            </View>
            <View style={styles.spaceHeight} />

            <View style={styles.spaceHeight} />

            <View style={{ width: wp('70%') }}>
                <PrimaryButton title="Next" onPress={() => setExamDate()} />
            </View>
        </View>
    </View>
};

export default IntroExamDate;
