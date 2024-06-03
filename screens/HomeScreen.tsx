import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const HomeScreen = ({ navigation }) => {

    const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulação de dados de relatórios
    const sampleReports = [
      {
        id: 1,
        type: 'Derramamento de óleo',
        description: 'Grande derramamento de óleo no mar',
        latitude: -15.7890,
        longitude: -47.8222,
      },
      {
        id: 2,
        type: 'Derramamento de óleo',
        description: 'Muitos plásticos na água',
        latitude: -15.7710,
        longitude: -47.8472,
      },
      {
        id: 3,
        type: 'Plásticos',
        description: 'Muitos plásticos na praia',
        latitude: -22.9016,
        longitude: -43.1729,
      },
      {
        id: 4,
        type: 'Óleo na água',
        description: 'Navio derrubando óleo no mar',
        latitude: -22.8629,
        longitude: -43.1729,
      },
    ];
    setReports(sampleReports);
  }, []);

  return (
    <View>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: -22.9068,
        longitude: -43.1729,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {reports.map((report) => (
        <Marker key={report.id} coordinate={{ latitude: report.latitude, longitude: report.longitude }} title={report.type} description={report.description}>
        </Marker>
      ))}
        </MapView>
        <TouchableOpacity style={styles.ButtonReport} onPress={() => navigation.navigate('Report')}>
            <Text>Reportar Poluição</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    map: {
        height: 790,
    },
    ButtonReport: {
      width: 150,
      height: 50,
      backgroundColor: '#0087FF',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 30,
      alignSelf: 'center',

    },
    markerContainer: {
      height: 50,
      width: 100,
      backgroundColor: '#ccc',
      borderRadius: 20,
      padding: 10,
      
    },
  });

export default HomeScreen;
