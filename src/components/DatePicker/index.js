import React, { useState } from 'react';
import { Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import {  Container,Header } from './style'
import { Text } from 'react-native';


export default function DatePicker( {  date, onClose, onChange }) {
    const [dateNow, setDateNow ] = useState(new Date(date));
 return (

    <Container>
        { Platform.OS == 'ios' && (
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
        />

    </Container>
    );
}