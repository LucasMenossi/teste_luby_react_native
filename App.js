import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

const Tabs = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tabs.Navigator initialRouteName="Login">
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


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomBar />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
