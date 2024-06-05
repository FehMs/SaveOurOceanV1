import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Card, Provider as PaperProvider, Text, Checkbox } from 'react-native-paper';

const VolunteerSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [interests, setInterests] = useState([]);
  const [description, setDescription] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    const volunteerData = {
      name,
      email,
      interests,
      description,
    };

    console.log(volunteerData);
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  };

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(item => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={{ uri: 'https://cdn.discordapp.com/attachments/1004497178712096918/1247078998044049438/paisagem-natural-maritima-com-vista-idilica-da-agua.jpg?ex=665eb852&is=665d66d2&hm=cc9844941f84d067a80d2622a3bb5649af1ee74fe4df05bae3d9d44455637875&' }} // Substitua pela URL da sua imagem
          style={styles.background}
        >
          <View style={styles.container}>
            <Card style={styles.card}>
              <Card.Title title="Cadastro de Voluntário" titleStyle={styles.cardTitle} />
              <Card.Content>
                <TextInput
                  label="Nome"
                  value={name}
                  onChangeText={setName}
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
                <Text style={styles.sectionTitle}>Áreas de Interesse</Text>
                <View style={styles.checkboxContainer}>
                  <Checkbox.Item label="Meio Ambiente" status={interests.includes('Meio Ambiente') ? 'checked' : 'unchecked'} onPress={() => toggleInterest('Meio Ambiente')} />
                  <Checkbox.Item label="Educação" status={interests.includes('Educação') ? 'checked' : 'unchecked'} onPress={() => toggleInterest('Educação')} />
                  <Checkbox.Item label="Saúde" status={interests.includes('Saúde') ? 'checked' : 'unchecked'} onPress={() => toggleInterest('Saúde')} />
                  <Checkbox.Item label="Assistência Social" status={interests.includes('Assistência Social') ? 'checked' : 'unchecked'} onPress={() => toggleInterest('Assistência Social')} />
                </View>
                <TextInput
                  label="Descrição"
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                  multiline
                />
                <Button mode="contained" onPress={handleSignUp} style={styles.button}>
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
