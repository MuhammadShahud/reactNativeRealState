import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { INTROIMAGE } from '../../assets/images/images'
import PrimaryButton from '../Components/PrimaryButton';
import { styles } from '../Styles/GeneralStyle'
import { SignupFunction } from '../Redux/Actions/AuthAction';
import { useDispatch } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitSignup = () => {
        const newObj = {
            email,
            password
        }
        dispatch(SignupFunction(newObj, navigation))
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, {
                alignItems: 'center',
                justifyContent: 'center'
            }]}>
            <View style={styles.innerView}>
                <Image style={styles.logoStyle} resizeMode='contain' source={INTROIMAGE} />
                <Text style={styles.large}>Create an Account</Text>
                <View style={{ height: hp('2%') }} />
                <Text style={styles.headline}>Signup</Text>
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
                    <Text style={{ color: 'white' }}>Already has an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Login </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: hp('4%') }} />
                <View style={{ width: wp('70%') }}>
                    <PrimaryButton title="Signup" onPress={submitSignup} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
};


export default Signup;