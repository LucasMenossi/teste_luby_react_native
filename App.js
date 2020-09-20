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
import * as Font from "expo-font";
import { AppLoading } from "expo";

const Tabs = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tabs.Navigator initialRouteName="Login" tabBarOptions={{
      style: {
        borderTopRightRadius: 15,
      }
    }}>
      <Tabs.Screen name="Login" component={Login} options={() => {
        return {
          tabBarVisible: false,
          tabBarButton: () => null,
        }
      }} />
      <Tabs.Screen name="User" component={User} options={() => {
        return {
          title: "Home",
        }
      }} />
      <Tabs.Screen name="CheckUser" component={CheckUser} options={() => {
        return {
          tabBarButton: () => null,
        }
      }}/>
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
      <Tabs.Screen name="Repos" component={Repos} options={() => {
        return {
          title: "Repos",
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

  if(!fontLoaded) {
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
        <BottomBar />
      </NavigationContainer>
    </Provider>
  );
}