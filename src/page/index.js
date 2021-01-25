import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Auth/login'
import Dashboard from './After/dashboard'
import Location from './After/location'
import Absensi from './After/absensi.js'
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const HomeStack = () => {
    const {isLogin} = useSelector((state) => state.Auth);

    return (
        <>
        {isLogin == false ? (
        <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        ) : (
        <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Absensi"
          component={Absensi}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />

        </Stack.Navigator>
        )}
        </>
    )
}

const MainNavigator = (props) => {
    return (
      <NavigationContainer>
        <HomeStack navigation={props.navigation} />
      </NavigationContainer>
    );
  };
  
  export default MainNavigator;
  