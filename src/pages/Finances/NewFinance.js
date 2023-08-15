import React, { useContext, useState, useEffect } from 'react';
import { Background, DateText, Input, Label,RadioLabel, RadioText, RadioField, RadioInput, SubmitButton, SubmitText, BottomNavigationViewStyle, BottomSheetHead, ClearBtn, BottomSheetHeadText, RadioButtonGroup, RadioWrapper, Outer, Inner, Header } from './style'
import { Alert,Keyboard,Platform,Pressable,SafeAreaView, Text,TextInput,TouchableWithoutFeedback, View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';
import RadioButton from '../../components/RadioButton';
import axios from 'axios';
import DatePicker from '../../components/DatePicker';

const services = ['First Service', 'Second Service', 'Sunday School', 'Workers Offering 1'];
const firstservice = ['Sunday Love Offering1', 'Minister Tithe', 'General Tithe', 'Special Thanksgiving', 'Monthly Thanksgiving 1', 'Pledge', 'First Fruit', 'Child Dedication', 'Others'];
const secondservice = ['Sunday Love Offering', 'Minister Tithe', 'General Tithe', 'Special Thanksgiving', 'Monthly Thanksgiving 1', 'Pledge', 'First Fruit', 'Child Dedication', 'Others'];

export default function NewFinance() {
  const navigation = useNavigation();

  const [cash, setCash] = useState(0);
  const [cheque, setCheque] = useState(0);
  const [bankTransfer, setBankTransfer] = useState(0);
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

  const [financeRecorded, setFinanceRecorded] = useState({
    cash: 0,
    cheque: 0,
    bankTf: 0,
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFinanceRecorded(financeRecorded => ({
        ...financeRecorded,
        [name]: value
    }));
    console.log(`handle change result` + financeRecorded);
};

useEffect(() => {
  console.log(cash + " " + cheque + " " + bankTransfer);
  // console.log(financeRecorded.cash);
}, []);

  const showError = () => {
    console.log("Service: " + service + ", Event: " + event + ", cash: " + cash + ", Cheque: " + cheque + ", Bank Transfer: " + bankTransfer);
    Alert.alert(
      'Are all fields filled?',
      ' ',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  const handleSubmit = async () => {
    if(service === "") {
      showError();
    } else {
      console.log(cash + " " + cheque + " " + bankTransfer);
      console.log("Service: " + service + ", Event: " + event + ", cash: " + cash + ", Cheque: " + cheque + ", Bank Transfer: " + bankTransfer);
      try {
        const response = await axios.post(`http://localhost:3000/api/finances/add`, 
          {
            event: event,
            service: service,
            cash: cash,
            cheque: cheque,
            bankTf: bankTransfer,
          },
        {   
        headers: {
          "Content-Type": "application/json"
        }
        });
        if(response.status === 201) {
          navigation.navigate('viewFinance');
        } else {
          console.log("finances not sent to db");
        }
      } catch(error) {
        console.log(error);
        console.log("finances not sent to api");
      }
      
    }
  }

  return (

    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Background>

              <SafeAreaView>
                <Header>Record New Finance</Header>
                <DatePicker />
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
                <TextInput
                  placeholder="Cash"
                  keyboardType="numeric"
                  defaultValue={cash}
                  onChangeText={(e) => setCash(e)}
                  // onSubmitEditing={() => Keyboard.dismiss()}
                  // valor={valor}
                  // onChangeText={(text) => setValor(text)}
                />
                <Label>Enter Total Cheque Collected:</Label>
                <TextInput
                  placeholder="Cheque"
                  keyboardType="numeric"
                  defaultValue={cheque}
                  onChangeText={(e) => setCheque(e)}
                  // onSubmitEditing={() => Keyboard.dismiss()}
                  // valor={valor}
                  // onChangeText={(text) => setValor(text)}
                />
                <Label>Enter Total Bank Transfer:</Label>
                <TextInput
                  placeholder="Bank Transfer"
                  keyboardType="numeric"
                  defaultValue={bankTransfer}
                  onChangeText={(e) => setBankTransfer(e)}
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