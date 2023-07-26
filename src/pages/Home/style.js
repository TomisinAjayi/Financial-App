import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
padding-top: 10%;
background: #fff;
` 

export const Container = styled.View`
margin-left: 15px;
margin-bottom: 25px;
` 

export const Nome = styled.Text`
font-size: 18px;
color: #000;
font-style: italic;
font-weight: bold;
margin-bottom: 10px;
` 

export const Saldo = styled.Text`
margin-top: 5px;
font-size: 30px;
color: #FFF;
font-weight: bold;
` 

export const Title = styled.Text`
margin-left: 5px;
color: #00b94a;
margin-bottom: 10px;
` 

export const List = styled.FlatList.attrs({
    marginHorizotal:15
})`
padding-top: 15px;
background-color: #FFF;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 8px;
margin-right: 8px;
` 


export  const Area = styled.View`
flex-direction: row;
margin-left: 15px;
align-items: baseline;
`

export const Logout = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #c62c36;
width: 90%;
height: 45px;
border-radius: 10px;
margin-bottom: 10px;
`
export const LogoutText = styled.Text`
font-size: 18px;
color: #FFF;
font-weight: bold;
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