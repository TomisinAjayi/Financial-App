import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

` 

export const Radio = styled.TouchableOpacity`
padding-vertical: 8;
padding-horizontal: 12;
background-color: #f0f0f0,
margin-vertical: 5;
border-radius: 5,
` 
export const RadioText = styled.Text`
font-size: 16px;
color: #black;
font-style: italic;
margin-bottom: 10px;
` 
export const BottomNavigationViewStyle = styled.View`
background-color: #fff;
width: 100%;
height: 366px;
border-top-right-radius: 32px;
border-top-left-radius: 32px;
border-color: rgba(0, 0, 0, 0.15);
border-width: 1px;
`

export const BottomSheetHead = styled.View`
display: flex;
flex-direction: row;
padding: 0px 216px 10ppx 32px;
height: 34px;
top: 26px;
margin-top: 26px;
border-bottom-color: rgba(0, 0, 0, 0.15);
border-bottom-width: 1px;
`

export const BottomSheetHeadText = styled.Text`
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0.005;
color: rgba(0, 0, 0, 0.85);
` 

export const ClearBtn = styled.Text`
margin-right: 28px;
width: 24px;
height: 24px;
font-size: 16px;
` 
 
export const RadioButtonGroup = styled.View`
margin: 55px 34px 106px 32px;
`

export const RadioWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
border-bottom-color: rgba(0, 0, 0, 0.06);
border-botom-width: 1px;
padding-top: 10px;
padding-bottom: 10px;
`

export const Outer = styled.TouchableOpacity`
width: 25px;
height: 25px;
border-width: 1px;
border-radius: 15px;
justify-content: center;
align-items: center;
border-color: rgba(0, 0, 0, 0.45);
`

export const Inner = styled.View`
width: 15px;
height: 15px;
background-color: rgba(82, 196, 26, 1);
border-radius: 10px
`