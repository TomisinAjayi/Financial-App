import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth'
import { Background, Box, SmallBox, Header, FlexBox, BoxText, FlexChart, FlexItem, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner } from './style'
import { Alert,Keyboard,Platform,Pressable,SafeAreaView,ActivityIndicator, Text,TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Chart from '../../components/Chart';
import CurvedChart from '../../components/Chart/CurvedChart';

export default function ViewFinance() {

  const data = {
    labels: ["Cash", "Cheque", "Bank Transfer"], // optional
    data: [1.0, 0.6, 0.4]
  };
  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Background>
            
            <SafeAreaView>
              <Header>Finances Report</Header>
              <Box>
                <BoxText>Type of Service</BoxText>
                <BoxText>Service Event</BoxText>
                <FlexBox>
                  <Chart data={data} />
                </FlexBox>
              </Box>
            </SafeAreaView>
          </Background>
      </TouchableWithoutFeedback>

    </Background>
  );
}
