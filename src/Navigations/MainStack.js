import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashCards from '../Screens/FlashCards';
import Vocabulary from '../Screens/Vocabulary';
import Settings from '../Screens/Settings';
import Statistics from '../Screens/Statistics';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Cards from '../Screens/Cards';
import SplashStack from './SplashStack';
import TabStack from './TabStack';
import VocabularyCards from '../Screens/VocabularyCards';
import QueScreen from '../Screens/QueScreen';
import DirectQuestions from '../Screens/DirectQuestions.js';
import SavedQuestions from '../Screens/SavedQuestions';
import QueComp from '../Components/QueComp';
import IntroExamDate from '../Screens/IntroExamDate';
import Terms from '../Screens/Terms';
import Privacy from '../Screens/privacy';
import Subscription from '../Screens/Subscription';

const Main = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="splash"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Main.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />

      <Main.Screen
        name="signup"
        component={Signup}
        options={{headerShown: false}}
      />

      <Main.Screen
        name="termsCondition"
        component={Terms}
        options={{headerShown: false}}
      />

      <Main.Screen
        name="privacyPolicy"
        component={Privacy}
        options={{headerShown: false}}
      />

      <Main.Screen
        name="splash"
        component={SplashStack}
        options={{headerShown: false}}
      />

      <Main.Screen
        name="Home"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Statistics"
        component={Statistics}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Cards"
        component={Cards}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="VocabularyCards"
        component={VocabularyCards}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="FlashCards"
        component={FlashCards}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Vocabulary"
        component={Vocabulary}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="QueScreen"
        component={QueScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="DirectQuestions"
        component={DirectQuestions}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="QueComp"
        component={QueComp}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="SavedQuestion"
        component={SavedQuestions}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="IntroExamDate"
        component={IntroExamDate}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Subscription"
        component={Subscription}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
