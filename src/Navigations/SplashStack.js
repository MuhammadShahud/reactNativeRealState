import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../../src/Screens/Splash'
import IntroExamDate from '../Screens/IntroExamDate'
import Subscription from '../Screens/Subscription'

const SplashStart = createNativeStackNavigator()

const SplashStack = () => {
    return (
        <SplashStart.Navigator
            initialRouteName='Splash'
            options={{
                animationEnabled: false,
            }}>
            <SplashStart.Screen
                name='Splash'
                component={Splash}
                options={{ headerShown: false }}
            />
            <SplashStart.Screen
                name='IntroExamDate'
                component={IntroExamDate}
                options={{ headerShown: false }}
            />
            <SplashStart.Screen
                name='Subscription'
                component={Subscription}
                options={{ headerShown: false }}
            />
        </SplashStart.Navigator>
    )
}

export default SplashStack