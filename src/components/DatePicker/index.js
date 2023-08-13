import React, { useState } from 'react';
import { Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import {  Container,DateText,Header } from './style'
import { Text } from 'react-native';


export default function DatePicker() {
   
  // Get the current date
  const currentDate = new Date();
  // Format the date to display in a user-friendly format
  const formattedDate = currentDate.toDateString();
 return (

    <Container>
        <DateText>{formattedDate}</DateText>
        {/* { Platform.OS == 'ios' && (
            <Header>
                <TouchableOpacity onPress={ onClose }>
                    <Text>Close</Text>
                </TouchableOpacity>
            </Header>
        )}
        
        <DateTimePicker
        value={ dateNow }
        mode='date'
        display='default'
        onChange={ (e, d) =>  {
            const currentDate = d || dateNow
            setDateNow(currentDate);
            onChange(currentDate)
        }}


        style={{ backgroundColor: 'white'}}
        /> */}

    </Container>
    );
}