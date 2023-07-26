import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { BottomNavigationViewStyle, BottomSheetHead, BottomSheetHeadText, Container, Inner, Outer, Radio, RadioButtonGroup, RadioText, RadioWrapper} from './style'
import { TouchableWithoutFeedback, View } from 'react-native'


export default function RadioButton() {

    // const [chosenOption, setChosenOption] = useState(null);

    // const handleOptionPress = (option) => {
    //     setService(service);
    // };

    

    return (

    <TouchableWithoutFeedback>
        <Container>
        
            {/* {options.map((option) => (
                option !== selectedOption && (
                <Radio
                    key={option}
                    onPress={() => handleOptionPress(option)}
                >
                    <RadioText>{option}</RadioText>
                </Radio>
                )
            ))} */}

        </Container>
    </TouchableWithoutFeedback>
    );
}