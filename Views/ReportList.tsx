import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://10.0.2.2:8080/relatos')
      .then(response => setReports(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItems = ({ item }) => (
    <View style={styles.outBox}>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Ionicons name='map' size={50} color='#00796b'/>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.textSecond}><Text style={styles.text}>Tipo: </Text>{item.tipo}:</Text>
        <Text style={styles.textSecond}><Text style={styles.text}>Descrição: </Text>{item.descricao}</Text>
        <Text>{item.latitude} {item.longitude} </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList 
        data={reports}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItems}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
    marginBottom: 65,
  },
  box: {
    marginHorizontal: 15,
  },
  outBox: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#00796b',
    fontSize: 14,
  },
  textSecond: {
    color: 'black',
    width: 260,
  },
  item: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ReportList;
