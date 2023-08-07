import React, { useContext, useState, useEffect } from 'react';
import { Background, DateText, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner, Header } from './style'
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TouchableWithoutFeedback, View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';

const services = ['First Service', 'Second Service', 'Sunday School', 'Workers Offering 1'];
const firstservice = ['Sunday Love Offering1', 'Minister Tithe', 'General Tithe', 'Special Thanksgiving', 'Monthly Thanksgiving 1', 'Pledge', 'First Fruit', 'Child Dedication', 'Others'];
const secondservice = ['Sunday Love Offering', 'Minister Tithe', 'General Tithe', 'Special Thanksgiving', 'Monthly Thanksgiving 1', 'Pledge', 'First Fruit', 'Child Dedication', 'Others'];

export default function NewFinance() {
  const navigation = useNavigation();
  // Get the current date
  const currentDate = new Date();
  // Format the date to display in a user-friendly format
  const formattedDate = currentDate.toDateString();

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
                <Header>Record New Finance</Header>
                <DateText>{formattedDate}</DateText>
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
                <SubmitButton style={{ marginLeft: '5%'}} onPress={handleSubmit}>
                  <SubmitText>Record</SubmitText>
                </SubmitButton>

                  
                  <BottomSheet
                    visible={visibleFirst}
                    //Toggling the visibility state on the click of the back button
                    onBackButtonPress={toggleBottomNavigationViewFirst}
                    //Toggling the visibility state on the clicking out side of the sheet
                    onBackdropPress={toggleBottomNavigationViewFirst}
                  >
                    <BottomNavigationViewStyle>
                        <View
                        style={{
                            // flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <BottomSheetHead>
                                <Pressable onPress={toggleBottomNavigationViewFirst}>
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
                                                    toggleBottomNavigationViewFirst();
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