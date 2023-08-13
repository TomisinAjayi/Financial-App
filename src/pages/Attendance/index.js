import React, { useContext, useState, useEffect } from 'react';
import { Background, ButtonText, SubmitButton, DateText, Logo } from './style';
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../../components/DatePicker';

export default function Attendance() {

  const navigation = useNavigation();

  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Background>
        <DatePicker />
          <Logo 
            source={require('../../assets/rccg-logo.png')}
          />

          <SafeAreaView style={{ alignItems: 'center'}}>
            <SubmitButton onPress={ () => navigation.navigate('newAttendance')}>
              <ButtonText>Record New Attendance</ButtonText>
            </SubmitButton>
            <SubmitButton onPress={ () => navigation.navigate('viewAttendance')}>
              <ButtonText>View Attendance</ButtonText>
            </SubmitButton>
          </SafeAreaView>
        </Background>
      </TouchableWithoutFeedback>
    </Background>
  );
}