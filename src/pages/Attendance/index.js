import React, { useContext, useState, useEffect } from 'react';
import { Background, ButtonText, SubmitButton } from './style';
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Attendance() {

  // Get the current date
  const navigation = useNavigation();
  // Format the date to display in a user-friendly format

  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

          <SafeAreaView style={{ alignItems: 'center'}}>
            <SubmitButton onPress={ () => navigation.navigate('newAttendance')}>
              <ButtonText>Record New Attendance</ButtonText>
            </SubmitButton>
            <SubmitButton onPress={ () => navigation.navigate('viewAttendance')}>
              <ButtonText>View Attendance</ButtonText>
            </SubmitButton>
          </SafeAreaView>
      </TouchableWithoutFeedback>
    </Background>
  );
}