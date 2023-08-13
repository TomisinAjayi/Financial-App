import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background: white;
` 
export const Box = styled.View`
background: gray;
width: 90%;
margin: 0 auto;
display: flex;
border-radius: 10px;
padding: 10px;
`

export const BoxText = styled.Text`
font-size: 18px;
color: #fff;
font-weight: bold;
margin-bottom: 10px;
`

export const SmallBox = styled.View`
width: 18px;
height: 18px;
`

export const FlexBox = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const FlexItem = styled.Text`
font-size: 18px;
color: #fff;
font-weight: bold;
margin-bottom: 10px;
`

export const FlexChart = styled.View`
border-width: 10px;
border-top-color: #f5f5f5;
border-right-color: #f5f5f5;
border-bottom-color: #f5f5f5;
justify-content: center;
align-items: center;
`

export const DateText = styled.Text`
font-size: 18px;
color: #000;
font-weight: bold;
text-align: right;
width: 90%;
margin: 5% auto;
font-style: italic;
`

export const Logo = styled.Image`
width: 30%;
height: 200px;
resize-mode: contain;
margin: 40% auto 0;
`

export const Container = styled.View`
margin-left: 15px;
margin-bottom: 25px;
` 

export const Button = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: blue;
width: 90%;
height: 45px;
border-radius: 10px;
margin-bottom: 10px;
`
export const ButtonText = styled.Text`
font-size: 18px;
color: #FFF;
font-weight: bold;
`
export const Header = styled.Text`
font-size: 18px;
color: #000;
font-weight: bold;
text-align: center;
margin-top: 5%;
margin-bottom: 5%;
`

export const Label = styled.Text`
font-size: 18px;
color: #000;
font-weight: bold;
margin-top: 10px;
margin-left: 5%;
`

export const RadioLabel = styled.Text`
font-size: 18px;
color: #000;
font-weight: bold;
margin-top: 10px;
margin-left: 5%;
`

export const RadioField =  styled.TouchableOpacity`
height: 50px;
width: 90%;
background-color: rgba(225,225,255,0.8);
margin-top: 10px;
font-size: 16px;
margin-left: 5%;
` 
export const RadioText = styled.Text`
font-size: 16px;
font-weight: 400;
color: #000;
margin-top: 15px;
`

export const Input =  styled.TextInput.attrs({
    placheolderTextColor: '#222'
})`
height: 50px;
width: 90%;
background-color: rgba(225,225,255,0.8);
margin-top: 10px;
font-size: 16px;
margin-left: 5%;
` 

export const SubmitButton =  styled.TouchableOpacity`
height: 50px;
width: 90%;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color: #d9251b;
border-radius: 10px;
` 

export const SubmitText =  styled.Text`
font-size: 20px;
font-weight: bold;
color: #FFF;
` 

export const Radio = styled.TouchableOpacity`
padding-vertical: 8;
padding-horizontal: 12;
background-color: #f0f0f0,
margin-vertical: 5;
border-radius: 5,
` 
export const BottomNavigationViewStyle = styled.ScrollView`
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
padding-top: 0px;
padding-right: 216px;
padding-bottom: 10px;
padding-left: 32px
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