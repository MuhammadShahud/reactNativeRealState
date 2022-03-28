import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {INTROIMAGE} from '../../assets/images/images';
import PrimaryButton from '../Components/PrimaryButton';
import {styles} from '../Styles/GeneralStyle';
import {
  LoginFunction,
  GetQuestionFunction,
  GetSetsFunction,
  GetVocabularySetsFunction,
} from '../Redux/Actions/AuthAction';
import {useDispatch, useSelector} from 'react-redux';


import {LOADING} from '../Redux/Reducers/AuthReducer';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(LOADING);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(loading);

  const submitLogin = () => {
    const newObj = {
      email,
      password,
    };
  
    // navigation.navigate('Home');
    dispatch(LoginFunction(newObj, navigation,"Home2"));
    // dispatch(GetQuestionFunction());
    // dispatch(GetSetsFunction());
  };

  

  return (
    <View
      style={[
        styles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      {/* {loading == true ? ( */}
      {false ? (
        <ActivityIndicator accessible={loading} size="large" color="#00ff00" />
      ) : (
        <View style={styles.innerView}>
          <Image
            style={styles.logoStyle}
            resizeMode="contain"
            source={INTROIMAGE}
          />
          <Text style={styles.large}>The Future to Real Estate Education</Text>
          <View style={{height: hp('4%')}} />
          <Text style={styles.headline}>Login</Text>
          <View style={styles.spaceHeight} />
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.inputField}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.inputField}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.forgotWidth}>
            <Text style={{color: 'white'}}>Do not have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Signup </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: hp('4%')}} />
          <View style={{width: wp('70%')}}>
            <PrimaryButton title="Login" onPress={submitLogin} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;
