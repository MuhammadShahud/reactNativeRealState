import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { Icon, Switch } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { BLUEFONTCOLOR } from '../../assets/colors/colors';
import { UpdateUser } from '../Redux/Actions/AuthAction';
import { USER } from '../Redux/Reducers/AuthReducer';
import { styles } from '../Styles/GeneralStyle';

const SingleListSetting = (props) => {
    const user = useSelector(USER)
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(user?.studyReminder? user.studyReminder: true);

    const setStudyReminder = (value) => {
        setChecked(value)
      
        const req = {
            studyReminder : value
        }
        dispatch(UpdateUser(req,user.id))

    };
    
    useEffect(
     ()=>{
setChecked(user?.studyReminder)
     },[]   
    )

    return <TouchableOpacity onPress={props.onPress} style={styles.SingleListSettingView}>
        <View>
            <Text style={[styles.large, { color: BLUEFONTCOLOR, textAlign: 'left', fontSize: wp('5.5%') }]}>{props.title}</Text>
            <View style={{ height: hp('.35%') }} />
            <Text style={[styles.small, { color: BLUEFONTCOLOR, textAlign: 'left', fontSize: wp('2.8%') }]}>{props.description}</Text>

        </View>
        {props.switch ?
            <Switch
                value={checked}
                color={'#fff'}
                onValueChange={(value) =>setStudyReminder(value)}
                containerStyle={{ width: wp('40%') }}
                disabled={!user?.subscription? true :false}
            />
            : props.iconName && props.iconType ?
                <Icon name={props.iconName} type={props.iconType} size={wp('7.5%')} color={props.iconName == 'arrow-left-right' ? 'red' : '#246EE9'} containerStyle={{ width: wp('23%') }} />
                : null}
    </TouchableOpacity>
};

export default SingleListSetting;
