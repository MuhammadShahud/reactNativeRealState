import React from 'react'
import { Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'


const Router = () => {
    
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default Router