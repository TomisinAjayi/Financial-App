import React, { useContext, useState, useEffect } from 'react';
import { Background, Button, ButtonText, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner } from './style'
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Finance() {

  // Get the current date
  const navigation = useNavigation();
  // Format the date to display in a user-friendly format

  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Background>

          <SafeAreaView style={{ alignItems: 'center'}}>
            <SubmitButton onPress={ () => navigation.navigate('newFinance')}>
              <ButtonText>Record New Finances</ButtonText>
            </SubmitButton>
            <SubmitButton onPress={ () => navigation.navigate('viewFinance')}>
              <ButtonText>View Finances</ButtonText>
            </SubmitButton>
          </SafeAreaView>
        </Background>
      </TouchableWithoutFeedback>
    </Background>
  );
}