import * as React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../src/Screens/Home'
import { Icon } from 'react-native-elements';
import { Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HOMETABICON, HOMETABICONC, GRAPHTABICON, GRAPHTABICONC, LOCKTABICON, LOCKTABICONC } from '../../assets/images/images'
import Statistics from '../Screens/Statistics';
import HomeeStack from './HomeStack';
import { styles } from '../Styles/GeneralStyle';
import Svg, { Path } from 'react-native-svg'
import { PRIMARYCOLOR } from '../../assets/colors/colors'
import { useSelector } from 'react-redux';
import { USER } from '../Redux/Reducers/AuthReducer';
import Subscription from '../Screens/Subscription';

const TabStack = () => {
    const Tab = createMaterialBottomTabNavigator();
    const user = useSelector(USER)

    return (
        <Tab.Navigator
            initialRouteName='Home1'
            barStyle={{ backgroundColor: '#fff', tabBarLabel: false, paddingHorizontal: wp('6%') }}
        >
            <Tab.Screen
                name='Home1'
                component={HomeeStack}
                options={{
                    tabBarIcon: ({ focused }) => 
                         <Image style={styles.tabImageStyle} source={focused ? HOMETABICONC : HOMETABICON}/>,
                     
                    tabBarLabel: false
                }}
               
            />
            <Tab.Screen
                name='Graph'
                component={user?.subscription?Statistics: Subscription}
                tabPress={()=>{}}
                options={{
                    tabBarIcon: ({ focused }) => <Image style={styles.tabImageStyle} source={focused ? GRAPHTABICONC : GRAPHTABICON} />,
                    tabBarLabel: false
                }}
            />
            {/* <Tab.Screen
                name='profile'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => focused ? <LOCKTABICONC /> : <LOCKTABICON />
                    ,
                    tabBarLabel: false
                }}
            /> */}
        </Tab.Navigator>
    )
}
export default TabStack