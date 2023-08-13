import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { BottomNavigationViewStyle, BottomSheetHead, BottomSheetHeadText, ClearBtn, Container, Inner, Outer, Radio, RadioButtonGroup, RadioText, RadioWrapper} from './style'
import { Pressable, Text, TouchableWithoutFeedback, View } from 'react-native'
import { BottomSheet } from 'react-native-btr';


export default function RadioButton({ visible, onBackButtonPress, onBackdropPress, onPress, title, options, setOptions, nameOfField}) {

    return (

    <TouchableWithoutFeedback>
        
        <BottomSheet
            visible={visible}
            //Toggling the visibility state on the click of the back button
            onBackButtonPress={onBackButtonPress}
            //Toggling the visibility state on the clicking out side of the sheet
            onBackdropPress={onBackdropPress}
            >
                <BottomNavigationViewStyle>
                    <View
                    style={{
                        // flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <BottomSheetHead>
                            <Pressable onPress={onPress}>
                                <ClearBtn>X</ClearBtn>
                            </Pressable>
                            <BottomSheetHeadText>{title}</BottomSheetHeadText>
                        </BottomSheetHead>
                        {/* //radio buttons here  */}
                        <RadioButtonGroup>
                            {
                                options.map(list => (
                                    <RadioWrapper key={list}>
                                        <Text>{list}</Text>
                                        <Outer onPress={
                                            () => {
                                                setOptions(list); 
                                                setTimeout(() => {
                                                    onPress();
                                                }, 500);
                                            }
                                            }>
                                            {nameOfField === list && <Inner />}
                                        </Outer>
                                    </RadioWrapper>
                                ))
                            }
                        </RadioButtonGroup>
                    </View>
                </BottomNavigationViewStyle>
            </BottomSheet>
    </TouchableWithoutFeedback>
    );
}