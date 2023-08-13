import React, { useContext, useState, useEffect } from 'react';
import { Background, Button, ButtonText, DateText, Input, Label, Logo, RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner } from './style'
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../../components/DatePicker';

export default function Finance() {

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