import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../src/Screens/Home'
import Cards from '../Screens/Cards'
import Settings from '../Screens/Settings'
import Vocabulary from '../Screens/Vocabulary'
import FlashCards from '../Screens/FlashCards'
import PracticeQuestion from '../Screens/PracticeQuestions'
import QueScreen from '../Screens/QueScreen'

const Homee = createNativeStackNavigator()

const HomeeStack = () => {
    return (
        <Homee.Navigator
            initialRouteName='Home2'
            options={{
                animationEnabled: false,
            }}>
            <Homee.Screen
                name='Home2'
                component={Home}
                options={{ headerShown: false }}
            />

            <Homee.Screen
                name='PracticeQuestion'
                component={PracticeQuestion}
                options={{ headerShown: false }}
            />
           
           <Homee.Screen
                name='Settings'
                component={Settings}
                options={{ headerShown: false }}
            />   
            {/* <Homee.Screen
              name='QueScreen'
              component={QueScreen}
              options={{ headerShown: false, }}
            /> */}
            
        </Homee.Navigator>
    )
}

export default HomeeStack