import styled from 'styled-components/native'

// import { Container, Backgroud, Logo, AreaInput, Input} from './style'


export const Backgroud = styled.View`
flex: 1;
background-color: #fff;
`


//tenho que implementar essa sena na minha aplicacao
export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`
export const Logo = styled.Image`
margin-bottom: 15px;
height: 200px;
width: 200px;
`

export const AreaInput = styled.View`
flex-direction: row;
`


export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
background-color: rgba(0,0,0,0.50);
width: 90%;
font-size: 17px;
color: #FFF;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;
`
export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #291671;
width: 90%;
height: 45px;
border-radius: 7px;
margin-top: 10px;
`
export const SubmitText = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff;
`
export const Link = styled.TouchableOpacity`
margin-top: 5px;
margin-bottom: 9px;
`
export const LinkText = styled.Text`
color: #FFF;
`
