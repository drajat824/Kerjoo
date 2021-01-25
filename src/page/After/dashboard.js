import React from 'react';
import { View, StatusBar, StyleSheet, PermissionsAndroid } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-paper'
import Geolocation from '@react-native-community/geolocation';
import {AuthLogout} from './../../redux/actions/auth'
import {useDispatch} from 'react-redux';

const Dashboard = (props) => {
    const dispatch = useDispatch()

    const [
        currentLongitude,
        setCurrentLongitude
      ] = React.useState('...');
      const [
        currentLatitude,
        setCurrentLatitude
      ] = React.useState('...');
      const [
        locationStatus,
        setLocationStatus
      ] = React.useState('...');

      React.useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);

      const getOneTimeLocation = async () => {
        await setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('You are Here');
    
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };
    
      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
            console.log(position);
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };

      function onLogout(){
        dispatch(AuthLogout())

    }

    return (
        <ScrollView>
            <StatusBar/>

        <View style={styles.container} >
            <View style={styles.button} >
                <Button onPress={() => getOneTimeLocation()} mode='contained' >
                    Absen Masuk
                </Button>
            </View>

            {/* <View style={styles.button} >
                <Button mode='contained' >
                    Absen Keluar
                </Button>
            </View>

            <View style={styles.button} >
                <Button mode='contained' >
                    Absen Istirahat
                </Button>
            </View>

            <View style={styles.button} >
                <Button mode='contained' >
                    Absen Selesai Istirahat
                </Button>
            </View>

            <View style={styles.button} >
                <Button mode='contained' >
                    Absen Mulai Lembur
                </Button>
            </View>


            <View style={styles.button} >
                <Button mode='contained' >
                    Absen Selesai Lembur
                </Button>
            </View> */}

            <View style={styles.button} >
                <Button onPress={() => props.navigation.push('Absensi')} mode='contained' style={styles.absensi} >
                    Lihat Absensi
                </Button>
            </View> 

            <View style={styles.button} >
                <Button onPress={() => onLogout()} mode='contained' style={styles.logout} >
                    Logout
                </Button>
            </View>

        </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 25,
        width: '80%',
        alignSelf: 'center'
    },
    container: {
        paddingVertical: 10,
    },
    absensi: {
        backgroundColor: 'green'
    },
    logout: {
        backgroundColor: 'red'
    }
  });

export default Dashboard

