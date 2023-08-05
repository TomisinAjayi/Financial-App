import React from "react";
import Home from '../pages/Home'
import Profile from "../pages/Profile";
// import New from "../pages/New";
import Finance from "../pages/Finances";
import Attendance from "../pages/Attendance";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import NewFinance from "../pages/Finances/NewFinance";
import ViewFinance from "../pages/Finances/ViewFinances";
import NewAttendance from "../pages/Attendance/NewAttendance";
import ViewAttendance from "../pages/Attendance/ViewAttendance";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      {/* <HomeStack.Screen name="Entry" component={Home} /> */}
    </HomeStack.Navigator>
 );
}

const FinanceStack = createStackNavigator();

function FinanceStackScreen() {
  return (
    <FinanceStack.Navigator initialRouteName="Financial Analysis" >
      <FinanceStack.Screen
        name="Financial Analysis"
        component={Finance}
      />
      <FinanceStack.Screen name="newFinance" component={NewFinance} options={{ 
        // headerBackTitleVisible: false, 
        // headerShadowVisible: false, 
        // headerTintColor: '#000',
        // headerTitle: 'New Finance', 
        // headerTitleStyle: {
        //   // fontFamily: 'Roboto',
        //   fontStyle: 'normal',
        //   fontWeight: '700',
        //   color: 'rgba(0, 0, 0, 0.85)',
        // }, 
        headerShown: false
       }} />
      <FinanceStack.Screen name="viewFinance" component={ViewFinance} options={{ 
        // headerBackTitleVisible: false, 
        // headerShadowVisible: false, 
        // headerTintColor: '#000',
        // headerTitle: 'View Finance', 
        // headerTitleStyle: {
        //   // fontFamily: 'Roboto',
        //   fontStyle: 'normal',
        //   fontWeight: '700',
        //   color: 'rgba(0, 0, 0, 0.85)',
        // },
        headerShown: false
       }} />
    </FinanceStack.Navigator>
  );
}

const AttendanceStack = createStackNavigator();

function AttendanceStackScreen() {
  return (
    <AttendanceStack.Navigator initialRouteName="Weekly Attendance" >
      <AttendanceStack.Screen
        name="Weekly Attendance"
        component={Attendance}
      />
      <AttendanceStack.Screen name="new attendance" component={NewAttendance} options={{ headerBackTitleVisible: false,   }} />
      <AttendanceStack.Screen name="view attendance" component={ViewAttendance} options={{ headerBackTitleVisible: false, }} />
    </AttendanceStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingStack.Navigator initialRouteName="Settings" >
      <SettingStack.Screen
        name="Settings"
        component={Profile}
      />
      {/* <SettingStack.Screen name="Settings" component={Home} /> */}
    </SettingStack.Navigator>
  );
}

export default function AppRoutes() {
    return (

    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'white' }} activeColor="white" >
      <Tab.Screen name="Home" component={HomeStackScreen}            //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen name="Finance" component={FinanceStackScreen}      // Finance Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="finance" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen name="Attendance" component={AttendanceStackScreen}  // Attendance Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="database-marker" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsStackScreen}   // Settings Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
            ),
        }}
      />
    </Tab.Navigator>

    )
}