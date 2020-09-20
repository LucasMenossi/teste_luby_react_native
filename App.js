import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TabBarIOS, Text, TextBase, View } from 'react-native';
import Login from './screens/Login';
import User from './screens/User';
import Repos from './screens/Repos';
import Followers from './screens/Followers';
import Following from './screens/Following';
import CheckUser from './screens/CheckUser';
import { Provider } from 'react-redux';
import store from './store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomBar() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'User') {
            iconName = 'home'
          } else if (route.name === 'Followers') {
            iconName = 'users'
          } else if (route.name === 'Following') {
            iconName = 'users'
          } else if (route.name === 'Repos') {
            iconName = 'github'
          }

          return <Feather name={iconName} size={26} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#A5A5A5',
        style: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
          height: 75,
          zIndex: 8
        },
        labelStyle: {
          fontSize: 15,
          fontFamily: 'Helvetica-Neue'
        }
      }}
    >
      <Tabs.Screen name="User" component={User} options={() => {
        return {
          title: "Home",
        }
      }} />
      <Tabs.Screen name="Repos" component={Repos} options={() => {
        return {
          title: "Repos",
        }
      }} />
      <Tabs.Screen name="CheckUser" component={CheckUser} options={() => {
        return {
          tabBarButton: () => null,
        }
      }} />
      <Tabs.Screen name="Followers" component={Followers} options={() => {
        return {
          title: "Seguidores",
        }
      }} />
      <Tabs.Screen name="Following" component={Following} options={() => {
        return {
          title: "Seguindo",
        }
      }} />
    </Tabs.Navigator>
  )
}

const fetchFont = () => {
  return Font.loadAsync({
    'Helvetica-Neue': require('./assets/fonts/helvetica-neue.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFont}
      onError={() => console.log("ERR0R")}
      onFinish={() => {
        setFontLoaded(true)
      }}
    />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="User" component={BottomBar} options={{ headerShown: false }} />
          <Stack.Screen name="Repos" component={BottomBar} options={{ headerShown: false }} />
          <Stack.Screen name="Followers" component={BottomBar} options={{ headerShown: false }} />
          <Stack.Screen name="Following" component={BottomBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}