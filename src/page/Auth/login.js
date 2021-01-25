import React from 'react';
import { View, StatusBar } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AuthLogin} from './../../redux/actions/auth'

const Login = (props) => {

    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const dispatch = useDispatch()

    function onSubmit(){
        dispatch(
            AuthLogin({
                email: email,
                password: password
            }, props.navigation)
        ), console.log(password)
    }
    

    return (
        <View>
            <StatusBar/>
            <View>
            <TextInput label="Email" value={email} onChangeText={text => setEmail(text)}/>
            <TextInput label="Password" value={password} onChangeText={text => setPassword(text)}/>
            <Button mode='contained' onPress={() => onSubmit()} > Login </Button>
            </View>
        </View>
    )
}

export default Login