import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Alert, ImageBackground } from 'react-native';
import { TextInput, Button, Card, Provider as PaperProvider, Text } from 'react-native-paper';

const ReportForm = ({ navigation }) => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitudeError, setLatitudeError] = useState('');
  const [longitudeError, setLongitudeError] = useState('');

  const isValidCoordinate = (value, type) => {
    if (value.includes(',')) return false;

    const num = parseFloat(value);
    if (isNaN(num)) return false;

    if (type === 'latitude') {
      return num >= -90 && num <= 90;
    } else if (type === 'longitude') {
      return num >= -180 && num <= 180;
    }
    return false;
  };

  const handleSubmit = () => {
    let valid = true;

    if (!isValidCoordinate(latitude, 'latitude')) {
      setLatitudeError('Latitude inválida. Deve estar entre -90 e 90 e usar ponto como separador decimal.');
      valid = false;
    } else {
      setLatitudeError('');
    }

    if (!isValidCoordinate(longitude, 'longitude')) {
      setLongitudeError('Longitude inválida. Deve estar entre -180 e 180 e usar ponto como separador decimal.');
      valid = false;
    } else {
      setLongitudeError('');
    }

    if (!valid) return;

    const poluicao = { tipo, descricao, latitude, longitude };
    
    axios.post('https://apirest-saveourocean-production.up.railway.app/relatos', poluicao)
      .then(() => {
        Alert.alert('Poluição relatada com sucesso');
        setTipo('');
        setDescricao('');
        setLatitude('');
        setLongitude('');
        setLatitudeError('');
        setLongitudeError('');

        navigation.goBack();
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erro', 'Algo deu errado');
      });
  };

  return (
    <PaperProvider>
      <ImageBackground source={require("../assets/water.jpg")} style={styles.background}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Title title="Relatar Poluição" titleStyle={styles.cardTitle} />
            <Card.Content>
              <TextInput
                label="Tipo de Poluição"
                value={tipo}
                onChangeText={setTipo}
                style={styles.input}
              />
              <TextInput
                label="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                style={styles.input}
                multiline
              />
              {latitudeError ? <Text style={styles.errorText}>{latitudeError}</Text> : null}
              <TextInput
                label="Latitude"
                value={latitude}
                onChangeText={setLatitude}
                style={styles.input}
              />
              {longitudeError ? <Text style={styles.errorText}>{longitudeError}</Text> : null}
              <TextInput
                label="Longitude"
                value={longitude}
                onChangeText={setLongitude}
                style={styles.input}
              />
              <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                Enviar Relato
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  card: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    elevation: 5,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00796b',
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ReportForm;
