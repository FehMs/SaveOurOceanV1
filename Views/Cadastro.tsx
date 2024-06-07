import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Card, Provider as PaperProvider} from 'react-native-paper';
import axios from 'axios';
import { BASE_URL } from '../components/config';

const VolunteerSignUp = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [interesseArea, setInteresseArea] = useState('');

  const handleSubmit = () => {
  

    const voluntario = {
      nome,
      email,
      celular,
      interesseArea,
    };

    axios.post(`${BASE_URL}/voluntario`, voluntario)
    .then(() => {
      Alert.alert('Voluntario cadastrado com sucesso');
      setNome('');
      setEmail('');
      setCelular('');
      setInteresseArea('');
      navigation.goBack();
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Erro', 'Todos os campos precisam ser completados');
    });
  };



  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={require("../assets/water.jpg")} style={styles.background}>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Card.Title title="Cadastro de Voluntário" titleStyle={styles.cardTitle} />
              <Card.Content>
                <TextInput
                  label="Nome"
                  value={nome}
                  onChangeText={setNome}
                  style={styles.input}
                />
                <TextInput
                  label="Email"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}

                  keyboardType="email-address"
                />
                <TextInput
                  label="Celular"
                  value={celular}
                  onChangeText={setCelular}
                  style={styles.input}
                />
                <TextInput
                  label="Áreas de Interesse"
                  value={interesseArea}
                  onChangeText={setInteresseArea}
                  style={styles.input}
                  multiline
                />
                <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                  Cadastrar
                </Button>
              </Card.Content>
            </Card>
          </View>
        </ImageBackground>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
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
    marginBottom: 80,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00796b',
    borderRadius: 10,
  },
});

export default VolunteerSignUp;
