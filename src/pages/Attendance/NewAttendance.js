import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth'
import { Background, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner, Header, DateText } from './style'
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns';
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import RadioButton from '../../components/RadioButton';
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../../components/DatePicker';

const services = ['First Service', 'Second Service', 'Sunday School', 'Tuesday Evening', 'Thursday Morning', 'Thursday Evening'];
const firstservice = ['SUNDAY ATTENDANCE1', 'FIRST TIMER', 'NEW CONVERT'];
const secondservice = ['SUNDAY ATTENDANCE', 'FIRST TIMER', 'NEW CONVERT'];

export default function NewAttendance() {
  const navigation = useNavigation();

  const [service, setService] = useState("Service");
  const [event, setEvent] = useState("Select Event");
  const [event2, setEvent2] = useState("Select Event");
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleEvent, setVisibleEvent] = useState(false);

  const toggleBottomNavigationViewFirst = () => {
    setVisibleFirst(!visibleFirst);
  };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const toggleBottomNavigationViewEvent = () => {
    setVisibleEvent(!visibleEvent);
  };

  const handleSubmit = () => {
    navigation.navigate('viewFinance');
  }

  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Background>

              <SafeAreaView>
                {/* <Picker onChange={setTipo} tipo={tipo} /> */}
                <Header>Record New Attendance</Header>
                <DatePicker />
                {/* <Text>{selectedDate.toDateString()}</Text>
                <DatePickerIOS
                  date={selectedDate}
                  onDateChange={handleDateChange}
                  mode="date"
                /> */}
                <RadioLabel>Type of Service</RadioLabel>
                <RadioField onPress={toggleBottomNavigationViewFirst}>
                  <RadioText>{service}</RadioText>
                </RadioField>
                {
                  service === "First Service" ? 
                  <>
                    <RadioLabel>Service Event</RadioLabel>
                    <RadioField onPress={toggleBottomNavigationViewEvent}>
                      <RadioText>{event}</RadioText>
                    </RadioField>
                  </> 
                  : 
                  null
                }
                {
                  service === "Second Service" ? 
                  <>
                    <RadioLabel>Service Event</RadioLabel>
                    <RadioField onPress={toggleBottomNavigationView}>
                      <RadioText>{event2}</RadioText>
                    </RadioField>
                  </> 
                  : 
                  null
                }

                <Label>Total Number of Men:</Label>
                <Input
                    placeholder="Men"
                    keyboardType="default"
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    // valor={valor}
                    // onChangeText={(text) => setValor(text)}
                />
                <Label>Total Number of Women:</Label>
                <Input
                    placeholder="Women"
                    keyboardType="default"
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    // valor={valor}
                    // onChangeText={(text) => setValor(text)}
                />
                <Label>Total Number of Children:</Label>
                <Input
                    placeholder="Children"
                    keyboardType="default"
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    // valor={valor}
                    // onChangeText={(text) => setValor(text)}
                />
                <SubmitButton style={{ marginLeft: '5%'}} onPress={handleSubmit}>
                  <SubmitText>Record</SubmitText>
                </SubmitButton>

                  
                  <RadioButton 
                    visible={visibleFirst}
                    onBackButtonPress={toggleBottomNavigationViewFirst}
                    onBackdropPress={toggleBottomNavigationViewFirst}
                    onPress={toggleBottomNavigationViewFirst}
                    title={'Services'}
                    options={services}
                    setOptions={setService}
                    nameOfField={service}
                  />

                  {
                    service === "First Service" ? 
                    <RadioButton 
                      visible={visibleEvent}
                      onBackButtonPress={toggleBottomNavigationViewEvent}
                      onBackdropPress={toggleBottomNavigationViewEvent}
                      onPress={toggleBottomNavigationViewEvent}
                      title={'Event'}
                      options={firstservice}
                      setOptions={setEvent}
                      nameOfField={event}
                    />
                  : 
                  null
                  }
                  {
                    service === "Second Service" ? 
                    <RadioButton 
                      visible={visible}
                      onBackButtonPress={toggleBottomNavigationView}
                      onBackdropPress={toggleBottomNavigationView}
                      onPress={toggleBottomNavigationView}
                      title={'Event'}
                      options={secondservice}
                      setOptions={setEvent2}
                      nameOfField={event2}
                    />
                  : 
                  null
                  }
              </SafeAreaView>
          </Background>
      </TouchableWithoutFeedback>

    </Background>
  );
}