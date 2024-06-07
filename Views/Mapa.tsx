import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { BASE_URL } from '../components/config';

const Mapa = ({ navigation }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/relatos`);
        
        setReports(Array.isArray(response.data.content) ? response.data.content : response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -22.9370134,
          longitude: -43.1705389,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {reports.map((report) => (
          <Marker
          key={report.id}
          coordinate={{ latitude: parseFloat(report.latitude), longitude: parseFloat(report.longitude) }}
          title={report.tipo}
          description={report.descricao}
        />
        ))}
      </MapView>
    </View>
  );
};

export default Mapa;
