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

export default function NewAttendance() {

  // Get the current date
  const currentDate = new Date();
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

              <SafeAreaView>
                {/* <Picker onChange={setTipo} tipo={tipo} /> */}
                <Label>Date: {formattedDate}</Label>
                {/* <Text>{selectedDate.toDateString()}</Text>
                <DatePickerIOS
                  date={selectedDate}
                  onDateChange={handleDateChange}
                  mode="date"
                /> */}
                <RadioLabel>Type of Service:</RadioLabel>
                <RadioField onPress={toggleBottomNavigationView}>
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
                {
                  service === "Sunday School" ? 
                  null
                  : 
                  null
                }
                <Label>Enter Total Cash Counted:</Label>
                <Input
                    placeholder="Cash"
                    keyboardType="numeric"
                    returnKeyType="next"
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    // valor={valor}
                    // onChangeText={(text) => setValor(text)}
                />
                <Label>Enter Total Cheque Collected:</Label>
                <Input
                    placeholder="Cheque"
                    keyboardType="numeric"
                    returnKeyType="next"
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    // valor={valor}
                    // onChangeText={(text) => setValor(text)}
                />
                <Label>Enter Total Bank Transfer:</Label>
                <Input
                    placeholder="Bank Transfer"
                    keyboardType="numeric"
                    returnKeyType="next"
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    // valor={valor}
                    // onChangeText={(text) => setValor(text)}
                />
                <SubmitButton onPress={handleSubmit}>
                  <SubmitText>Submit</SubmitText>
                </SubmitButton>

                  
                  <BottomSheet
                    visible={visible}
                    //Toggling the visibility state on the click of the back button
                    onBackButtonPress={toggleBottomNavigationView}
                    //Toggling the visibility state on the clicking out side of the sheet
                    onBackdropPress={toggleBottomNavigationView}
                  >
                    <BottomNavigationViewStyle>
                        <View
                        style={{
                            // flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <BottomSheetHead>
                                <Pressable onPress={toggleBottomNavigationView}>
                                    <ClearBtn>X</ClearBtn>
                                </Pressable>
                                <BottomSheetHeadText>Services</BottomSheetHeadText>
                            </BottomSheetHead>
                            {/* //radio buttons here  */}
                            <RadioButtonGroup>
                                {
                                  services.map(list => (
                                      <RadioWrapper key={list}>
                                          <Text>{list}</Text>
                                          <Outer onPress={
                                              () => {
                                                  setService(list); 
                                                  setTimeout(() => {
                                                      toggleBottomNavigationView();
                                                  }, 500);
                                              }
                                              }>
                                              {service === list && <Inner />}
                                          </Outer>
                                      </RadioWrapper>
                                 ))
                                }
                            </RadioButtonGroup>
                        </View>
                    </BottomNavigationViewStyle>
                  </BottomSheet>

                  {
                    service === "First Service" ? 
                    <BottomSheet
                    visible={visibleEvent}
                    //Toggling the visibility state on the click of the back button
                    onBackButtonPress={toggleBottomNavigationViewEvent}
                    //Toggling the visibility state on the clicking out side of the sheet
                    onBackdropPress={toggleBottomNavigationViewEvent}
                  >
                    <BottomNavigationViewStyle>
                        <View
                        style={{
                            // flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <BottomSheetHead>
                                <Pressable onPress={toggleBottomNavigationViewEvent}>
                                    <ClearBtn>X</ClearBtn>
                                </Pressable>
                                <BottomSheetHeadText>Event</BottomSheetHeadText>
                            </BottomSheetHead>
                            {/* //radio buttons here  */}
                            <RadioButtonGroup>
                                {
                                  firstservice.map(list => (
                                      <RadioWrapper key={list}>
                                          <Text>{list}</Text>
                                          <Outer onPress={
                                              () => {
                                                  setEvent(list); 
                                                  setTimeout(() => {
                                                    toggleBottomNavigationViewEvent();
                                                  }, 500);
                                              }
                                              }>
                                              {event === list && <Inner />}
                                          </Outer>
                                      </RadioWrapper>
                                 ))
                                }
                            </RadioButtonGroup>
                        </View>
                    </BottomNavigationViewStyle>
                    </BottomSheet>
                  : 
                  null
                  }
                  {
                    service === "Second Service" ? 
                    <BottomSheet
                    visible={visible}
                    //Toggling the visibility state on the click of the back button
                    onBackButtonPress={toggleBottomNavigationView}
                    //Toggling the visibility state on the clicking out side of the sheet
                    onBackdropPress={toggleBottomNavigationView}
                  >
                    <BottomNavigationViewStyle>
                        <View
                        style={{
                            // flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <BottomSheetHead>
                                <Pressable onPress={toggleBottomNavigationView}>
                                    <ClearBtn>X</ClearBtn>
                                </Pressable>
                                <BottomSheetHeadText>Event</BottomSheetHeadText>
                            </BottomSheetHead>
                            {/* //radio buttons here  */}
                            <RadioButtonGroup>
                                {
                                  secondservice.map(list => (
                                      <RadioWrapper key={list}>
                                          <Text>{list}</Text>
                                          <Outer onPress={
                                              () => {
                                                  setEvent2(list); 
                                                  setTimeout(() => {
                                                      toggleBottomNavigationView();
                                                  }, 500);
                                              }
                                              }>
                                              {event2 === list && <Inner />}
                                          </Outer>
                                      </RadioWrapper>
                                 ))
                                }
                            </RadioButtonGroup>
                        </View>
                    </BottomNavigationViewStyle>
                    </BottomSheet>
                  : 
                  null
                  }
              </SafeAreaView>
          </Background>
      </TouchableWithoutFeedback>

    </Background>
  );
}