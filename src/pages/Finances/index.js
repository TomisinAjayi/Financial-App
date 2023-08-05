import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth'
import { Background, Button, ButtonText, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner } from './style'
import Header from '../../components/Header/index'
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns';
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import RadioButton from '../../components/RadioButton';
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';

const services = ['First Service', 'Second Service', 'Sunday School'];
const firstservice = ['Sunday Love Offering', 'Minister Tithe', 'General Tithe', 'Workers Offering 1', 'Special Thanksgiving', 'Monthly Thanksgiving 1', 'Pledge', 'First Fruit', 'Child Dedication', 'Others'];
const secondservice = ['Sunday Love Offering', 'Second Service', 'Sunday School'];

export default function Finance() {

  // Get the current date
  const currentDate = new Date();
  const navigation = useNavigation();
  // Format the date to display in a user-friendly format
  const formattedDate = currentDate.toDateString();

  const [service, setService] = useState("Service");
  const [event, setEvent] = useState("Select Event");
  const [event2, setEvent2] = useState("Select Event");
  const [visible, setVisible] = useState(false);
  const [visibleEvent, setVisibleEvent] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const toggleBottomNavigationViewEvent = () => {
    setVisibleEvent(!visibleEvent);
  };

  const handleSubmit = () => {

  }

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