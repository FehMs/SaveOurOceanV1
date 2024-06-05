import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Alert, ImageBackground } from 'react-native';
import { Text, TextInput, Button, Card, Provider as PaperProvider } from 'react-native-paper';

const ReportForm = ({ navigation }) => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = () => {
    const poluicao = { tipo, descricao, latitude, longitude };
    
    axios.post('http://10.0.2.2:8080/relatos', poluicao)
      .then(() => {
        Alert.alert('Poluição relatada com sucesso');
        setTipo('');
        setDescricao('');
        setLatitude('');
        setLongitude('');

        navigation.goBack();
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Algo deu errado');
      });
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={{ uri: 'https://cdn.discordapp.com/attachments/1004497178712096918/1247078998044049438/paisagem-natural-maritima-com-vista-idilica-da-agua.jpg?ex=665eb852&is=665d66d2&hm=cc9844941f84d067a80d2622a3bb5649af1ee74fe4df05bae3d9d44455637875&' }} // Substitua pela URL da sua imagem
        style={styles.background}
      >
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
              <TextInput
                label="Latitude"
                value={latitude}
                onChangeText={setLatitude}
                style={styles.input}
              />
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
});

export default ReportForm;
