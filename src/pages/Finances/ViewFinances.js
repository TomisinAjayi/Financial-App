import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth'
import { Background, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner } from './style'
import Header from '../../components/Header/index'
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns';
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import RadioButton from '../../components/RadioButton';
import { BottomSheet } from 'react-native-btr';

const services = ['First Service', 'Second Service', 'Sunday School'];
const firstservice = ['Sunday Love Offering', 'Minister Tithe', 'General Tithe', 'Workers Offering 1', 'Special Thanksgiving', 'Monthly Thanksgiving 1', 'Pledge', 'First Fruit', 'Child Dedication', 'Others'];
const secondservice = ['Sunday Love Offering', 'Second Service', 'Sunday School'];

export default function ViewFinance() {

  

  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Background>

            <SafeAreaView>
              <Text>View Finances Here</Text>
            </SafeAreaView>
          </Background>
      </TouchableWithoutFeedback>

    </Background>
  );
}