import Axios from 'axios';
import qs from 'qs';
import { ToastAndroid } from 'react-native';

//Login
const AuthLoginRequest = ()=> {
    return {
        type: 'LOGIN_REQUEST'
    }
}

const AuthLoginSuccess = (data)=> {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}

const AuthLoginError = (error)=> {
    return {
        type: 'LOGIN_ERROR',
        payload: error
    }
}

export const AuthLogout = () => {
    return {
      type: 'LOGOUT',
    };
  };

export const AuthLogin = (fields, navigation) => {

    var bodyFormData = new FormData();
    bodyFormData.append('email', fields.email);
    bodyFormData.append('password', fields.password);

    return(dispatch) => {
        return Axios({
            method: 'post',
            data: bodyFormData,
            url: `https://apitest.kerjoo.com/api/v1/auth`,
            headers: {
                'Content-Type': 'multipart/form-data'
              },
        })
        .then((res)=> {
            dispatch(AuthLoginSuccess(res))
            navigation.push('Dashboard')
        })
        .catch((err)=> {
            ToastAndroid.show('Login Error', ToastAndroid.SHORT);
            console.log(err)
        })
    }
}