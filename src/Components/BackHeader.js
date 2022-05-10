import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../Styles/GeneralStyle';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateQuestionFunction} from '../Redux/Actions/AuthAction';
import {USER, QUESTIONS} from '../Redux/Reducers/AuthReducer';

const Header = props => {
  const {data, queNo} = props;
  const user = useSelector(USER);
  const questions = useSelector(QUESTIONS);
  const dispatch = useDispatch();
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
  const navigation = useNavigation();

  const isFavorite = () => {
    return data.favorites.includes(user.id);
  };
  const setForFavorites = () => {
    console.log('chutioyhap');
    const isFavorite = data.favorites.includes(user.id);
   
    if (!isFavorite) {
      const newObj = {
        favorites: [...data.favorites, user.id],
      };

      dispatch(UpdateQuestionFunction(newObj, data.id));
    } else {
      const restFavorite = data.favorites.filter(value => value !== user.id);
      const newObj = {
        favorites: [...restFavorite],
      };

      dispatch(UpdateQuestionFunction(newObj, data.id));
    }
  };

  return (
    <View style={styles.BackHeaderBG}>
      {props.title1 ? (
        <Text style={styles.large}>{props.title1}</Text>
      ) : (
        <Icon
          name={props.iconName1}
          type={props.iconType1}
          color="#fff"
          size={wp('7%')}
          onPress={() =>
            props.iconName1 == 'arrow-back'
              ? navigation.goBack()
              : props.iconName1 == 'cross'
              ? navigation.goBack()
              : null
          }
        />
      )}

      {props.skip ? (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.medium}>Skip</Text>
        </TouchableOpacity>
      ) : props.iconName2 ? (
        <Icon
          name={props.iconName2}
          type={props.iconType2}
          color="#fff"
          size={wp('6%')}
          onPress={() => {
            props.iconName2 == 'settings'
              ? navigation.navigate('Settings')
              : null;
          }}
        />
      ) : null}

      {props.customRightIcon ? user?.subscription?(
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name={props.customRightIcon}
            type={isFavorite() ? 'font-awesome' : 'feather'}
            color="white"
            size={wp('6%')}
            onPress={() => {
              props.customRightIconOnPress();
              setForFavorites();
            }}
          />
        </TouchableOpacity>
      ) : null : null}
    </View>
  );
};

export default Header;
