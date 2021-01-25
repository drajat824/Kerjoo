import React from 'react';
import { StatusBar, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper'

const Absensi = (props) => {

    return (
        <ScrollView>
            <StatusBar/>
            
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Keterangan</DataTable.Title>
                    <DataTable.Title numeric>Jam</DataTable.Title>
                    <DataTable.Title numeric>Lihat</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Masuk</DataTable.Cell>
                    <DataTable.Cell numeric >Jam</DataTable.Cell>
                    <DataTable.Cell numeric onPress={() => props.navigation.push('Location')}>
                        <Text style={styles.maps} >View Map</Text>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Keluar</DataTable.Cell>
                    <DataTable.Cell numeric >Jam</DataTable.Cell>
                    <DataTable.Cell numeric >View Map</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Istirahat</DataTable.Cell>
                    <DataTable.Cell numeric >Jam</DataTable.Cell>
                    <DataTable.Cell numeric >View Map</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Selesai Istirahat</DataTable.Cell>
                    <DataTable.Cell numeric >Jam</DataTable.Cell>
                    <DataTable.Cell numeric >View Map</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Mulai Lembur</DataTable.Cell>
                    <DataTable.Cell numeric >Jam</DataTable.Cell>
                    <DataTable.Cell numeric >View Map</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Selesai Lembur</DataTable.Cell>
                    <DataTable.Cell numeric >Jam</DataTable.Cell>
                    <DataTable.Cell numeric >View Map</DataTable.Cell>
                </DataTable.Row>

            </DataTable>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    maps: {
        color: 'blue'
    }
  });

export default Absensi

