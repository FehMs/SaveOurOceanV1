import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ReportForm = () => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');

  const handleSubmit = () => {
    const report = {
      type,
      description,
      date: new Date(),
    };

    console.log(report);
    Alert.alert('Sucesso', 'Relato enviado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Relatar Poluição</Text>
      <Text>Tipo de Poluição:</Text>
      <TextInput style={styles.input} value={type} onChangeText={setType} />
      <Text>Descrição:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <Text>Latitude:</Text>
      <TextInput style={styles.input} value={cep} onChangeText={setCep} />
      <Text>Longitude:</Text>
      <TextInput style={styles.input} value={rua} onChangeText={setRua} />
      <Button title="Enviar Relato" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default ReportForm;
